'use client';

import { tours } from '@/lib/tours';
import TourCard from './TourCard';

export default function ToursSection() {
  return (
    <section id="tours" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Tours Exceptionnels</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explorez les destinations les plus captivantes du Sénégal avec nos guides experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-ocean-blue to-tropical rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Envie de personnaliser votre expérience?</h3>
          <p className="mb-8 text-lg">Nous pouvons créer des packages sur mesure adaptés à vos besoins</p>
          <button className="bg-white text-ocean-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Demander un Devis
          </button>
        </div>
      </div>
    </section>
  );
}
