import styles from "./Nav.module.css"
import { useState } from "react"

const navLinks = [
  { to: '#about', label: 'About' },
  { to: '#skills', label: 'Skills' },
  { to: '#work', label: 'Work' },
  { to: '#experience', label: 'Experience' },
  { to: '#contact', label: 'Contact' },
]

function InkUnderline() {
  return (
    <svg
      className={styles.inkUnderline}
      viewBox="0 0 80 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 4.5 C10 1.5, 20 5.5, 30 3.5 C40 1.5, 50 5, 60 3 C68 1.5, 74 4.5, 79 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function ArrowSpark() {
  return (
    <svg
      className={styles.ctaArrow}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 8h10M8 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LogoMark() {
  return (
    <svg
      className={styles.logoSvg}
      viewBox="140 52 400 296"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Grace Ufuah"
    >
      <defs>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');`}</style>
      </defs>
      <g transform="translate(340, 200)">
        <circle cx="6" cy="8" r="148" fill="#1a1209" opacity="0.18" />
        <circle cx="0" cy="0" r="148" fill="#D85A30" />
        <circle cx="0" cy="0" r="138" fill="none" stroke="#1a1209" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.25" />
        <circle cx="0" cy="0" r="148" fill="none" stroke="#1a1209" strokeWidth="3.5" opacity="0.85" />
        <circle cx="2" cy="-2" r="148" fill="none" stroke="#1a1209" strokeWidth="1" opacity="0.12" />
        <text x="-22" y="28" fontFamily="'Playfair Display', Georgia, serif" fontWeight="900" fontSize="118" fill="#1a1209" textAnchor="middle" letterSpacing="-4" opacity="0.92">G</text>
        <text x="62" y="28" fontFamily="'Playfair Display', Georgia, serif" fontWeight="900" fontSize="118" fill="#fdf6ec" textAnchor="middle" letterSpacing="-4" opacity="0.95">U</text>
        <line x1="18" y1="-60" x2="14" y2="50" stroke="#1a1209" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
        <line x1="-76" y1="89" x2="-52" y2="89" stroke="#1a1209" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
        <line x1="52" y1="89" x2="76" y2="89" stroke="#1a1209" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      </g>
    </svg>
  )
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>

        <a href="#home" className={styles.navLogo} aria-label="Home">
          <LogoMark />
        </a>

        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.to} className={styles.navItem}>
              <a className={styles.navLink} href={link.to}>
                {link.label}
                <InkUnderline />
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.ctaButton}
          onClick={() => window.location.hash = '#contact'}
        >
          Let&apos;s Talk
          <ArrowSpark />
        </button>

        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

      </nav>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.to}
            href={link.to}
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <button
          className={styles.mobileCta}
          onClick={() => {
            closeMenu()
            window.location.hash = '#contact'
          }}
        >
          Let&apos;s Talk
          <ArrowSpark />
        </button>
      </div>

    </header>
  )
}