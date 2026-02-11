import { FaDocker, FaGitAlt, FaPython, FaAws, FaJenkins, FaNetworkWired } from 'react-icons/fa'
import { SiKubernetes, SiTerraform, SiPrometheus } from 'react-icons/si'
import GradualBlur from './GradualBlur'

const skills = [
  { icon: FaDocker, name: 'Docker', description: 'Konteneryzacja aplikacji, zarządzanie obrazami oraz rejestrami obrazów', priority: 'high' },
  { icon: SiKubernetes, name: 'Kubernetes', description: 'Tworzenie produkcyjnych klastrów i zarządzanie nimi', priority: 'high' },
  { icon: FaJenkins, name: 'CI/CD', description: 'Jenkins, GitHub/Gitea Actions, ArgoCD', priority: 'high' },
  { icon: FaNetworkWired, name: 'Networking', description: 'Projektowanie i zarządzanie sieciami', priority: 'high' },
  { icon: SiPrometheus, name: 'Monitoring', description: 'Prometheus, Grafana, ELK Stack', priority: 'high' },
  { icon: FaGitAlt, name: 'Git & GitOps', description: 'Kontrola wersji i deklaratywne wdrożenia', priority: 'medium' },
  { icon: SiTerraform, name: 'IaC', description: 'Terraform, Ansible, automatyzacja infrastruktury', priority: 'medium' },
  { icon: FaPython, name: 'Python', description: 'Skrypty automatyzacji i narzędzia', priority: 'medium' },
  { icon: FaAws, name: 'Cloud (AWS/Azure)', description: 'Podstawowa znajomość platform chmurowych', priority: 'low' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-darker to-dark relative overflow-hidden" style={{ minHeight: '600px' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
          Technologie & Narzędzia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            const priorityStyles = skill.priority === 'high' 
              ? 'from-primary/20 to-dark/50 border-primary shadow-lg shadow-primary/20' 
              : skill.priority === 'medium'
              ? 'from-secondary/10 to-dark/50 border-secondary/50 shadow-md'
              : 'from-secondary/10 to-dark/50 border-secondary/50 shadow-md'
            
            return (
              <div
                key={skill.name}
                className={`bg-gradient-to-br ${priorityStyles} p-6 rounded-xl border card-hover text-center`}
              >
                <Icon className="text-5xl text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>
            )
          })}
        </div>
      </div>
      
      <GradualBlur
        target="parent"
        position="bottom"
        height="7rem"
        strength={3}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      />
    </section>
  )
}
