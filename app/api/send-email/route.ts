import { NextRequest, NextResponse } from 'next/server';
import { transporter, mailOptions, getAcknowledgementEmailHTML } from '@/lib/mailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email } = body;

        if (!name || !email) {
            return NextResponse.json(
                { success: false, message: 'Name and email are required' },
                { status: 400 }
            );
        }

        // Check if email is configured
        if (!process.env.EMAIL || !process.env.PASSWORD || !process.env.SENDER_MAIL) {
            console.warn('Email not configured. Skipping email send.');
            return NextResponse.json(
                { success: true, message: 'Email configuration missing, but request processed' },
                { status: 200 }
            );
        }

        // Send acknowledgement email
        await transporter.sendMail({
            ...mailOptions,
            to: email,
            subject: 'Welcome to BranDeal - You\'re on the Waitlist! 🎉',
            html: getAcknowledgementEmailHTML(name),
        });

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send email' },
            { status: 500 }
        );
    }
}

