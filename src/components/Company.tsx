export default function Company() {
  return (
    <section className="py-12 bg-gradient-to-b from-dark to-darker border-y border-primary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24">
          {/* AGH */}
          <div className="text-center">
            <div className="mb-3 text-xs text-purple-300 font-medium uppercase tracking-wider">Inżynier | Automatyka I Robotyka</div>
            <div className="h-24 flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}Znak_graficzny_AGH.svg.png`}
                alt="AGH Kraków" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className="mt-2 text-base font-bold text-white">AGH Kraków</div>
          </div>
          
          <div className="hidden lg:block h-24 w-px bg-primary/30"></div>
          <div className="block lg:hidden h-px w-24 bg-primary/30"></div>
          
          {/* Core Logic */}
          <div className="text-center">
            <div className="mb-3 text-xs text-purple-300 font-medium uppercase tracking-wider">DevOps Engineer</div>
            <div className="h-24 flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}logo-corelogic.png`}
                alt="Core Logic" 
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="mt-2 text-base font-bold text-white">Core Logic</div>
          </div>
        </div>
      </div>
    </section>
  )
}
