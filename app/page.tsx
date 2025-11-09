import Link from 'next/link';
import {
  FileText,
  DollarSign,
  Bell,
  BarChart3,
  Calendar,
  Folder,
  CheckCircle2,
  ArrowRight,
  X
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BranDeal
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#problem" className="text-gray-700 hover:text-blue-600 transition-colors">Why BranDeal</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
              <Link
                href="/waitlist"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Join Waitlist
              </Link>
            </div>
            <div className="md:hidden">
              <Link
                href="/waitlist"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <FileText className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-700 text-sm font-medium">Say Goodbye to Messy Spreadsheets</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Manage All Your
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Brand Deals in One Place
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Track payments, manage invoices, set reminders, and never miss a deadline.
              The all-in-one brand deal management app built for creators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/waitlist"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#problem"
                className="px-8 py-4 bg-white text-gray-700 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-12 flex justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                <span>No More Spreadsheets</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                <span>Never Miss a Payment</span>
              </div>
              <div className="hidden sm:flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                <span>Stay Organized</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tired of Messy Google Sheets?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Most creators struggle to keep track of their brand deals, payments, and deadlines.
                They lose money, miss opportunities, and waste hours managing spreadsheets.
              </p>

              <div className="space-y-4">
                <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                  <X className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Lost Payments</h4>
                    <p className="text-gray-600 text-sm">Forgot to follow up? Lost track of who owes you money?</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                  <X className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Missed Deadlines</h4>
                    <p className="text-gray-600 text-sm">No reminders mean missed deliverables and unhappy brands.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                  <X className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Messy Organization</h4>
                    <p className="text-gray-600 text-sm">Scattered notes, emails, and spreadsheets everywhere.</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                  <X className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Time Wasted</h4>
                    <p className="text-gray-600 text-sm">Hours spent updating sheets instead of creating content.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">BranDeal Solves This</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                    <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Automatic Payment Tracking</h4>
                      <p className="text-blue-50 text-sm">Know exactly who owes you and when.</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                    <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Smart Reminders</h4>
                      <p className="text-blue-50 text-sm">Never miss a deadline or payment again.</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                    <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">All Deals in One Place</h4>
                      <p className="text-blue-50 text-sm">Everything organized, nothing lost.</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                    <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Invoice Management</h4>
                      <p className="text-blue-50 text-sm">Create and track invoices effortlessly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Brand Deals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Purpose-built for creators who want to stay organized and get paid on time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Payment Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                Track every payment from inquiry to completion. Know exactly what you're owed and what's been paid.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Invoice Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Create, send, and track invoices all in one place. No more lost invoices or payment confusion.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Reminders</h3>
              <p className="text-gray-700 leading-relaxed">
                Get notified about upcoming deadlines, pending payments, and important milestones automatically.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <Folder className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Deal Organization</h3>
              <p className="text-gray-700 leading-relaxed">
                Keep all brand deal details, contracts, and communication organized in one central hub.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Revenue Analytics</h3>
              <p className="text-gray-700 leading-relaxed">
                Visualize your earnings, track trends, and understand your revenue streams at a glance.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Deadline Calendar</h3>
              <p className="text-gray-700 leading-relaxed">
                Visual calendar view of all your deliverables, meetings, and payment dates in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple Setup, Powerful Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start managing your brand deals like a pro in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Add Your Deals</h3>
              <p className="text-gray-600">
                Import existing deals from your spreadsheets or add new ones as they come in.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Track Everything</h3>
              <p className="text-gray-600">
                Monitor payments, deadlines, and deliverables. Get reminders so nothing slips through.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Paid On Time</h3>
              <p className="text-gray-600">
                Never miss a payment again. Stay on top of invoices and follow-ups effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Ditch Your Spreadsheets?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the waitlist and be among the first creators to experience stress-free brand deal management
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Join the Waitlist Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <p className="mt-4 text-blue-100 text-sm">
            Early access members get lifetime discounts
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BranDeal
              </span>
              <p className="mt-4 text-gray-400">
                The brand deal management app built for creators.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#problem" className="hover:text-white transition-colors">Why BranDeal</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 BranDeal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
