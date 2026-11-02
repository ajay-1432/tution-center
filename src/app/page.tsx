import { Suspense } from "react";
import Link from "next/link";
import { io } from "next/cache";

const courses = [
{
icon: "📐",
title: "Mathematics",
description: "Build strong concepts with practical examples and expert guidance.",
classes: "Class 6th – 12th",
color: "bg-blue-50",
iconColor: "bg-blue-100",
},
{
icon: "🔬",
title: "Science",
description: "Understand physics, chemistry and biology with ease.",
classes: "Class 6th – 12th",
color: "bg-purple-50",
iconColor: "bg-purple-100",
},
{
icon: "💻",
title: "Computer Science",
description: "Learn programming, computer fundamentals and technology.",
classes: "Class 9th – 12th",
color: "bg-cyan-50",
iconColor: "bg-cyan-100",
},
];

const features = [
{
icon: "👨‍🏫",
title: "Expert Teachers",
description: "Learn from experienced and dedicated teachers.",
},
{
icon: "📚",
title: "Smart Learning",
description: "Structured study material and easy learning methods.",
},
{
icon: "📊",
title: "Performance Tracking",
description: "Track your academic progress and improve every day.",
},
{
icon: "🎯",
title: "Personal Attention",
description: "Individual guidance to help every student succeed.",
},
];

async function CurrentYear() {
  await io();
  return new Date().getFullYear();
}

