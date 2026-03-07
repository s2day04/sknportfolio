import { useState } from 'react'
import '../styles/Sections.css'

const contactLinks = [
    {
        icon: '📧',
        label: 'Email',
        value: 'sakeenayamin04@gmail.com',
        href: 'mailto:sakeenayamin04@gmail.com',
        bg: 'rgba(236,72,153,0.1)',
        border: 'rgba(236,72,153,0.25)',
    },
    {
        icon: 'in',
        label: 'LinkedIn',
        value: 'linkedin.com/in/sakeena-yamin',
        href: 'https://www.linkedin.com/in/sakeena-yamin',
        bg: 'rgba(59,130,246,0.1)',
        border: 'rgba(59,130,246,0.25)',
    },
    {
        icon: 'Be',
        label: 'Behance',
        value: 'View My Design Portfolio',
        href: 'https://www.behance.net',
        bg: 'rgba(168,85,247,0.1)',
        border: 'rgba(168,85,247,0.25)',
    },
    {
        icon: '📍',
        label: 'Location',
        value: 'Karachi, Pakistan · Open to Remote',
        href: null,
        bg: 'rgba(6,182,212,0.08)',
        border: 'rgba(6,182,212,0.2)',
    },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
    const handleSubmit = e => {
        e.preventDefault()
        setSent(true)
        setTimeout(() => setSent(false), 4000)
        setForm({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <section className="section contact-section" id="contact">
            <div className="orb orb-purple" style={{ width: 600, height: 600, top: -100, left: '30%', opacity: 0.5 }} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-label">Let's Talk</div>
                <h2 className="section-title">
                    Get In <span className="gradient-text">Touch</span>
                </h2>
                <p className="section-subtitle">
                    Ready to collaborate? I'm currently open to freelance, part-time, and remote projects globally. Let's create something amazing.
                </p>

                <div className="contact-wrap" style={{ marginTop: 60 }}>
                    {/* Contact Info */}
                    <div className="contact-info">
                        <p className="contact-desc">
                            Whether you have a project in mind, want to discuss a design challenge, or just want to say hello —
                            my inbox is always open. I'll respond within 24 hours.
                        </p>
                        <div className="contact-links">
                            {contactLinks.map(c => (
                                c.href ? (
                                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-link glass">
                                        <div className="contact-link-icon" style={{ background: c.bg, border: `1px solid ${c.border}`, color: '#e2e8f0' }}>
                                            {c.icon}
                                        </div>
                                        <div>
                                            <span className="contact-link-label">{c.label}</span>
                                            <span className="contact-link-val">{c.value}</span>
                                        </div>
                                    </a>
                                ) : (
                                    <div key={c.label} className="contact-link glass">
                                        <div className="contact-link-icon" style={{ background: c.bg, border: `1px solid ${c.border}`, color: '#e2e8f0' }}>
                                            {c.icon}
                                        </div>
                                        <div>
                                            <span className="contact-link-label">{c.label}</span>
                                            <span className="contact-link-val">{c.value}</span>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>

                        {/* Resume Download */}
                        <a
                            href="/resume.pdf"
                            download
                            className="btn-neon btn-primary"
                            style={{ display: 'inline-flex', marginTop: 30 }}
                        >
                            <span>⬇</span> Download Resume (PDF)
                        </a>
                    </div>

                    {/* Contact Form */}
                    <div className="glass contact-form">
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#fff', marginBottom: 24 }}>
                            Send a Message
                        </h3>
                        {sent && (
                            <div style={{
                                padding: '14px 18px',
                                background: 'rgba(74,222,128,0.1)',
                                border: '1px solid rgba(74,222,128,0.3)',
                                borderRadius: 12,
                                color: '#4ade80',
                                marginBottom: 20,
                                fontSize: '0.9rem',
                            }}>
                                ✅ Message sent! I'll get back to you soon.
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input className="form-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <input className="form-input" type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project Inquiry / Freelance / Collab" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required />
                            </div>
                            <button type="submit" className="btn-neon btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Send Message ✨
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
