interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-200/95 backdrop-blur-md shadow-lg' : 'bg-dark-200/80'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-secondary">
            <span className="text-white">&lt;</span>DevOps<span className="text-white">/&gt;</span>
          </div>
          <ul className="flex gap-8">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-secondary transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
