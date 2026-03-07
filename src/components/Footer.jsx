import '../styles/Sections.css'

const socialLinks = [
    { icon: 'in', href: 'https://www.linkedin.com/in/sakeena-yamin', label: 'LinkedIn' },
    { icon: 'Be', href: 'https://www.behance.net', label: 'Behance' },
    { icon: '✉', href: 'mailto:sakeenayamin04@gmail.com', label: 'Email' },
]

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-logo">SY.</div>
                <p style={{ color: '#475569', maxWidth: 420, margin: '0 auto 28px', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    UI/UX Designer crafting intuitive digital experiences.<br />
                    Available for freelance &amp; remote projects globally.
                </p>
                <div className="footer-social">
                    {socialLinks.map(s => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label={s.label}>
                            {s.icon}
                        </a>
                    ))}
                </div>
                <div className="divider" style={{ maxWidth: 400, margin: '0 auto 24px' }} />
                <p className="footer-copy">
                    Designed &amp; Built with <span>♥</span> by Sakeena Yamin · {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}
