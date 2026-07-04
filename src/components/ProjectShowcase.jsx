import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

/* ─── Clean Phone Frame (NO notch / status bar / overlay) ─────────────── */
function PhoneFrame({ src, alt, width = 200, height = 420 }) {
    return (
        <div style={{
            width,
            height,
            borderRadius: Math.round(width * 0.18) + 'px',
            border: `${Math.round(width * 0.04)}px solid #2a2a2a`,
            boxShadow: `0 0 0 1px #111,
                        0 ${Math.round(width * 0.12)}px ${Math.round(width * 0.3)}px rgba(168,85,247,0.22),
                        0 ${Math.round(width * 0.04)}px ${Math.round(width * 0.12)}px rgba(0,0,0,0.6)`,
            overflow: 'hidden',
            background: '#0a0a0a',
            flexShrink: 0,
            position: 'relative',
        }}>
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                    draggable={false}
                />
            ) : (
                <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#333',
                    fontSize: '2rem',
                }}>📱</div>
            )}
        </div>
    )
}

/* ─── Desktop: 3 mockups side-by-side with sliding window ─────────────── */
function DesktopMockups({ screens, currentSlide, nextSlide, prevSlide }) {
    const total = screens.length
    if (total === 0) return null

    // Show 3 consecutive screens at a time
    const indices = [0, 1, 2].map(offset => (currentSlide + offset) % total)

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Arrow row */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
                {/* Left arrow */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous"
                    style={{
                        background: 'rgba(168,85,247,0.15)',
                        border: '1px solid rgba(168,85,247,0.35)',
                        borderRadius: '50%',
                        width: '44px',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        cursor: 'pointer',
                        backdropFilter: 'blur(10px)',
                        flexShrink: 0,
                        transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,85,247,0.3)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(168,85,247,0.15)'}
                >
                    <ChevronLeft size={20} />
                </button>

                {/* 3 mockups */}
                <div style={{
                    display: 'flex',
                    gap: '28px',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                }}>
                    {indices.map((screenIdx, pos) => {
                        const isCenter = pos === 1
                        return (
                            <motion.div
                                key={`${currentSlide}-${pos}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: pos * 0.06 }}
                                style={{
                                    transform: isCenter ? 'scale(1.06)' : 'scale(0.92)',
                                    transformOrigin: 'bottom center',
                                    transition: 'transform 0.3s ease',
                                    opacity: isCenter ? 1 : 0.7,
                                }}
                            >
                                <PhoneFrame
                                    src={screens[screenIdx]}
                                    alt={`Screen ${screenIdx + 1}`}
                                    width={190}
                                    height={400}
                                />
                            </motion.div>
                        )
                    })}
                </div>

                {/* Right arrow */}
                <button
                    onClick={nextSlide}
                    aria-label="Next"
                    style={{
                        background: 'rgba(168,85,247,0.15)',
                        border: '1px solid rgba(168,85,247,0.35)',
                        borderRadius: '50%',
                        width: '44px',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        cursor: 'pointer',
                        backdropFilter: 'blur(10px)',
                        flexShrink: 0,
                        transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,85,247,0.3)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(168,85,247,0.15)'}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    )
}

/* ─── Mobile: 1 mockup at a time with arrows + auto-slide ─────────────── */
function MobileMockup({ screens, currentSlide, nextSlide, prevSlide, direction }) {
    const total = screens.length
    if (total === 0) return null

    const variants = {
        enter: (d) => ({ opacity: 0, x: d * 50 }),
        center: { opacity: 1, x: 0 },
        exit: (d) => ({ opacity: 0, x: d * -50 }),
    }

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Left arrow */}
            <button
                onClick={prevSlide}
                aria-label="Previous"
                style={{
                    position: 'absolute',
                    left: 0,
                    zIndex: 10,
                    background: 'rgba(168,85,247,0.18)',
                    border: '1px solid rgba(168,85,247,0.35)',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <ChevronLeft size={18} />
            </button>

            {/* Phone mockup with animated image */}
            <div style={{
                width: '210px',
                height: '440px',
                borderRadius: '38px',
                border: '8px solid #2a2a2a',
                boxShadow: '0 0 0 1px #111, 0 24px 60px rgba(168,85,247,0.25), 0 8px 24px rgba(0,0,0,0.6)',
                overflow: 'hidden',
                background: '#0a0a0a',
                flexShrink: 0,
                position: 'relative',
            }}>
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.img
                        key={currentSlide}
                        src={screens[currentSlide]}
                        alt={`Screen ${currentSlide + 1}`}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                        draggable={false}
                    />
                </AnimatePresence>
            </div>

            {/* Right arrow */}
            <button
                onClick={nextSlide}
                aria-label="Next"
                style={{
                    position: 'absolute',
                    right: 0,
                    zIndex: 10,
                    background: 'rgba(168,85,247,0.18)',
                    border: '1px solid rgba(168,85,247,0.35)',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <ChevronRight size={18} />
            </button>
        </div>
    )
}

/* ─── Main Showcase Component ──────────────────────────────────────────── */
export default function ProjectShowcase({ project, onClose }) {
    const screens = project.screens || []
    const totalSlides = screens.length

    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState(1)
    const autoTimer = useRef(null)

    // Detect if we're on mobile viewport (≤ 768px)
    const [isMobileView, setIsMobileView] = useState(() => window.innerWidth <= 768)

    useEffect(() => {
        const handler = () => setIsMobileView(window.innerWidth <= 768)
        window.addEventListener('resize', handler)
        return () => window.removeEventListener('resize', handler)
    }, [])

    const resetTimer = () => {
        if (autoTimer.current) clearInterval(autoTimer.current)
        if (totalSlides > 1) {
            autoTimer.current = setInterval(() => {
                setDirection(1)
                setCurrentSlide(prev => (prev + 1) % totalSlides)
            }, 3000)
        }
    }

    useEffect(() => {
        resetTimer()
        return () => clearInterval(autoTimer.current)
    }, [totalSlides])

    const nextSlide = () => {
        setDirection(1)
        setCurrentSlide(prev => (prev + 1) % totalSlides)
        resetTimer()
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1))
        resetTimer()
    }

    const goTo = (i) => {
        setDirection(i > currentSlide ? 1 : -1)
        setCurrentSlide(i)
        resetTimer()
    }

    // Scroll into view on mount
    useEffect(() => {
        const el = document.getElementById('project-showcase-view')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [project.id])

    // Touch / swipe support
    const touchStartX = useRef(null)
    const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (diff > 40) nextSlide()
        else if (diff < -40) prevSlide()
        touchStartX.current = null
    }

    if (!project) return null

    // ── Is this a web project with no screens? ──────────────────────────
    const isWebNoScreens = project.category === 'Web' && screens.length === 0

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
                padding: isMobileView ? '36px 16px 48px' : '56px 40px',
                borderRadius: '24px',
                marginTop: '40px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid rgba(255,255,255,0.05)',
            }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '36px' }}>
                    <div>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#fff', marginBottom: '6px' }}>
                            {project.title}
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Project Showcase</p>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close"
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
                            cursor: 'pointer',
                            flexShrink: 0,
                        }}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                {isWebNoScreens ? (
                    <div style={{ color: '#475569', fontSize: '1rem', padding: '60px 0', textAlign: 'center' }}>
                        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>{project.icon}</span>
                        No screens available yet.
                    </div>
                ) : screens.length === 0 ? (
                    <div style={{ color: '#475569', fontSize: '1rem', padding: '60px 0', textAlign: 'center' }}>
                        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>{project.icon}</span>
                        No screens available yet.
                    </div>
                ) : isMobileView ? (
                    /* ── MOBILE: 1 mockup + arrows + auto-slide ── */
                    <div
                        style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <MobileMockup
                            screens={screens}
                            currentSlide={currentSlide}
                            nextSlide={nextSlide}
                            prevSlide={prevSlide}
                            direction={direction}
                        />

                        {/* Screen counter */}
                        <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '16px' }}>
                            {currentSlide + 1} / {totalSlides}
                        </div>

                        {/* Dot indicators */}
                        <div style={{ display: 'flex', gap: '6px', marginTop: '12px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '240px' }}>
                            {Array.from({ length: totalSlides }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    aria-label={`Go to screen ${i + 1}`}
                                    style={{
                                        width: '7px',
                                        height: '7px',
                                        borderRadius: '50%',
                                        background: currentSlide === i ? '#a855f7' : 'rgba(255,255,255,0.2)',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        transform: currentSlide === i ? 'scale(1.4)' : 'scale(1)',
                                    }}
                                />
                            ))}
                        </div>

                        <p style={{ color: '#475569', fontSize: '0.72rem', marginTop: '10px' }}>
                            Swipe or tap arrows · Auto-advances every 3s
                        </p>
                    </div>
                ) : (
                    /* ── DESKTOP: 3 mockups side-by-side ── */
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <DesktopMockups
                            screens={screens}
                            currentSlide={currentSlide}
                            nextSlide={nextSlide}
                            prevSlide={prevSlide}
                        />

                        {/* Screen counter */}
                        <div style={{ color: '#94a3b8', fontSize: '0.82rem', marginTop: '28px' }}>
                            Showing screens {((currentSlide) % totalSlides) + 1}–{((currentSlide + 2) % totalSlides) + 1} of {totalSlides}
                        </div>

                        {/* Dot indicators */}
                        <div style={{ display: 'flex', gap: '7px', marginTop: '14px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '320px' }}>
                            {Array.from({ length: totalSlides }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    aria-label={`Go to screen ${i + 1}`}
                                    style={{
                                        width: '7px',
                                        height: '7px',
                                        borderRadius: '50%',
                                        background: currentSlide === i ? '#a855f7' : 'rgba(255,255,255,0.2)',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        transform: currentSlide === i ? 'scale(1.4)' : 'scale(1)',
                                    }}
                                />
                            ))}
                        </div>

                        <p style={{ color: '#475569', fontSize: '0.72rem', marginTop: '8px' }}>
                            Use arrows or dots to navigate · Auto-advances every 3s
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    )
}
