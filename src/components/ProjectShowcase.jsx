import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ProjectShowcase({ project, onClose }) {
    const isMobile = project.category === 'Mobile'
    const screens = project.screens || []

    // Mobile shows 3 per slide, Web shows 1 per slide
    const itemsPerSlide = isMobile ? 3 : 1
    const totalSlides = Math.ceil(screens.length / itemsPerSlide)

    const [currentSlide, setCurrentSlide] = useState(0)

    // Auto slide
    useEffect(() => {
        if (totalSlides <= 1) return
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides)
        }, 4000)
        return () => clearInterval(timer)
    }, [totalSlides])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))

    // Scroll into view on mount
    useEffect(() => {
        const el = document.getElementById('project-showcase-view')
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [project.id])

    if (!project) return null

    // Get current chunk of screens
    const currentScreens = screens.slice(
        currentSlide * itemsPerSlide,
        (currentSlide + 1) * itemsPerSlide
    )

    const dragEndHandler = (e, { offset }) => {
        if (offset.x < -50) nextSlide()
        if (offset.x > 50) prevSlide()
    }

    return (
        <motion.div
            id="project-showcase-view"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', width: '100%' }}
        >
            <div style={{
                background: '#000000',
                padding: '60px 24px',
                borderRadius: '24px',
                marginTop: '40px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid rgba(255,255,255,0.05)'
            }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '40px' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '8px' }}>
                            {project.title}
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Project Showcase</p>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'rgba(255,255,255,0.1)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                    >
                        <X size={20} />
                    </button>
                </div>

                {screens.length === 0 ? (
                    <div style={{ color: '#475569', fontSize: '1rem', padding: '60px 0', textAlign: 'center' }}>
                        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>{project.icon}</span>
                        No screens available yet.
                    </div>
                ) : (
                    <>
                        {/* Slider Area */}
                        <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                            {/* Nav Arrows */}
                            <button
                                onClick={prevSlide}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    zIndex: 10,
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '48px',
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <button
                                onClick={nextSlide}
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    zIndex: 10,
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '48px',
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Carousel */}
                            <div style={{ width: '80%', overflow: 'hidden' }}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={0.2}
                                        onDragEnd={dragEndHandler}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.4 }}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: isMobile ? '20px' : '0',
                                            width: '100%',
                                            cursor: 'grab'
                                        }}
                                    >
                                        {currentScreens.map((imgSrc, idx) => (
                                            <div key={`${currentSlide}-${idx}`} style={{
                                                flexShrink: 0,
                                                width: isMobile ? '240px' : '100%',
                                                maxWidth: isMobile ? 'none' : '800px',
                                                aspectRatio: isMobile ? '9/19.5' : '16/10',
                                                background: '#111',
                                                borderRadius: isMobile ? '36px' : '16px',
                                                border: '8px solid #222',
                                                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}>
                                                <img
                                                    src={imgSrc}
                                                    alt={`Screen ${currentSlide * itemsPerSlide + idx + 1}`}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        display: 'block'
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Indicators */}
                        <div style={{ display: 'flex', gap: '8px', marginTop: '40px' }}>
                            {Array.from({ length: totalSlides }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: currentSlide === i ? '#a855f7' : 'rgba(255,255,255,0.2)',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        transform: currentSlide === i ? 'scale(1.2)' : 'scale(1)'
                                    }}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}

            </div>
        </motion.div>
    )
}
