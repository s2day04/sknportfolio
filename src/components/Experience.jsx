import '../styles/Sections.css'

export default function Experience() {
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
                                    <div className="exp-date">Mar 2025 – Jun 2025</div>
                                    <div className="tag tag-purple">Internship · 4 mos</div>
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
                        <div className="exp-item">
                            <div className="glass exp-card">
                                <div className="exp-header">
                                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', flex: 1 }}>
                                        <div className="exp-logo">🎓</div>
                                        <div className="exp-meta">
                                            <div className="exp-company">Bahria University</div>
                                            <div className="exp-role">Bachelor's in Computer Science</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                                        <div className="exp-date">Sep 2022 – Jun 2026</div>
                                        <div className="tag tag-blue">In Progress</div>
                                    </div>
                                </div>
                                <div className="exp-location">📍 Bahria University</div>
                                <p className="exp-desc">
                                    Studying Computer Science with a focus on UI/UX design, mobile application design,
                                    and web design. Actively building skills at the intersection of technology and design.
                                </p>
                                <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
                                    <span className="tag tag-purple">UI Design</span>
                                    <span className="tag tag-blue">Mobile App Design</span>
                                    <span className="tag tag-pink">Web Design</span>
                                    <span className="tag tag-purple">Computer Science</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Certificates */}
                <div className="edu-section">
                    <div className="section-label" style={{ marginTop: 20 }}>Certificates</div>
                    <div className="exp-timeline">
                        <div className="exp-item">
                            <div className="glass exp-card">
                                <div className="exp-header">
                                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', flex: 1 }}>
                                        <div className="exp-logo">🏆</div>
                                        <div className="exp-meta">
                                            <div className="exp-company">UI/UX Design Certification</div>
                                            <div className="exp-role">Professional Certificate</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                                        <div className="tag tag-pink">Completed</div>
                                    </div>
                                </div>
                                <p className="exp-desc">
                                    Earned certification highlighting expertise in UI/UX principles, wireframing, and interactive prototyping.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
