export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-r from-ocean-blue via-tropical to-orange-400 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Découvrez la Magie du Sénégal
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Des expériences touristiques inoubliables qui célèbrent la culture, la nature et l'histoire captivante du Sénégal
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <a href="#tours" className="btn-primary text-lg">
            Explorez nos Tours
          </a>
          <a href="#contact" className="btn-secondary text-lg">
            Nous Contacter
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-white text-center">
          <div>
            <div className="text-4xl mb-2">5</div>
            <div className="text-sm">Tours Disponibles</div>
          </div>
          <div>
            <div className="text-4xl mb-2">1000+</div>
            <div className="text-sm">Voyageurs Satisfaits</div>
          </div>
          <div>
            <div className="text-4xl mb-2">4.9★</div>
            <div className="text-sm">Excellent Avis</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
