import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

const navLinks = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Experience', href: 'experience' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('home')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40)
            // Detect active section
            const sections = navLinks.map(l => document.getElementById(l.href))
            const scrollPos = window.scrollY + 150
            sections.forEach((sec, i) => {
                if (sec && sec.offsetTop <= scrollPos) setActive(navLinks[i].href)
            })
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
                <div className="navbar-inner">
                    <span className="navbar-logo" onClick={() => scrollTo('home')}>SY.</span>
                    <ul className="navbar-links">
                        {navLinks.map(l => (
                            <li key={l.href}>
                                <a
                                    className={active === l.href ? 'active' : ''}
                                    onClick={() => scrollTo(l.href)}
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a className="navbar-cta" onClick={() => scrollTo('contact')}>Hire Me</a>
                        </li>
                    </ul>
                    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                        <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : '' }} />
                        <span style={{ opacity: menuOpen ? '0' : '1' }} />
                        <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : '' }} />
                    </button>
                </div>
            </nav>
            <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
                {navLinks.map(l => (
                    <a key={l.href} onClick={() => scrollTo(l.href)}>{l.label}</a>
                ))}
                <a onClick={() => scrollTo('contact')} style={{ color: '#c084fc', fontWeight: 600 }}>Hire Me →</a>
            </div>
        </>
    )
}
