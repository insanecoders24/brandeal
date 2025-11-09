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
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/50 to-teal-50/60">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                BranDeal
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors">Features</a>
              <a href="#problem" className="text-gray-700 hover:text-emerald-600 transition-colors">Why BranDeal</a>
              <a href="#workflow" className="text-gray-700 hover:text-emerald-600 transition-colors">Workflow</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors">How It Works</a>
              <Link
                href="/waitlist"
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Join Waitlist
              </Link>
            </div>
            <div className="md:hidden">
              <Link
                href="/waitlist"
                className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-emerald-300 to-teal-300"></div>
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full blur-2xl opacity-40 bg-gradient-to-tr from-emerald-200 to-teal-200"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1.5 bg-emerald-50 rounded-full mb-6 border border-emerald-100">
            <FileText className="w-4 h-4 text-emerald-600 mr-2" />
            <span className="text-emerald-700 text-xs font-medium">Built by creators, for creators</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
            Replace messy sheets with a calm, clear deal hub
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-5 max-w-2xl mx-auto">
            Track payments, send invoices, and manage brand deals — in one beautiful dashboard designed for creators.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/waitlist"
              className="group px-7 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-base font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center"
            >
              Get Early Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#workflow"
              className="px-7 py-3.5 bg-white text-gray-800 rounded-full text-base font-semibold border border-gray-200 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200"
            >
              See Workflow
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">Free early access for the first 100 creators.</p>
          <div className="mt-12 relative">
            {/* <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-lg p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="h-24 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100"></div>
                <div className="h-24 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100"></div>
                <div className="h-24 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 hidden md:block"></div>
                <div className="h-24 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 hidden md:block"></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">From brief to payout — a stress-free flow</h2>
            <p className="text-gray-600 mt-3">Four simple steps, no spreadsheet chaos.</p>
          </div>
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 md:gap-4">
            <div className="flex-1">
              <div className="relative p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-white">
                <div className="flex items-center">
                  <div className="relative mr-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-center font-bold">1</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Folder className="w-5 h-5 text-emerald-600" />
                      <h3 className="font-semibold text-gray-900">Capture Deal</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Brand, scope, deliverables in one place.</p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-3 h-0.5 w-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-white">
                <div className="flex items-center">
                  <div className="relative mr-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-center font-bold">2</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                      <h3 className="font-semibold text-gray-900">Plan Timeline</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Milestones, due dates, reminders.</p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-3 h-0.5 w-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-white">
                <div className="flex items-center">
                  <div className="relative mr-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-center font-bold">3</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-emerald-600" />
                      <h3 className="font-semibold text-gray-900">Send Invoice</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Generate and share in seconds.</p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-3 h-0.5 w-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-white">
                <div className="flex items-center">
                  <div className="relative mr-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-center font-bold">4</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-emerald-600" />
                      <h3 className="font-semibold text-gray-900">Get Paid</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Track pending, partial, or paid at a glance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">Turn chaos into control</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Messages, briefs, invoices, and deadlines don’t belong in five different places. Bring them into one calm dashboard and move faster.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700 border border-red-100"><X className="w-4 h-4 mr-2" /> Lost payments</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700 border border-red-100"><X className="w-4 h-4 mr-2" /> Missed deadlines</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700 border border-red-100"><X className="w-4 h-4 mr-2" /> Scattered chats</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-gray-200 bg-white">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-emerald-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Auto reminders</h4>
                      <p className="text-gray-600 text-sm">Stay ahead of deliverables and payouts.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl border border-gray-200 bg-white">
                  <div className="flex items-start">
                    <DollarSign className="w-5 h-5 text-emerald-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Payment clarity</h4>
                      <p className="text-gray-600 text-sm">Know what’s pending, partial, or paid.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href="#features" className="inline-block px-6 py-3 text-emerald-600 font-semibold border border-emerald-200 rounded-full hover:bg-emerald-50 transition">See how BranDeal helps</a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-200/40 via-teal-200/30 to-emerald-100/40 blur-2xl"></div>
              <div className="relative rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Deal overview</h3>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Live</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-center">
                    <div className="text-xs text-gray-500 mb-1">Pending</div>
                    <div className="text-lg font-semibold text-gray-900">3</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-center">
                    <div className="text-xs text-gray-500 mb-1">Partial</div>
                    <div className="text-lg font-semibold text-gray-900">1</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-center">
                    <div className="text-xs text-gray-500 mb-1">Paid</div>
                    <div className="text-lg font-semibold text-gray-900">12</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-white">
                    <div className="flex items-center">
                      <Folder className="w-5 h-5 text-emerald-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900">Brand collab — Reels x3</span>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs bg-yellow-50 text-yellow-700 border border-yellow-100">Pending</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-white">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-emerald-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900">Invoice — BRD-1021</span>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-100">Sent</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-white">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-emerald-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900">Deliverable due — 14 Nov</span>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-100">Reminder set</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution / Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              From deal to payment — BranDeal keeps it together.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything in one place so you can focus on creating.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Folder className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Track Deals</h3>
              <p className="text-gray-700">Manage campaigns, deliverables, and timelines.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Smart Reminders</h3>
              <p className="text-gray-700">Get notified before payments or deadlines.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Invoice Generator</h3>
              <p className="text-gray-700">Create & share invoices in seconds.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Payment Tracker</h3>
              <p className="text-gray-700">See what’s pending, partial, or paid.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Earnings Dashboard</h3>
              <p className="text-gray-700">Visualize income, not spreadsheets.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Calendar View</h3>
              <p className="text-gray-700">Deadlines, payments, deliverables — all visible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Creators Choose BranDeal */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tools like Notion are great — but not for this.</h2>
          <p className="text-xl text-gray-600 mb-10">BranDeal is purpose-built for creators who:</p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">Work with multiple brands</div>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">Hate chasing payments</div>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">Want clarity without corporate complexity</div>
          </div>
          <blockquote className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left text-gray-700 italic">
            “I used to lose ₹10k+ a month because I forgot follow-ups. BranDeal keeps me sane.” — <span className="not-italic font-semibold">@shruti.creates</span>
          </blockquote>
        </div>
      </section>
      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple setup. Serious results.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Add your brand deals.</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Track payments and deliverables.</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sit back — BranDeal reminds you.</h3>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/waitlist" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
              Join the Waitlist — Free for Early Users
            </Link>
          </div>
        </div>
      </section>

      {/* Built for Every Creator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Built for Every Creator</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">
              <h3 className="font-semibold mb-2">YouTubers</h3>
              <p className="text-gray-600">Track sponsorships and payouts.</p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">
              <h3 className="font-semibold mb-2">Influencers</h3>
              <p className="text-gray-600">Manage collabs and deliverables.</p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">
              <h3 className="font-semibold mb-2">Freelancers</h3>
              <p className="text-gray-600">Automate invoices and reminders.</p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">
              <h3 className="font-semibold mb-2">UGC Creators</h3>
              <p className="text-gray-600">Keep client work and payments tidy.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently asked</h2>
            <p className="text-gray-600 mt-3">Quick answers about BranDeal and early access</p>
          </div>
          <div className="space-y-4">
            <details className="group rounded-2xl border border-gray-200 bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-semibold text-gray-900">Is the waitlist free?</span>
                <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-3 text-gray-600">Yes, joining the waitlist is 100% free. Early users also get a lifetime discount on Pro.</p>
            </details>
            <details className="group rounded-2xl border border-gray-200 bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-semibold text-gray-900">When will I get access?</span>
                <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-3 text-gray-600">We’re onboarding creators in small batches. We’ll email you as soon as your spot is ready.</p>
            </details>
            <details className="group rounded-2xl border border-gray-200 bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-semibold text-gray-900">Can I export my data?</span>
                <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-3 text-gray-600">Yes, you’ll be able to export deals and payments to CSV anytime.</p>
            </details>
            <details className="group rounded-2xl border border-gray-200 bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-semibold text-gray-900">Do you replace Notion or Sheets?</span>
                <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-3 text-gray-600">We focus on brand deals: invoices, payments, deliverables, and reminders. Keep using Notion for docs or content planning if you like.</p>
            </details>
          </div>
          <div className="text-center mt-10">
            <Link href="/waitlist" className="inline-flex items-center px-7 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-base font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200">
              Join the Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Early Access Perks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Early Access Perks</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">Get lifetime discount on Pro plan</div>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">Shape the features we build next</div>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white">Exclusive beta access</div>
          </div>
          <div className="mt-10">
            <Link href="/waitlist" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
              Join the Waitlist Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Waitlist — Free for Early Users</h2>
          <p className="text-xl text-emerald-100 mb-8">Be among the first creators to manage brand deals without chaos.</p>
          <Link href="/waitlist" className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
            Join the Waitlist Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <p className="mt-4 text-emerald-100 text-sm">Free early access for the first 100 creators.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">BranDeal</span>
              <p className="mt-4 text-gray-400">The smarter way for creators to manage brand deals.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#problem" className="hover:text-white transition-colors">Why BranDeal</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 BranDeal. Built in India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
