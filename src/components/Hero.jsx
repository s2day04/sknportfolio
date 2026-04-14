import { useState, useEffect, useRef } from 'react'
import '../styles/Hero.css'

const pfp = '/picture.png'

const roles = [
    'UI/UX Designer',
    'Figma Specialist',
    'Wireframing Expert',
    'Prototyping Artist',
    'User Experience Crafter',
]

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [typing, setTyping] = useState(true)
    const timeout = useRef(null)

    useEffect(() => {
        const current = roles[roleIdx]
        if (typing) {
            if (displayed.length < current.length) {
                timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
            } else {
                timeout.current = setTimeout(() => setTyping(false), 2000)
            }
        } else {
            if (displayed.length > 0) {
                timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
            } else {
                setRoleIdx((roleIdx + 1) % roles.length)
                setTyping(true)
            }
        }
        return () => clearTimeout(timeout.current)
    }, [displayed, typing, roleIdx])

    const [imgErr, setImgErr] = useState(false)

    return (
        <section className="hero" id="home">
            <div className="hero-bg">
                <div className="hero-grid" />
                <div className="hero-orb-1" />
                <div className="hero-orb-2" />
            </div>

            <div className="container">
                <div className="hero-content">

                    {/* Text Side */}
                    <div className="hero-text-side">
                        <div className="hero-badge">
                            <span className="hero-badge-dot" />
                            Available for Freelance
                        </div>

                        <h1 className="hero-name">Sakeena<br />Yamin</h1>

                        <p className="hero-title">
                            <span className="hero-title-typed">{displayed}</span>
                            <span className="hero-cursor" />
                        </p>

                        <p className="hero-desc">
                            Passionate UI/UX Designer transforming ideas into intuitive,
                            user-centered digital experiences. Specializing in Figma —
                            from wireframes to high-fidelity prototypes that users love.
                        </p>

                        <div className="hero-actions">
                            <a
                                href="/resume.pdf"
                                download
                                className="btn-neon btn-primary"
                            >
                                <span>⬇</span> Download Resume
                            </a>
                            <a
                                href="/portfolio.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-neon btn-outline"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                            >
                                <span>📄</span> Download PDF Portfolio
                            </a>
                        </div>


                    </div>

                    {/* Visual Side */}
                    <div className="hero-visual">
                        <div className="hero-profile-ring">
                            <div className="hero-ring-outer">
                                <span className="hero-ring-dot" />
                            </div>

                            {!imgErr ? (
                                <img
                                    src={pfp}
                                    alt="Sakeena Yamin"
                                    className="hero-profile-img"
                                    onError={() => setImgErr(true)}
                                />
                            ) : (
                                <div className="hero-profile-placeholder">
                                    <span>🎨</span>
                                </div>
                            )}

                            {/* Floating cards */}
                            <div className="hero-floating-card card-figma glass">
                                <div className="card-icon card-icon-figma">🎨</div>
                                <div>
                                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Primary Tool</div>
                                    <div style={{ fontWeight: 600 }}>Figma</div>
                                </div>
                            </div>
                            <div className="hero-floating-card card-open glass">
                                <div className="card-icon card-icon-open">✅</div>
                                <div>
                                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Status</div>
                                    <div style={{ fontWeight: 600 }}>Open to Work</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="hero-scroll">
                <div className="hero-scroll-line" />
                <span>scroll</span>
            </div>
        </section>
    )
}
