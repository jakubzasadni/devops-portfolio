import { FaCar, FaServer, FaMoneyCheckAlt, FaPlane } from 'react-icons/fa'
import ClickSpark from './ClickSpark'
import PixelCard from './PixelCard'
import SplitText from './SplitText'

const projects = [
  {
    icon: FaCar,
    title: 'Traficar',
    company: 'Core Logic',
    description: 'Rozwój i utrzymanie infrastruktury, CI/CD pipelines, zarządzanie mikrousługami dla platformy car-sharing',
    tags: ['Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Gitea Actions', 'Networking'],
    link: 'https://traficar.pl',
    logo: `${import.meta.env.BASE_URL}Traficar.png`
  },
  {
    icon: FaCar,
    title: 'Vehis',
    company: 'Core Logic',
    description: 'Infrastruktura HA, automatyzacja wdrożeń, monitoring, zarządzanie bazami danych oraz utrzymanie infrastruktury wysokiej dostępności',
    tags: ['Docker', 'Jenkins', 'Ansible', 'Monitoring'],
    link: 'https://vehis.pl',
    logo: `${import.meta.env.BASE_URL}Vehis.jpg`
  },
  {
    icon: FaMoneyCheckAlt,
    title: 'KNF - Komisja Nadzoru Finansowego',
    company: 'Core Logic & SaS',
    description: 'Wdrożenie, infrastruktura i utrzymanie systemów SAS dla sektora finansowego (współpraca partnerska z SaS)',
    tags: ['VMware', 'GitLab', 'Security', 'Networking', 'SAS'],
    link: 'https://www.knf.gov.pl',
    logo: `${import.meta.env.BASE_URL}KNF.jpg`
  },
  {
    icon: FaServer,
    title: 'SaS',
    company: 'Core Logic',
    description: 'Współpraca z firmą SaS - dostawca systemów SAS dla KNF. Infrastruktura i wdrożenia',
    tags: ['Infrastructure', 'Security', 'SAS', 'Networking'],
    link: 'https://sasgrupa.pl',
    logo: `${import.meta.env.BASE_URL}SaS.png`
  },
  {
    icon: FaPlane,
    title: 'FleetOnAir',
    company: 'Core Logic',
    description: 'Infrastruktura dla systemu zarządzania flotą pojazdów, IoT, monitoring, automatyzacja wdrożeń, utrzymanie systemu oraz aplikacja symulatora jazdy z telemetryką pojazdu',
    tags: ['Docker', 'CI/CD', 'Monitoring', 'Infrastructure'],
    link: 'https://fleetonair.com',
    logo: `${import.meta.env.BASE_URL}fleetonair_logo.jpg`
  },
  {
    icon: FaCar,
    title: 'Anycar',
    company: 'Core Logic',
    description: 'Projekt i wdrożenie infrastrukruty produkcyjnej dla platformy mobility',
    tags: ['Kubernetes', 'GitOps', 'Networking', 'CI/CD'],
    link: 'https://anycar.com.pl',
    logo: `${import.meta.env.BASE_URL}Anycar.png`
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark to-darker relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-40 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-4">
          <SplitText
            text="Projekty Komercyjne"
            className="text-4xl font-bold text-white text-center"
            delay={30}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>
        <p className="text-center text-gray-300 mb-16 text-lg">
          Core Logic - Infrastruktura, CI/CD, Cloud Architecture
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            return (
              <PixelCard key={project.title} variant="pink" className="h-full">
                <div className="relative bg-dark/80 backdrop-blur-sm p-6 rounded-xl flex flex-col h-full">
                  <ClickSpark
                    sparkColor="#8b5cf6"
                    sparkSize={8}
                    sparkRadius={20}
                    sparkCount={6}
                    duration={500}
                    easing="ease-out"
                  />
                  {/* Logo at top center */}
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-white/5 p-3 border border-primary/20">
                      <img 
                        src={project.logo} 
                        alt={project.title} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 text-center">{project.title}</h3>
                    <p className="text-sm text-primary font-semibold mb-4 text-center">{project.company}</p>
                    <p className="text-gray-300 mb-6 flex-1">{project.description}</p>
                  
                  <div className="flex gap-2 flex-wrap mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30 font-medium hover:bg-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary font-semibold inline-flex items-center gap-2 transition-all group"
                    >
                      Zobacz więcej
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </div>
              </PixelCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
