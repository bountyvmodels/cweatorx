
'use client';
import Link from 'next/link';


const mockCourses = [
  {
    title: 'Brotherhood Of Scent',
    subtitle: '#1 Fragrance Community',
    members: '7.2k',
    price: 'Free',
    image: '/scent.jpg',
  },
  {
    title: 'Abbew Crew',
    subtitle: 'Health, Body & Energy',
    members: '11.3k',
    price: '$129',
    image: '/abbew.jpg',
  },
  {
    title: 'Calligraphy Skool',
    subtitle: 'Learn Modern Calligraphy',
    members: '1.3k',
    price: '$9/mo',
    image: '/calligraphy.jpg',
  },
];

export default function Landing() {
  return (
    <main className="bg-white text-pink-600 min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="text-center pt-16 px-4">
        <h1 className="text-5xl font-light tracking-widest">CWEATORS</h1>
        <h2 className="text-3xl font-semibold mt-4 text-pink-400">Create. Discover. Earn.</h2>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/login" className="bg-pink-500 text-white py-2 px-6 rounded-full">Log In</Link>
          <Link href="/signup" className="border border-pink-500 text-pink-500 py-2 px-6 rounded-full">Sign Up</Link>
        </div>
      </section>

      {/* Features */}
      <section className="mt-16 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Why Cweator?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer" onClick={() => window.location.href='/signup'}>
            <h4 className="font-bold text-lg">MLM Affiliate Ready</h4>
            <p className="text-pink-700 mt-1 text-sm">Grow through layered referrals and earn passively.</p>
          </div>
          <div className="border p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer" onClick={() => window.location.href='/signup'}>
            <h4 className="font-bold text-lg">Cweator Hub</h4>
            <p className="text-pink-700 mt-1 text-sm">Monetize your content & community like OnlyFans or Patreon.</p>
          </div>
          <div className="border p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer" onClick={() => window.location.href='/signup'}>
            <h4 className="font-bold text-lg">Cweator Uni</h4>
            <p className="text-pink-700 mt-1 text-sm">Sell your courses and automate your income stream.</p>
          </div>
        </div>
      </section>

      {/* Top Courses */}
      <section className="mt-20 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Top Earning Communities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCourses.map((course, idx) => (
            <div
              key={idx}
              onClick={() => window.location.href = '/signup'}
              className="cursor-pointer border border-pink-100 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="h-48 bg-gray-100 w-full">
                <img src={course.image} alt={course.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-xl">{course.title}</h4>
                <p className="text-sm text-pink-700 mt-1">{course.subtitle}</p>
                <div className="flex justify-between items-center mt-2 text-sm">
                  <span>{course.members} Members</span>
                  <span className="font-medium">{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-pink-400 mt-20 py-6">
        &copy; {new Date().getFullYear()} Cweator.com. All rights reserved.
      </footer>
    </main>
  );
}
