import styles from './Footer.module.css'

const MailIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 6L12 13L20 6" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
)

const ChatIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <path d="M4 4H20V16H8L4 20V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
)

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <path
            d="M5 4H9L11 9L8.5 10.5C9.5 13 11 14.5 13.5 15.5L15 13L20 15V19C20 20 19 21 18 21C10 21 3 14 3 6C3 5 4 4 5 4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
        />
    </svg>
)

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" aria-hidden="true">
        <path d="M6 18L18 6M18 6H9M18 6V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
]

const socials = [
    { label: 'LinkedIn', href: 'linkedin.com/in/grace-ufuah-49a566342?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    {
        label: 'Instagram', href: 'https://www.instagram.com/ufuah_grace?igsh=MWFkZ3Jrc2Rja3Vsdw%3D%3D&utm_source=qr' },
    { label: 'Twitter', href: 'https://x.com/ufuahg?s=11' },
]

export default function Footer() {
    const scrollToTop = (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className={styles.footer}>
            <svg className={styles.floatSparkle1} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9L12 2Z" fill="var(--raw-marigold)" opacity="0.5" />
            </svg>
            <svg className={styles.floatSparkle2} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="3" fill="var(--raw-teal)" opacity="0.5" />
            </svg>

            <div className={styles.topRow}>
                <div className={styles.headlineBlock}>
                    <h2 className={styles.headline}>
                        Let's create
                        <br />
                        something{' '}
                        <span className={styles.boldWord}>
                            bold.
                            <svg className={styles.underline} viewBox="0 0 120 14" fill="none" aria-hidden="true">
                                <path
                                    d="M2 9C20 2 40 12 60 7C80 2 100 12 118 7"
                                    stroke="var(--raw-coral)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                            </svg>
                        </span>
                    </h2>

                    <ul className={styles.contactList}>
                        <li className={styles.contactItem}>
                            <MailIcon />
                            <a href="mailto:ufuahebosereme@gmail.com">ufuahebosereme@gmail.com</a>
                        </li>
                        <li className={styles.contactItem}>
                            <ChatIcon />
                            <a href="https://wa.me/2341234567890">WhatsApp: +234 123 456 7890</a>
                        </li>
                        <li className={styles.contactItem}>
                            <PhoneIcon />
                            <a href="tel:+2341234567890">Call/SMS: +234 123 456 7890</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.socialRow}>
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.socialPill}
                        >
                            {social.label}
                            <ArrowIcon />
                        </a>
                    ))}
                </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.bottomRow}>
                <a href="#top" onClick={scrollToTop} className={styles.logo}>
                    GU
                </a>

                <nav className={styles.bottomNav}>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <p className={styles.copyright}>&copy; {new Date().getFullYear()} Grace Ufuah.</p>
            </div>

        </footer>
    )
}