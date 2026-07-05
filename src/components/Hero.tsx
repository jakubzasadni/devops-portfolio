import { useState } from 'react';
import LogoLoop from './LogoLoop';
import ProfileCard from './ProfileCard';
import DarkVeil from './DarkVeil';
import CVModal from './CVModal';

export default function Hero() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-darker via-dark to-darker py-20">
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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* ProfileCard */}
          <div className="flex-shrink-0">
            <ProfileCard
              name="Jakub Zasadni"
              title="DevOps Engineer"
              handle="jakubzasadni"
              status="Dostępny"
              contactText="Kontakt"
              avatarUrl={`${import.meta.env.BASE_URL}Zasadni.png`}
              miniAvatarUrl={`${import.meta.env.BASE_URL}Zasadni.png`}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={handleContactClick}
              behindGlowEnabled={true}
              behindGlowColor="rgba(147, 51, 234, 0.67)"
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#a855f744 100%)"
            />
          </div>

          {/* Description */}
          <div className="flex-1 max-w-2xl">
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed text-left">
              Specjalizuję się we wdrażaniu i utrzymywaniu infrastruktury skonteneryzowanej od warstwy sprzętowej po pełne wdrożenie, oraz zajmuję się ich automatyzacją z wykorzystaniem
              <span className="text-primary font-semibold"> CI/CD</span>, <span className="text-primary font-semibold">monitoringu</span> i najlepszych praktyk DevOps.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed text-left">
              Pracuję z technologiami takimi jak <span className="text-secondary font-semibold">Kubernetes</span>, <span className="text-secondary font-semibold">Docker</span>, <span className="text-secondary font-semibold">Ansible</span>, oraz całym ekosystemem narzędzi do zarządzania infrastrukturą i automatyzacji procesów wdrożeniowych.
            </p>

            {/* Tech stack badges */}
            <div className="flex gap-3 flex-wrap mb-8">
              {['Kubernetes', 'Docker', 'CI/CD', 'Terraform', 'Networking', 'Monitoring'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-dark/50 border-2 border-primary/30 rounded-full text-sm font-medium text-white shadow-sm hover:shadow-md hover:border-primary transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">Zobacz Projekty</span>
                <span className="absolute inset-0 -left-full top-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:left-full transition-all duration-1000 ease-out"></span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all duration-300"
              >
                Skontaktuj się
              </a>
              <button
                onClick={() => setCvModalOpen(true)}
                className="px-8 py-3 border-2 border-white/20 text-white/80 hover:border-white/50 hover:text-white rounded-lg font-semibold transition-all duration-300"
              >
                Pobierz CV
              </button>
            </div>
            <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
          </div>
        </div>

        {/* Company logos loop */}
        <div className="mt-20 flex justify-center" style={{ height: '70px', position: 'relative', overflow: 'hidden', width: '100%' }}>
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
              scaleOnHover={false}
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
