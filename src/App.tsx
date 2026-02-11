import PillNav from './components/PillNav'
import Hero from './components/Hero'
import Company from './components/Company'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <PillNav 
        logo={`${import.meta.env.BASE_URL}logo-corelogic.png`}
        logoAlt="JZ"
        items={[
          { label: 'Strona Główna', href: '#home' },
          { label: 'Umiejętności', href: '#skills' },
          { label: 'Projekty', href: '#projects' },
          { label: 'Kontakt', href: '#contact' }
        ]}
        activeHref="#home"
        baseColor="#a855f7"
        pillColor="#000000"
        hoveredPillTextColor="#000000"
        pillTextColor="#ffffff"
        initialLoadAnimation={true}
      />
      <Hero />
      <Company />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
