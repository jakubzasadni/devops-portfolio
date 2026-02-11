import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/jakubzasadni' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jakub-zasadni/' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:kubazasadni23@gmail.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-darker to-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gradient">
          Kontakt
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
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
                className="flex items-center gap-3 px-8 py-4 bg-dark/50 border-2 border-primary/30 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 font-semibold text-white"
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
