export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient animate-float">
          DevOps Engineer
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Automatyzacja • CI/CD • Cloud Infrastructure • Kubernetes
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary hover:bg-secondary text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/50"
          >
            Zobacz Projekty
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg font-semibold transition-all duration-300"
          >
            Kontakt
          </a>
        </div>
        
        {/* Tech stack badges */}
        <div className="mt-12 flex gap-4 justify-center flex-wrap">
          {['Docker', 'Kubernetes', 'GitOps', 'Azure', 'Python'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-dark-100/50 border border-secondary/30 rounded-full text-sm font-medium text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
