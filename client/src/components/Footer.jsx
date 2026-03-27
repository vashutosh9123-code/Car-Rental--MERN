import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-16">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="bg-surface-light px-6 md:px-16 lg:px-24 xl:px-32 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-borderColor">
            {/* Brand */}
            <div className="lg:col-span-1">
              <img src={assets.logo} alt="CarRental" className="h-8 brightness-0 invert mb-4" />
              <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
              </p>
              <div className="flex items-center gap-4 mt-6">
                {[
                  { icon: assets.facebook_logo, label: "Facebook" },
                  { icon: assets.instagram_logo, label: "Instagram" },
                  { icon: assets.twitter_logo, label: "Twitter" },
                  { icon: assets.gmail_logo, label: "Email" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <img
                      src={social.icon}
                      alt={social.label}
                      className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "Browse Cars", path: "/cars" },
                  { name: "My Bookings", path: "/my-bookings" },
                  { name: "List Your Car", path: "/" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-text-secondary text-sm hover:text-primary-light transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-5">
                Resources
              </h3>
              <ul className="space-y-3">
                {["Help Center", "Terms of Service", "Privacy Policy", "Insurance"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-text-secondary text-sm hover:text-primary-light transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-5">
                Contact
              </h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0 text-text-muted">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  1234 Luxury Drive, New Delhi
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0 text-text-muted">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91 9889145890
                </li>
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0 text-text-muted">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  info@carrental.com
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
            <p className="text-text-muted text-sm">
              © {new Date().getFullYear()} CarRental. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-text-muted text-sm hover:text-text-secondary transition-colors duration-300"
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