export default function Home() {
return ( <main className="min-h-screen overflow-hidden bg-white text-slate-900">

```
  {/* Navbar */}
  <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white shadow-lg shadow-indigo-200">
          E
        </div>
        <div>
          <h1 className="text-lg font-extrabold tracking-tight">
            Edu<span className="text-indigo-600">Center</span>
          </h1>
          <p className="text-[10px] font-medium tracking-[2px] text-slate-400">
            LEARN. GROW. SUCCEED.
          </p>
        </div>
      </Link>

      <div className="hidden items-center gap-9 text-sm font-semibold text-slate-600 md:flex">
        <a href="#home" className="transition hover:text-indigo-600">Home</a>
        <a href="#courses" className="transition hover:text-indigo-600">Courses</a>
        <a href="#about" className="transition hover:text-indigo-600">About Us</a>
        <a href="#features" className="transition hover:text-indigo-600">Why Choose Us</a>
        <a href="#contact" className="transition hover:text-indigo-600">Contact</a>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="hidden rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-bold transition hover:border-indigo-600 hover:text-indigo-600 sm:block"
        >
          Login
        </Link>
        <a
          href="#contact"
          className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
        >
          Join Now ↗
        </a>
      </div>
    </div>
  </nav>

  {/* Hero Section */}
  <section id="home" className="relative bg-[#f8f9ff]">
    <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
    <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

    <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

      <div>
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-bold text-indigo-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          YOUR JOURNEY TO SUCCESS STARTS HERE
        </div>

        <h2 className="max-w-xl text-5xl leading-[1.15] font-black tracking-tight text-slate-900 sm:text-6xl">
          Learn Today,
          <span className="block text-indigo-600">Lead Tomorrow.</span>
        </h2>

        <p className="mt-7 max-w-lg text-base leading-8 text-slate-500">
          Discover your potential with expert teachers, personalized
          learning and a supportive environment designed to help you
          achieve academic excellence.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#courses"
            className="rounded-xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-700"
          >
            Explore Courses →
          </a>
          <a
            href="#about"
            className="rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600"
          >
            Discover More
          </a>
        </div>

        <div className="mt-12 flex items-center gap-5">
          <div className="flex -space-x-3">
            {["A", "R", "S", "M"].map((item, index) => (
              <div
                key={item}
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-sm font-bold text-white ${
                  ["bg-indigo-500", "bg-purple-500", "bg-pink-500", "bg-cyan-600"][index]
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <div>
            <div className="text-sm font-extrabold text-slate-900">Trusted Learning Community</div>
            <div className="mt-1 text-xs text-slate-500">Helping students achieve more.</div>
          </div>
        </div>
      </div>

      {/* Hero Illustration */}
      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute -inset-5 rounded-[40px] bg-indigo-200/40 blur-2xl" />

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 p-8 shadow-2xl shadow-indigo-200 sm:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-purple-400/20 blur-2xl" />

          <div className="relative">
            <div className="mb-10 flex items-center justify-between">
              <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold text-white">
                ✨ Smart Education
              </span>
              <span className="text-2xl">✦</span>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-md">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-indigo-100">Your Future Starts</p>
                  <h3 className="mt-1 text-3xl font-black text-white">With Learning.</h3>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl">
                  🎓
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ["Mathematics", "bg-cyan-400", "85%"],
                  ["Science", "bg-pink-400", "75%"],
                  ["Computer", "bg-yellow-400", "90%"],
                ].map(([name, color, value]) => (
                  <div key={name}>
                    <div className="mb-2 flex justify-between text-xs font-semibold text-white">
                      <span>{name}</span>
                      <span>{value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/20">
                      <div
                        className={`h-full rounded-full ${color}`}
                        style={{ width: value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/15 p-4">
                <div className="text-2xl font-black text-white">100%</div>
                <div className="mt-1 text-xs text-indigo-100">Dedication</div>
              </div>
              <div className="rounded-2xl bg-white/15 p-4">
                <div className="text-2xl font-black text-white">24/7</div>
                <div className="mt-1 text-xs text-indigo-100">Learning Mindset</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -left-7 top-1/3 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
          <div className="text-2xl">🏆</div>
          <p className="mt-1 text-xs font-bold text-slate-800">Dream Big!</p>
        </div>

        <div className="absolute -right-5 bottom-12 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
          <div className="text-2xl">📚</div>
          <p className="mt-1 text-xs font-bold text-slate-800">Keep Learning</p>
        </div>
      </div>
    </div>
  </section>

  {/* Statistics */}
  <section className="border-y border-slate-100 bg-white">
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 lg:px-8">
      {[
        ["500+", "Happy Students"],
        ["25+", "Expert Teachers"],
        ["15+", "Courses Available"],
        ["95%", "Student Satisfaction"],
      ].map(([number, label]) => (
        <div key={label} className="text-center">
          <h3 className="text-3xl font-black text-indigo-600">{number}</h3>
          <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Courses */}
  <section id="courses" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="text-xs font-extrabold tracking-[3px] text-indigo-600">OUR PROGRAMS</span>
      <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
        Explore Our Popular Courses
      </h2>
      <p className="mt-4 leading-7 text-slate-500">
        Quality education and expert guidance to help you build a brighter future.
      </p>
    </div>

    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <div
          key={course.title}
          className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/50"
        >
          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${course.iconColor} text-3xl`}>
            {course.icon}
          </div>

          <h3 className="mt-7 text-xl font-extrabold">{course.title}</h3>
          <p className="mt-3 min-h-14 text-sm leading-7 text-slate-500">
            {course.description}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
            <span className="text-xs font-bold text-slate-500">{course.classes}</span>
            <span className="font-bold text-indigo-600 transition group-hover:translate-x-1">→</span>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* About */}
  <section id="about" className="bg-[#f8f9ff] py-24">
    <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

      <div className="relative">
        <div className="rounded-[32px] bg-gradient-to-br from-indigo-600 to-purple-700 p-10 text-white sm:p-14">
          <div className="text-7xl">🎓</div>
          <h3 className="mt-8 text-3xl font-black leading-tight">
            Education is the foundation of a better tomorrow.
          </h3>
          <p className="mt-5 leading-7 text-indigo-100">
            We believe every student has the potential to achieve greatness.
          </p>
          <div className="mt-9 h-1.5 w-20 rounded-full bg-yellow-400" />
        </div>
        <div className="absolute -bottom-5 -right-4 rounded-2xl bg-white p-5 shadow-xl">
          <p className="text-2xl font-black text-indigo-600">100%</p>
          <p className="text-xs font-semibold text-slate-500">Focus on Growth</p>
        </div>
      </div>

      <div>
        <span className="text-xs font-extrabold tracking-[3px] text-indigo-600">ABOUT OUR CENTER</span>
        <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight">
          We Make Learning Simple, Smart & Effective.
        </h2>
        <p className="mt-6 leading-8 text-slate-500">
          Our mission is to provide quality education in a friendly
          environment. We focus on conceptual understanding, regular
          practice and continuous improvement.
        </p>

        <div className="mt-8 space-y-5">
          {[
            "Experienced and qualified faculty",
            "Regular tests and performance analysis",
            "Personalized student guidance",
            "Student-friendly learning environment",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600">✓</span>
              <span className="text-sm font-semibold text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Features */}
  <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div className="mb-14 text-center">
      <span className="text-xs font-extrabold tracking-[3px] text-indigo-600">WHY CHOOSE US</span>
      <h2 className="mt-4 text-4xl font-black tracking-tight">Learning Beyond Classrooms</h2>
      <p className="mt-4 text-slate-500">Everything students need to achieve their goals.</p>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <div key={feature.title} className="rounded-3xl border border-slate-100 p-7 transition hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/40">
          <div className="text-4xl">{feature.icon}</div>
          <h3 className="mt-6 text-lg font-extrabold">{feature.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-500">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>

  {/* CTA */}
  <section id="contact" className="px-6 pb-24 lg:px-8">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 to-purple-700 px-8 py-16 text-center text-white sm:px-16">
      <span className="text-xs font-bold tracking-[3px] text-indigo-200">YOUR FUTURE IS WAITING</span>
      <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-black leading-tight sm:text-5xl">
        Ready to Take Your First Step Towards Success?
      </h2>
      <p className="mx-auto mt-5 max-w-xl leading-7 text-indigo-100">
        Join our learning community and start building your brighter future today.
      </p>
      <a href="mailto:admissions@example.com" className="mt-9 inline-flex rounded-xl bg-white px-8 py-4 text-sm font-extrabold text-indigo-700 shadow-xl transition hover:-translate-y-1 hover:bg-indigo-50">
        Contact For Admission →
      </a>
    </div>
  </section>

  {/* Footer */}
  <footer className="border-t border-slate-100 bg-[#0f172a] text-white">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-3 lg:px-8">
      <div>
        <h2 className="text-2xl font-black">Edu<span className="text-indigo-400">Center</span></h2>
        <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
          Empowering students through quality education, expert guidance and smart learning.
        </p>
      </div>

      <div>
        <h3 className="font-bold">Quick Links</h3>
        <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#courses" className="hover:text-white">Courses</a>
          <a href="#about" className="hover:text-white">About Us</a>
          <a href="#features" className="hover:text-white">Why Choose Us</a>
        </div>
      </div>

      <div>
        <h3 className="font-bold">Get In Touch</h3>
        <div className="mt-5 space-y-4 text-sm text-slate-400">
          <p>📍 Your Tuition Center Address</p>
          <p>✉️ admissions@example.com</p>
          <p>📞 +91 XXXXX XXXXX</p>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-500">
      © <Suspense fallback={null}><CurrentYear /></Suspense> EduCenter. All rights reserved.
    </div>
  </footer>

</main>

);
}
