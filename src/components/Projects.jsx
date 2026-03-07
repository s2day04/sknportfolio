import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Sections.css'
import ProjectShowcase from './ProjectShowcase'

const projects = [
    {
        id: 1,
        title: 'Nexovate App UI',
        desc: 'Full UI design for the Nexovate project at Trust Nexus — user-friendly screens with modern design principles and clear user flows.',
        tags: ['UI Design', 'Figma', 'Mobile'],
        tagColors: ['purple', 'pink', 'blue'],
        icon: '📱',
        category: 'Mobile',
        figmaUrl: 'https://www.figma.com/design/OnskibCVPAIjLOgnJYsfVc/Nexovate-UI?node-id=0-1&t=D6KCGkxxFhTmMTXz-1',
        screens: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
    {
        id: 2,
        title: 'Caramel Coffee Shop UI',
        desc: 'End-to-end user experience design for a coffee shop app — from discovery to checkout, optimized for conversion.',
        tags: ['UX Design', 'Wireframing', 'Prototyping'],
        tagColors: ['blue', 'purple', 'pink'],
        icon: '☕',
        category: 'Mobile',
        figmaUrl: 'https://www.figma.com/design/M6NYEplNqYBu4s5ydI4swx/Coffee-Shop-App?node-id=0-1&t=hu4ApyAvgL704AQf-1',
        screens: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 3,
        title: 'Pakistan Railway Redesign',
        desc: 'A modern redesign of Pakistan Railway mobile app UI created during Dev Day 2025 at FAST University.',
        tags: ['Mobile', 'Figma', 'Redesign'],
        tagColors: ['pink', 'purple', 'blue'],
        icon: '🚆',
        category: 'Mobile',
        figmaUrl: 'https://www.figma.com/design/oNSRa7fHNycr930kKzQj1r/DevDay?node-id=0-1&t=BXJN5SicNlBWSNIF-1',
        screens: [1, 2, 3, 4, 5, 6]
    },
    {
        id: 4,
        title: 'Dashboard Design System',
        desc: 'Comprehensive design system and admin dashboard UI with consistent components, dark theme, and data visualization.',
        tags: ['Design System', 'UI', 'Dashboard'],
        tagColors: ['blue', 'pink', 'purple'],
        icon: '📊',
        category: 'Web',
        figmaUrl: null,
        screens: [1, 2, 3, 4]
    }
]

const filters = ['All', 'Mobile', 'Web']
const tagClass = { purple: 'tag-purple', blue: 'tag-blue', pink: 'tag-pink' }

export default function Projects() {
    const [active, setActive] = useState('All')
    const [expandedProject, setExpandedProject] = useState(null)
    const visible = active === 'All' ? projects : projects.filter(p => p.category === active)

    const handleProjectClick = (p) => {
        setExpandedProject(p)
    }

    return (
        <section className="section projects-section" id="projects">
            <div className="orb orb-pink" style={{ width: 500, height: 500, top: '20%', right: -150 }} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-label">My Work</div>
                <h2 className="section-title">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="section-subtitle">
                    A collection of design projects showcasing UI/UX work — click to explore the full interactive project showcase.
                </p>

                {/* Filter Buttons */}
                <div className="projects-filter">
                    {filters.map(f => (
                        <button
                            key={f}
                            className={`filter-btn${active === f ? ' active' : ''}`}
                            onClick={() => {
                                setActive(f)
                                setExpandedProject(null)
                            }}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {visible.map((p) => (
                        <div key={p.id} className="glass project-card" onClick={() => handleProjectClick(p)}>
                            <div className="project-img-wrap">
                                {p.figmaUrl && (
                                    <a
                                        href={p.figmaUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="figma-icon-link"
                                        onClick={(e) => e.stopPropagation()}
                                        title="View in Figma"
                                        style={{
                                            position: 'absolute',
                                            top: '16px',
                                            right: '16px',
                                            zIndex: 2,
                                            background: '#2c2c2c',
                                            borderRadius: '50%',
                                            width: '36px',
                                            height: '36px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                            textDecoration: 'none',
                                            transition: 'transform 0.2s ease',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        <svg width="18" height="26" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19H19V28.5Z" fill="#0ACF83" />
                                            <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E" />
                                            <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262" />
                                            <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38H19V19H28.5C33.7467 19 38 23.2533 38 28.5Z" fill="#1ABCFE" />
                                            <path d="M19 38V57L9.5 47.5L19 38Z" fill="#0ACF83" />
                                        </svg>
                                    </a>
                                )}
                                <div className="project-img-placeholder">
                                    <span>{p.icon}</span>
                                    <span className="project-placeholder-text">Click to view showcase</span>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-overlay-links">
                                        <div className="project-overlay-link" style={{ pointerEvents: 'none' }}>
                                            {p.category === 'Mobile' ? 'Mobile UI' : 'Web UI'} Showcase
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <div className="project-tags">
                                    {p.tags.map((t, i) => (
                                        <span key={t} className={`tag ${tagClass[p.tagColors[i]]}`}>{t}</span>
                                    ))}
                                </div>
                                <div className="project-title">{p.title}</div>
                                <div className="project-desc">{p.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* EXPANDABLE SHOWCASE (BELOW GRID) */}
                <AnimatePresence>
                    {expandedProject && (
                        <ProjectShowcase project={expandedProject} onClose={() => setExpandedProject(null)} />
                    )}
                </AnimatePresence>

                {/* Behance CTA */}
                <div style={{ textAlign: 'center', marginTop: 60 }}>
                    <a
                        href="https://www.behance.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-neon btn-outline"
                        style={{ display: 'inline-flex' }}
                    >
                        <span>Be</span> View Full Portfolio on Behance
                    </a>
                </div>
            </div>
        </section>
    )
}

