export default function Company() {
  return (
    <section className="py-12 bg-gradient-to-b from-green-50/50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-24 flex-wrap">
          {/* AGH */}
          <div className="text-center">
            <div className="mb-3 text-xs text-gray-500 font-medium uppercase tracking-wider">Student</div>
            <div className="h-24 flex items-center justify-center">
              <img 
                src="/Znak_graficzny_AGH.svg.png" 
                alt="AGH Kraków" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className="mt-2 text-base font-bold text-gray-800">AGH Kraków</div>
          </div>
          
          <div className="h-24 w-px bg-gray-300"></div>
          
          {/* Core Logic */}
          <div className="text-center">
            <div className="mb-3 text-xs text-gray-500 font-medium uppercase tracking-wider">DevOps Engineer</div>
            <div className="h-24 flex items-center justify-center">
              <img 
                src="/logo-corelogic.png" 
                alt="Core Logic" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="mt-2 text-base font-bold text-gray-800">Core Logic</div>
          </div>
        </div>
      </div>
    </section>
  )
}
