import { useEffect, useRef } from 'react'
import '../styles/Sections.css'

const skills = [
    {
        icon: '🎨',
        name: 'Figma',
        desc: 'My primary design tool — wireframes, prototypes, and high-fidelity UI.',
        level: 92,
        color: '#f472b6',
    },
    {
        icon: '📐',
        name: 'Wireframing',
        desc: 'Translating user needs and ideas into structured, logical layouts.',
        level: 88,
        color: '#a855f7',
    },
    {
        icon: '⚡',
        name: 'Prototyping',
        desc: 'Interactive prototypes that simulate real product experiences.',
        level: 85,
        color: '#3b82f6',
    },
    {
        icon: '🔍',
        name: 'UX Research',
        desc: 'User flows, usability testing, and design thinking methodologies.',
        level: 78,
        color: '#06b6d4',
    },
    {
        icon: '🖌️',
        name: 'Canva',
        desc: 'Quick branding assets, social media visuals, and marketing design.',
        level: 82,
        color: '#ec4899',
    },
    {
        icon: '✏️',
        name: 'Illustrator',
        desc: 'Basic vector illustration and icon creation for UI projects.',
        level: 40,
        color: '#f97316',
    },
    {
        icon: '📱',
        name: 'Mobile Design',
        desc: 'Responsive, thumb-friendly mobile app UI design patterns.',
        level: 84,
        color: '#8b5cf6',
    },
    {
        icon: '♿',
        name: 'Accessibility',
        desc: 'Designing inclusive interfaces following WCAG guidelines.',
        level: 72,
        color: '#10b981',
    },
]

export default function Skills() {
    const barRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const bar = entry.target
                        const pct = bar.getAttribute('data-pct')
                        bar.style.width = pct + '%'
                    }
                })
            },
            { threshold: 0.3 }
        )
        barRefs.current.forEach(r => r && observer.observe(r))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="section" id="skills" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(168,85,247,0.03) 50%, transparent 100%)' }}>
            <div className="container skills-wrap">
                {/* Orb decorations */}
                <div className="orb orb-purple" style={{ width: 400, height: 400, top: -100, right: -100 }} />
                <div className="orb orb-blue" style={{ width: 300, height: 300, bottom: -50, left: -50 }} />

                <div className="section-label">What I Do</div>
                <h2 className="section-title">
                    Skills &amp; <span className="gradient-text">Expertise</span>
                </h2>
                <p className="section-subtitle">
                    Combining design intuition with systematic thinking to create interfaces that are beautiful and functional.
                </p>

                <div className="skills-grid">
                    {skills.map((s, i) => (
                        <div key={s.name} className="glass skill-card">
                            <div className="skill-card-icon" style={{ borderColor: s.color + '33' }}>
                                {s.icon}
                            </div>
                            <div className="skill-card-name">{s.name}</div>
                            <div className="skill-card-desc">{s.desc}</div>
                            <div className="skill-bar-wrap">
                                <div
                                    className="skill-bar"
                                    ref={el => barRefs.current[i] = el}
                                    data-pct={s.level}
                                    style={{
                                        width: '0%',
                                        background: `linear-gradient(90deg, ${s.color}aa, ${s.color})`,
                                        boxShadow: `0 0 10px ${s.color}66`,
                                        transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 0.08}s`,
                                    }}
                                />
                            </div>
                            <span className="skill-pct" style={{ color: s.color }}>{s.level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
