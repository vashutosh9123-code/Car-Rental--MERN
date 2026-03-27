import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-surface-light border-t border-borderColor">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-borderColor">
            {/* Brand */}
            <div className="space-y-6">
              <Link to="/" className="inline-block">
                <img src={assets.logo} alt="CarRental" className="h-8 transition-transform hover:scale-105 duration-300" />
              </Link>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                Experience excellence with our premium car rental services. Luxury, comfort, and safety for your every journey.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: assets.facebook_logo, label: "Facebook" },
                  { icon: assets.instagram_logo, label: "Instagram" },
                  { icon: assets.twitter_logo, label: "Twitter" },
                  { icon: assets.gmail_logo, label: "Email" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="w-9 h-9 rounded-lg bg-white border border-borderColor flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300 group shadow-sm"
                    aria-label={social.label}
                  >
                    <img
                      src={social.icon}
                      alt={social.label}
                      className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-text-primary font-bold text-sm uppercase tracking-wider mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "Browse Cars", path: "/cars" },
                  { name: "My Bookings", path: "/my-bookings" },
                  { name: "List Your Car", path: "/owner" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-text-secondary text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-text-primary font-bold text-sm uppercase tracking-wider mb-6">
                Resources
              </h3>
              <ul className="space-y-4">
                {["Help Center", "Terms of Service", "Privacy Policy", "Insurance"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-text-secondary text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-text-primary font-bold text-sm uppercase tracking-wider mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4 text-text-secondary text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-borderColor flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span>1234 Luxury Drive, New Delhi</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-borderColor flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span>+91 9889145890</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-borderColor flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <span>info@carrental.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
            <p className="text-text-muted text-sm text-center md:text-left">
              © {new Date().getFullYear()} CarRental. All rights reserved. Made with ❤️ for luxury driving.
            </p>
            <div className="flex items-center gap-8">
              {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-text-muted text-xs hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

