import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/yourusername' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:your.email@example.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gradient">
          Kontakt
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Zainteresowany współpracą? Skontaktuj się ze mną!
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-dark-200 border border-secondary/10 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/30 font-semibold"
              >
                <Icon className="text-2xl" />
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
