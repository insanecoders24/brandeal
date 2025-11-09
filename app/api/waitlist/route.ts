import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone } = body;

        // Validate required fields
        if (!name || !email || !phone) {
            return NextResponse.json(
                { success: false, message: 'All fields are required' },
                { status: 400 }
            );
        }

        // Connect to database
        await dbConnect();

        // Check if email already exists
        const existingUser = await Waitlist.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return NextResponse.json(
                { success: false, message: 'This email is already on the waitlist' },
                { status: 400 }
            );
        }

        // Create new waitlist entry
        const waitlistEntry = await Waitlist.create({
            name,
            email,
            phone,
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Successfully joined the waitlist!',
                data: {
                    id: waitlistEntry._id,
                    name: waitlistEntry.name,
                    email: waitlistEntry.email,
                },
            },
            { status: 201 }
        );
    } catch (error: unknown) {
        console.error('Waitlist API Error:', error);

        if (error instanceof Error && 'code' in error && error.code === 11000) {
            return NextResponse.json(
                { success: false, message: 'This email is already registered' },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { success: false, message: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}

