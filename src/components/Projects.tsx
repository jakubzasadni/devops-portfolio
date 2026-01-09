import { FaSlidersH, FaCodeBranch, FaRocket } from 'react-icons/fa'

const projects = [
  {
    icon: FaSlidersH,
    title: 'PID Controller Pipeline',
    description: 'System automatyzacji symulacji regulatorów PID z metrykami wydajności',
    tags: ['Python', 'Docker', 'YAML'],
    link: '#'
  },
  {
    icon: FaCodeBranch,
    title: 'GitOps Regulatory',
    description: 'Wdrożenie aplikacji regulacyjnych z użyciem ArgoCD i Kubernetes',
    tags: ['Kubernetes', 'ArgoCD', 'Kustomize'],
    link: '#'
  },
  {
    icon: FaRocket,
    title: 'CI/CD Pipeline',
    description: 'Automatyczny pipeline budowania, testowania i wdrażania aplikacji',
    tags: ['GitHub Actions', 'Docker', 'Azure'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-dark-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
          Projekty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="bg-dark-100 p-8 rounded-xl border border-secondary/10 card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="text-4xl text-secondary" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex gap-2 flex-wrap mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-secondary hover:text-white font-semibold inline-flex items-center gap-2 transition-all group"
                >
                  Zobacz więcej
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
