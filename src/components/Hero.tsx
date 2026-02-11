import TextType from './TextType';
import DarkVeil from './DarkVeil';
import SplitText from './SplitText';
import LogoLoop from './LogoLoop';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-darker via-dark to-darker">
      {/* Animated dark background */}
      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.5}
        scanlineFrequency={0}
        warpAmount={0}
        resolutionScale={1}
      />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s', animationDuration: '7s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-7xl md:text-8xl font-bold mb-4">
          <TextType 
            text="Jakub Zasadni"
            typingSpeed={100}
            pauseDuration={3000}
            showCursor={false}
            cursorCharacter="_"
            deletingSpeed={50}
            loop={false}
            startOnVisible={true}
            className="text-white"
          />
        </h1>
        <SplitText
          text="DevOps Engineer"
          className="text-3xl md:text-4xl font-semibold text-white mb-8"
          delay={50}
          duration={1}
          ease="power3.out"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
        />
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Automatyzacja • CI/CD • Infrastructure • Kubernetes
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#6d28d9] hover:bg-[#7c3aed] text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group"
          >
            <span className="relative z-10">Zobacz Projekty</span>
            <span className="absolute inset-0 -left-full top-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:left-full transition-all duration-1000 ease-out"></span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all duration-300"
          >
            Kontakt
          </a>
        </div>
        
        {/* Tech stack badges */}
        <div className="mt-12 flex gap-4 justify-center flex-wrap">
          {['Docker', 'Kubernetes', 'CI/CD', 'Networking', 'Monitoring'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-dark/50 border-2 border-primary/30 rounded-full text-sm font-medium text-white shadow-sm hover:shadow-md hover:border-primary transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Company logos loop */}
        <div className="mt-16 flex justify-center" style={{ height: '70px', position: 'relative', overflow: 'hidden', width: '100%' }}>
          <div style={{ width: '100%', maxWidth: '1200px' }}>
            <LogoLoop
              logos={[
                { src: `${import.meta.env.BASE_URL}Traficar.png`, alt: 'Traficar' },
                { src: `${import.meta.env.BASE_URL}Vehis.jpg`, alt: 'Vehis' },
                { src: `${import.meta.env.BASE_URL}KNF.jpg`, alt: 'KNF' },
                { src: `${import.meta.env.BASE_URL}SaS.png`, alt: 'SaS' },
                { src: `${import.meta.env.BASE_URL}fleetonair_logo.jpg`, alt: 'FleetOnAir' },
                { src: `${import.meta.env.BASE_URL}Anycar.png`, alt: 'Anycar' },
              ]}
              speed={80}
              direction="left"
              logoHeight={65}
              gap={40}
              hoverSpeed={20}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#020617"
              ariaLabel="Project partners"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
