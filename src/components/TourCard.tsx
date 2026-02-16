'use client';

import { Tour } from '@/lib/tours';
import { useState } from 'react';
import Image from 'next/image';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
      <div className="relative h-64 w-full">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tour.title}</h3>

        <div className="text-3xl font-bold text-ocean-blue mb-4">{tour.price}</div>

        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{tour.description}</p>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">✨ Inclus :</h4>
          <ul className="space-y-1">
            {tour.includes.slice(0, 3).map((item, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start">
                <span className="text-tropical mr-2">✓</span>
                {item}
              </li>
            ))}
            {tour.includes.length > 3 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-ocean-blue font-semibold hover:underline mt-2"
              >
                {isExpanded ? '- Voir moins' : `+ ${tour.includes.length - 3} de plus`}
              </button>
            )}
          </ul>

          {isExpanded && (
            <ul className="space-y-1 mt-3">
              {tour.includes.slice(3).map((item, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start">
                  <span className="text-tropical mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">🎯 Idéal pour :</h4>
          <p className="text-sm text-gray-600">{tour.ideal_for}</p>
        </div>

        <button className="btn-primary w-full mt-auto">
          Réserver Maintenant
        </button>
      </div>
    </div>
  );
}
