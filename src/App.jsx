import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <>
            {/* Noise texture overlay for premium feel */}
            <div className="noise-overlay" />

            <Navbar />

            <main>
                <Hero />

                <div className="divider" />
                <About />

                <div className="divider" />
                <Skills />

                <div className="divider" />
                <Experience />

                <div className="divider" />
                <Projects />

                <div className="divider" />
                <Contact />
            </main>

            <Footer />
        </>
    )
}

export default App
