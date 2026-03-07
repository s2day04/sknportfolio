import '../styles/Sections.css'
const pfp = '/pfp.png'
import { useState } from 'react'

const tools = [
    { icon: '🎨', name: 'Figma', level: 'Primary Tool' },
    { icon: '🖌️', name: 'Canva', level: 'Branding & Visual Design' },
    { icon: '✏️', name: 'Adobe Illustrator', level: 'Vector Graphics' },
    { icon: '🖼️', name: 'Adobe Photoshop', level: 'Basic Familiarity' },
]

export default function About() {
    const [imgErr, setImgErr] = useState(false)

    return (
        <section className="section" id="about">
            <div className="container">
                <div className="section-label">About Me</div>
                <div className="about-grid">
                    {/* Image */}
                    <div className="about-image-wrap">
                        {!imgErr ? (
                            <div style={{ position: 'relative' }}>
                                <div className="about-img-border" />
                                <div className="about-img-glow" />
                                <div className="about-img-frame glass">
                                    <img src={pfp} alt="Sakeena Yamin" onError={() => setImgErr(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '22px' }} />
                                </div>
                            </div>
                        ) : (
                            <div className="about-img-placeholder glass">🎨</div>
                        )}
                        <div className="about-dot-decoration" />
                    </div>

                    {/* Text */}
                    <div className="about-text">
                        <div className="section-label">Who I Am</div>
                        <h2 className="section-title">
                            Crafting Experiences <span className="gradient-text">That Users Love</span>
                        </h2>
                        <p className="about-desc">
                            I'm a passionate <strong style={{ color: '#c084fc' }}>UI/UX Designer</strong> based in Dubai, UAE,
                            focused on creating intuitive, user-centered, and visually engaging digital experiences.
                        </p>
                        <p className="about-desc">
                            My design approach is rooted in <strong style={{ color: '#60a5fa' }}>usability, accessibility, and design thinking</strong>.
                            I enjoy simplifying complex problems into smooth, modern interfaces that feel effortless to use —
                            from clean wireframes to interactive prototypes to high-fidelity UI designs.
                        </p>
                        <p className="about-desc">
                            I value collaboration, consistency, and continuous learning. Currently open to <strong style={{ color: '#f472b6' }}>freelance, part-time, and remote design projects globally</strong>.
                        </p>

                        <div className="about-tools">
                            <div className="about-tools-title">Tools I Work With</div>
                            <div className="about-tool-chips">
                                {tools.map(t => (
                                    <div key={t.name} className="tool-chip">
                                        <span className="tool-chip-icon">{t.icon}</span>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{t.name}</div>
                                            <div style={{ fontSize: '0.73rem', color: '#475569' }}>{t.level}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                            <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="about-behance">
                                <span>Be</span> View on Behance
                            </a>
                            <a href="https://www.linkedin.com/in/sakeena-yamin" target="_blank" rel="noopener noreferrer" className="about-behance" style={{ borderColor: 'rgba(168,85,247,0.3)', background: 'rgba(168,85,247,0.07)', color: '#c084fc' }}>
                                <span>in</span> LinkedIn Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
