export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌍</span>
              <span className="text-xl font-bold">ExploreSen</span>
            </div>
            <p className="text-gray-400 text-sm">
              Découvrez le Sénégal à travers des expériences authentiques et inoubliables.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#tours" className="hover:text-white transition">Tours</a></li>
              <li><a href="#about" className="hover:text-white transition">À Propos</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Gorée</a></li>
              <li><a href="#" className="hover:text-white transition">Bandia Safari</a></li>
              <li><a href="#" className="hover:text-white transition">Lac Rose</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">📧 <a href="mailto:info@exploresen.sn" className="hover:text-white transition">info@exploresen.sn</a></p>
            <p className="text-sm text-gray-400 mb-2">📞 <a href="tel:+221785294638" className="hover:text-white transition">+221 785 294 638</a></p>
            <p className="text-sm text-gray-400 mb-4">💬 <a href="https://wa.me/221785294638" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a></p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">f</a>
              <a href="#" className="text-gray-400 hover:text-white transition">𝕏</a>
              <a href="#" className="text-gray-400 hover:text-white transition">📸</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 ExploreSen Sénégal. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Politique de Confidentialité</a>
              <a href="#" className="hover:text-white transition">Conditions d'Utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
