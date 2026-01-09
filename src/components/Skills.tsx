import { FaDocker, FaGitAlt, FaPython, FaAws, FaJenkins } from 'react-icons/fa'
import { SiKubernetes, SiTerraform, SiPrometheus } from 'react-icons/si'

const skills = [
  { icon: FaDocker, name: 'Docker', description: 'Konteneryzacja aplikacji i zarządzanie obrazami' },
  { icon: SiKubernetes, name: 'Kubernetes', description: 'Orkiestracja kontenerów i zarządzanie klastrami' },
  { icon: FaGitAlt, name: 'Git & GitOps', description: 'Kontrola wersji i deklaratywne wdrożenia' },
  { icon: FaJenkins, name: 'CI/CD', description: 'Jenkins, GitHub Actions, ArgoCD' },
  { icon: FaAws, name: 'Cloud', description: 'AWS, Azure, Google Cloud Platform' },
  { icon: SiTerraform, name: 'IaC', description: 'Terraform, Ansible, ARM Templates' },
  { icon: FaPython, name: 'Python', description: 'Skrypty automatyzacji i narzędzia' },
  { icon: SiPrometheus, name: 'Monitoring', description: 'Prometheus, Grafana, ELK Stack' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-dark-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
          Technologie & Narzędzia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="bg-dark-200 p-6 rounded-xl border border-secondary/10 card-hover text-center"
              >
                <Icon className="text-5xl text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
