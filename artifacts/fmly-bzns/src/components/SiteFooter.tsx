import { useState } from "react";
import { Link } from "wouter";
import { navItems, socialList } from "@/data/siteLinks";
import { SocialIcon } from "./SocialIcon";
import { Logo } from "./Logo";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="footer">
      <div className="footerTop">
        <Link href="/" className="footerBrand" aria-label="FMLY BZNS — Home">
          <Logo size={56} />
        </Link>
        <nav className="footerLinks" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div
          className="iconRow compact"
          aria-label="all social and music links"
        >
          {socialList.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              title={s.name}
            >
              <SocialIcon name={s.name} />
            </a>
          ))}
        </div>
      </div>

      <form
        className="footerSignup"
        onSubmit={(e) => {
          e.preventDefault();
          if (email.trim()) setSubmitted(true);
        }}
      >
        {submitted ? (
          <p className="footerSignupOk">
            You're on the signal — see you on the floor.
          </p>
        ) : (
          <>
            <label className="srOnly" htmlFor="footer-email">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Email for mixes, tickets and drops"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Get the signal</button>
          </>
        )}
      </form>

      <small>© {new Date().getFullYear()} FMLY BZNS — global movement.</small>
    </footer>
  );
}
