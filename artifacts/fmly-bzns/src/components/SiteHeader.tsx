import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { FaShoppingCart } from "react-icons/fa";
import { navItems, socialList } from "@/data/siteLinks";
import { SocialIcon } from "./SocialIcon";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="siteHeader">
      <div className="headerLeft">
        <Link href="/" className="brandLink" aria-label="FMLY BZNS — Home">
          <img
            src="/fmly-logo-color.png"
            alt="FMLY BZNS"
            className="brandLogo"
          />
        </Link>
      </div>

      <nav className={`primaryNav ${open ? "primaryNav--open" : ""}`}>
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? location === "/"
              : location.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "navLink navLink--active" : "navLink"}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="headerRight">
        <div className="iconRow" aria-label="social and music links">
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
        <Link
          href="/cart"
          className="cartBtn"
          aria-label={count > 0 ? `Cart (${count} items)` : "Cart"}
          title="Cart"
        >
          <FaShoppingCart aria-hidden focusable="false" />
          {count > 0 ? <span className="cartBadge">{count}</span> : null}
        </Link>
        <button
          type="button"
          className="navToggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
