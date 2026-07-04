import { useState } from 'react'
import '../styles/Sections.css'

export default function Experience() {
    const [certOpen, setCertOpen] = useState(false)
    const [devsDayCertOpen, setDevsDayCertOpen] = useState(false)

    return (
        <section className="section" id="experience">
            <div className="container">
                <div className="section-label">My Journey</div>
                <h2 className="section-title">
                    Experience &amp; <span className="gradient-text">Education</span>
                </h2>
                <p className="section-subtitle">
                    Building real-world skills through hands-on experience and academic excellence.
                </p>

                {/* Experience Timeline */}
                <div className="exp-timeline">
                    <div className="exp-item">
                        <div className="glass exp-card">
                            <div className="exp-header">
                                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', flex: 1 }}>
                                    <div className="exp-logo">🏢</div>
                                    <div className="exp-meta">
                                        <div className="exp-company">Trust Nexus</div>
                                        <div className="exp-role">UI/UX Design Intern</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                                    <div className="exp-date">3rd Mar – 3rd Jun 2025</div>
                                    <div className="tag tag-purple">Internship · 3 mos</div>
                                    <button
                                        onClick={() => setCertOpen(true)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#a855f7',
                                            cursor: 'pointer',
                                            fontSize: '0.8rem',
                                            textDecoration: 'underline',
                                            padding: '2px 0',
                                        }}
                                    >
                                        View Certificate
                                    </button>
                                </div>
                            </div>
                            <div className="exp-location">📍 Karachi, Sindh, Pakistan · On-site</div>
                            <p className="exp-desc">
                                Designed UI screens for the project <strong style={{ color: '#c084fc' }}>"Nexovate"</strong> at Trust Nexus, ensuring a user-friendly and intuitive experience.
                                Collaborated closely with cross-functional teams to understand requirements and translate them into
                                clean, visually appealing interfaces. Focused on usability, consistency, and modern design
                                principles to enhance overall user engagement and product quality.
                            </p>
                            <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
                                <span className="tag tag-purple">Figma</span>
                                <span className="tag tag-blue">UI Design</span>
                                <span className="tag tag-pink">Prototyping</span>
                                <span className="tag tag-blue">Team Collaboration</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="edu-section">
                    <div className="section-label" style={{ marginTop: 20 }}>Education</div>
                    <div className="exp-timeline">
                        <div class="exp-item">
                            <div class="glass exp-card">
                                <div class="exp-header">
                                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', flex: 1 }}>
                                        <div class="exp-logo">🎓</div>
                                        <div class="exp-meta">
                                            <div class="exp-company">Bahria University Karachi Campus</div>
                                            <div class="exp-role">Bachelor of Science in Computer Science</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                                        <div class="exp-date">Sep 2022 – Jun 2026</div>
                                        <div class="tag tag-blue">Completed</div>
                                    </div>
                                </div>
                                <div class="exp-location">📍 Bahria University Karachi Campus</div>
                                <p class="exp-desc">
                                    Completed a Bachelor's degree in Computer Science with a strong interest in UI/UX design. Passionate about designing intuitive, user-friendly, and visually appealing digital experiences while combining technical knowledge with creative problem-solving.
                                </p>
                                <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
                                    <span class="tag tag-purple">UI Design</span>
                                    <span class="tag tag-blue">Mobile App Design</span>
                                    <span class="tag tag-pink">Web Design</span>
                                    <span class="tag tag-purple">Computer Science</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certificates */}
                <div className="edu-section">
                    <div className="section-label" style={{ marginTop: 20 }}>Certificates</div>
                    <div className="exp-timeline">
                        {/* Dev's Day '25 Certification */}
                        <div className="exp-item">
                            <div className="glass exp-card">
                                <div className="exp-header">
                                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', flex: 1 }}>
                                        <div className="exp-logo">🎖️</div>
                                        <div className="exp-meta">
                                            <div className="exp-company">Dev's Day '25 Certification</div>
                                            <div className="exp-role">FAST University · 2025</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                                        <div className="tag tag-purple">Recognized</div>
                                    </div>
                                </div>
                                <p className="exp-desc">
                                    Recognized for active participation and technical engagement at Dev's Day '25, where my design was ranked <strong style={{ color: '#c084fc' }}>6th among 15+ teams</strong>, showcasing strong skills in modern development and UI/UX practices.
                                </p>
                                {/* Certificate Image Card */}
                                <div
                                    onClick={() => setDevsDayCertOpen(true)}
                                    style={{
                                        marginTop: 16,
                                        borderRadius: 12,
                                        overflow: 'hidden',
                                        border: '1px solid rgba(168,85,247,0.25)',
                                        cursor: 'pointer',
                                        maxWidth: 420,
                                        boxShadow: '0 4px 20px rgba(168,85,247,0.1)',
                                        transition: 'box-shadow 0.3s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 28px rgba(168,85,247,0.3)'}
                                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(168,85,247,0.1)'}
                                    title="Click to enlarge certificate"
                                >
                                    <img
                                        src="/devsday-cert.png"
                                        alt="Dev's Day '25 Certificate"
                                        style={{ width: '100%', display: 'block', borderRadius: 12 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Internship Certificate Lightbox */}
            {certOpen && (
                <div
                    onClick={() => setCertOpen(false)}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 9999,
                        background: 'rgba(0,0,0,0.85)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'zoom-out',
                        backdropFilter: 'blur(6px)',
                    }}
                >
                    <img
                        src="/internship-cert.png"
                        alt="Internship Certificate"
                        style={{
                            maxWidth: '90vw', maxHeight: '90vh',
                            borderRadius: 16,
                            boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
                        }}
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            )}

            {/* Dev's Day Certificate Lightbox */}
            {devsDayCertOpen && (
                <div
                    onClick={() => setDevsDayCertOpen(false)}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 9999,
                        background: 'rgba(0,0,0,0.85)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'zoom-out',
                        backdropFilter: 'blur(6px)',
                    }}
                >
                    <img
                        src="/devsday-cert.png"
                        alt="Dev's Day '25 Certificate"
                        style={{
                            maxWidth: '90vw', maxHeight: '90vh',
                            borderRadius: 16,
                            boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
                        }}
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    )
}
