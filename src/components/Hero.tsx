export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-green-300/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s', animationDuration: '7s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-7xl md:text-8xl font-bold mb-4">
          <span className="inline-block bg-gradient-to-r from-primary via-green-400 to-secondary bg-clip-text text-transparent">
            <span className="typewriter">Jakub Zasadni</span>
          </span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-8 animate-fade-in-up" style={{animationDelay: '2.5s'}}>
          DevOps Engineer
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Automatyzacja • CI/CD • Infrastructure • Kubernetes
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary hover:bg-secondary text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Zobacz Projekty
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
              className="px-4 py-2 bg-white border-2 border-primary/20 rounded-full text-sm font-medium text-primary shadow-sm hover:shadow-md transition-shadow"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
