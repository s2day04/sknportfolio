import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function ProjectShowcase({ project, onClose }) {
    const isMobile = project.category === 'Mobile'
    const screens = project.screens || []
    const totalSlides = screens.length

    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState(1) // 1 = forward, -1 = backward
    const autoTimer = useRef(null)

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
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [project.id])

    if (!project) return null

    // Touch/swipe handling
    const touchStartX = useRef(null)
    const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (diff > 40) nextSlide()
        else if (diff < -40) prevSlide()
        touchStartX.current = null
    }

    const variants = {
        enter: (d) => ({ opacity: 0, x: d * 60 }),
        center: { opacity: 1, x: 0 },
        exit: (d) => ({ opacity: 0, x: d * -60 }),
    }

    // ---- DESKTOP (Web project) — keep original multi-screen layout ----
    if (!isMobile) {
        const itemsPerSlide = 1
        const webTotalSlides = Math.ceil(screens.length / itemsPerSlide)
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
                    <ShowcaseHeader project={project} onClose={onClose} />
                    {screens.length === 0 ? (
                        <EmptyScreens project={project} />
                    ) : (
                        <WebSlider
                            screens={screens}
                            currentSlide={currentSlide}
                            totalSlides={webTotalSlides}
                            setCurrentSlide={setCurrentSlide}
                            nextSlide={nextSlide}
                            prevSlide={prevSlide}
                        />
                    )}
                </div>
            </motion.div>
        )
    }

    // ---- MOBILE — one screen per phone mockup ----
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
                padding: '40px 16px 48px',
                borderRadius: '24px',
                marginTop: '40px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid rgba(255,255,255,0.05)'
            }}>
                <ShowcaseHeader project={project} onClose={onClose} />

                {screens.length === 0 ? (
                    <EmptyScreens project={project} />
                ) : (
                    <>
                        {/* Phone mockup single-screen carousel */}
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
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
                                    width: '36px',
                                    height: '36px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(10px)',
                                    fontSize: '18px',
                                    lineHeight: 1,
                                }}
                            >‹</button>

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
                                    width: '36px',
                                    height: '36px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(10px)',
                                    fontSize: '18px',
                                    lineHeight: 1,
                                }}
                            >›</button>

                            {/* Phone mockup */}
                            <div style={{
                                width: '200px',
                                height: '420px',
                                borderRadius: '36px',
                                border: '8px solid #333',
                                boxShadow: '0 0 0 2px #111, 0 24px 60px rgba(168,85,247,0.25), 0 8px 24px rgba(0,0,0,0.6)',
                                overflow: 'hidden',
                                position: 'relative',
                                background: '#111',
                                flexShrink: 0,
                            }}>
                                {/* Notch */}
                                <div style={{
                                    position: 'absolute',
                                    top: '8px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '60px',
                                    height: '12px',
                                    background: '#222',
                                    borderRadius: '8px',
                                    zIndex: 5,
                                }} />

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
                        </div>

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
                                        transform: currentSlide === i ? 'scale(1.3)' : 'scale(1)',
                                    }}
                                />
                            ))}
                        </div>

                        {/* Swipe hint */}
                        <p style={{ color: '#475569', fontSize: '0.72rem', marginTop: '10px' }}>
                            Swipe or tap arrows · Auto-advances every 3s
                        </p>
                    </>
                )}
            </div>
        </motion.div>
    )
}

/* ---- Shared sub-components ---- */

function ShowcaseHeader({ project, onClose }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '32px' }}>
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
    )
}

function EmptyScreens({ project }) {
    return (
        <div style={{ color: '#475569', fontSize: '1rem', padding: '60px 0', textAlign: 'center' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>{project.icon}</span>
            No screens available yet.
        </div>
    )
}

function WebSlider({ screens, currentSlide, totalSlides, setCurrentSlide, nextSlide, prevSlide }) {
    const dragEndHandler = (e, { offset }) => {
        if (offset.x < -50) nextSlide()
        if (offset.x > 50) prevSlide()
    }

    return (
        <>
            <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button
                    onClick={prevSlide}
                    style={{
                        position: 'absolute', left: 0, zIndex: 10,
                        background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
                        width: '48px', height: '48px', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', color: '#fff', cursor: 'pointer', backdropFilter: 'blur(10px)',
                        fontSize: '22px',
                    }}
                >‹</button>
                <button
                    onClick={nextSlide}
                    style={{
                        position: 'absolute', right: 0, zIndex: 10,
                        background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
                        width: '48px', height: '48px', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', color: '#fff', cursor: 'pointer', backdropFilter: 'blur(10px)',
                        fontSize: '22px',
                    }}
                >›</button>

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
                            style={{ display: 'flex', justifyContent: 'center', width: '100%', cursor: 'grab' }}
                        >
                            <div style={{
                                width: '100%', maxWidth: '800px',
                                aspectRatio: '16/10',
                                background: '#111', borderRadius: '16px',
                                border: '8px solid #222',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                                overflow: 'hidden',
                            }}>
                                <img
                                    src={screens[currentSlide]}
                                    alt={`Screen ${currentSlide + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '40px' }}>
                {Array.from({ length: totalSlides }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        style={{
                            width: '8px', height: '8px', borderRadius: '50%',
                            background: currentSlide === i ? '#a855f7' : 'rgba(255,255,255,0.2)',
                            border: 'none', padding: 0, cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            transform: currentSlide === i ? 'scale(1.2)' : 'scale(1)',
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </>
    )
}
