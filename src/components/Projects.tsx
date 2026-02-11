import { FaCar, FaServer, FaMoneyCheckAlt, FaPlane } from 'react-icons/fa'
import ClickSpark from './ClickSpark'

const projects = [
  {
    icon: FaCar,
    title: 'Traficar',
    company: 'Core Logic',
    description: 'Projektowanie i utrzymanie infrastruktury, CI/CD pipelines, zarządzanie mikrousługami dla platformy car-sharing',
    tags: ['Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Gitea Actions', 'Networking'],
    link: 'https://traficar.pl',
    logo: `${import.meta.env.BASE_URL}Traficar.png`
  },
  {
    icon: FaCar,
    title: 'Vehis',
    company: 'Core Logic',
    description: 'Infrastruktura, automatyzacja wdrożeń, monitoring i zarządzanie konfiguracją',
    tags: ['Docker', 'Jenkins', 'Ansible', 'Monitoring'],
    link: '#',
    logo: `${import.meta.env.BASE_URL}Vehis.jpg`
  },
  {
    icon: FaMoneyCheckAlt,
    title: 'KNF - Komisja Nadzoru Finansowego',
    company: 'Core Logic & SaS',
    description: 'Infrastruktura, utrzymanie i wdrożenie systemów SAS dla sektora finansowego (współpraca z SaS)',
    tags: ['VMware', 'GitLab', 'Security', 'Networking', 'SAS'],
    link: 'https://www.knf.gov.pl',
    logo: `${import.meta.env.BASE_URL}KNF.jpg`
  },
  {
    icon: FaServer,
    title: 'SaS',
    company: 'Core Logic',
    description: 'Współpraca z firmą SaS - dostawca systemów SAS dla KNF. Infrastruktura, bezpieczeństwo, wdrożenia',
    tags: ['Infrastructure', 'Security', 'SAS', 'Networking'],
    link: '#',
    logo: `${import.meta.env.BASE_URL}SaS.png`
  },
  {
    icon: FaPlane,
    title: 'FleetOnAir',
    company: 'Core Logic',
    description: 'Infrastructure dla systemu zarządzania flotą pojazdów, high-availability setup, monitoring',
    tags: ['Docker', 'CI/CD', 'Monitoring', 'Infrastructure'],
    link: '#',
    logo: `${import.meta.env.BASE_URL}fleetonair_logo.jpg`
  },
  {
    icon: FaCar,
    title: 'Anycar',
    company: 'Core Logic',
    description: 'DevOps infrastructure, networking, continuous delivery dla platformy mobility',
    tags: ['Kubernetes', 'GitOps', 'Networking', 'CI/CD'],
    link: '#',
    logo: `${import.meta.env.BASE_URL}Anycar.png`
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark to-darker">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gradient">
          Projekty Komercyjne
        </h2>
        <p className="text-center text-gray-300 mb-16 text-lg">
          Core Logic - Infrastruktura, CI/CD, Cloud Architecture
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            return (
              <div
                key={project.title}
                className="bg-dark/50 backdrop-blur-sm p-8 rounded-xl border border-primary/20 card-hover shadow-lg shadow-primary/10 relative overflow-hidden"
              >
                <ClickSpark
                  sparkColor="#8b5cf6"
                  sparkSize={8}
                  sparkRadius={20}
                  sparkCount={6}
                  duration={500}
                  easing="ease-out"
                />
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  {/* Logo po lewej */}
                  <div className="flex-shrink-0">
                    <img 
                      src={project.logo} 
                      alt={project.title} 
                      className="w-16 h-16 object-contain rounded-lg"
                    />
                  </div>
                  
                  {/* Tytuł i firma */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">{project.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
