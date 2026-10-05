import React, { useState } from 'react';

const quickLinks = ['Home', 'Players', 'My Squad', 'Fixtures'];
const supportLinks = ['About Us', 'How It Works', 'FAQs', 'Contact'];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="mt-16 bg-[#0F172A] text-slate-300">
      <div className="container mx-auto grid gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white">BPL Dream 11</h3>
          <p className="text-sm leading-relaxed text-slate-400">
            Build your ultimate cricket squad, manage your coins, and chase the top
            of the leaderboard. Beyond Boundaries, Beyond Limits.
          </p>
        </div>

        {/* Quick links */}
        <nav className="space-y-3">
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition-colors hover:text-[#D4FB20]">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Support */}
        <nav className="space-y-3">
          <h4 className="font-semibold text-white">Support</h4>
          <ul className="space-y-2 text-sm">
            {supportLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition-colors hover:text-[#D4FB20]">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter */}
        <div className="space-y-3">
          <h4 className="font-semibold text-white">Subscribe to our Newsletter</h4>
          <p className="text-sm text-slate-400">Get match updates and new player drops in your inbox.</p>
          <form onSubmit={handleSubscribe} className="join w-full">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input join-item w-full bg-slate-800 text-white placeholder:text-slate-500"
            />
            <button type="submit" className="btn join-item border-none bg-[#D4FB20] text-slate-900 hover:bg-[#c2ea10]">
              Subscribe
            </button>
          </form>
          {subscribed && <p className="text-sm text-[#D4FB20]">Thanks for subscribing!</p>}
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} BPL Dream 11. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;