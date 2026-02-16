export interface Tour {
  id: number;
  icon: string;
  image: string;
  title: string;
  price: string;
  description: string;
  includes: string[];
  ideal_for: string;
  color: string;
}

export const tours: Tour[] = [
  {
    id: 1,
    icon: '🌊',
    image: '/ile-de-goree.jpg',
    title: 'Île de Gorée – Histoire & Émotion',
    price: '25 000 FCFA / personne',
    description: 'Plongez dans l\'histoire fascinante de Gorée, classée au patrimoine mondial de l\'UNESCO. Entre ruelles colorées, maisons coloniales et vue imprenable sur l\'océan, cette excursion est une immersion culturelle forte et inoubliable.',
    includes: [
      'Transport aller-retour',
      'Chaloupe',
      'Visite guidée',
      'Temps libre pour photos',
      'Repas (entrée + plat + dessert)',
    ],
    ideal_for: 'Sorties culturelles, groupes d\'amis, team building, rencontres et échanges',
    color: '#0077BE',
  },
  {
    id: 2,
    icon: '🦒',
    image: '/bandia.jpeg',
    title: 'Réserve de Bandia – Safari au Sénégal',
    price: '35 000 FCFA / personne',
    description: 'Vivez une expérience safari unique à quelques kilomètres de Dakar. Observez girafes, rhinocéros, zèbres et antilopes dans leur habitat naturel.',
    includes: [
      'Transport climatisé',
      'Entrée au parc',
      'Safari en 4x4 avec guide',
    ],
    ideal_for: 'Familles, amoureux de nature, sorties détente',
    color: '#FF6B6B',
  },
  {
    id: 3,
    icon: '🐚',
    image: '/joal.jpeg',
    title: 'Île de Fadiouth – L\'île aux coquillages',
    price: '20 000 FCFA / personne',
    description: 'Découvrez l\'île construite sur des coquillages, symbole de coexistence religieuse et de paix. Une escapade authentique entre tradition, culture et paysages uniques.',
    includes: [
      'Transport',
      'Visite guidée',
      'Découverte du cimetière mixte',
    ],
    ideal_for: 'Découverte culturelle et tourisme responsable',
    color: '#06D6A0',
  },
  {
    id: 4,
    icon: '🌿',
    image: '/sine-saloum.jpeg',
    title: 'Sine-Saloum – Nature & Évasion',
    price: '30 000 FCFA / personne',
    description: 'Partez à la découverte des bolongs du Sine-Saloum, classé réserve de biosphère. Entre mangroves, pirogue et villages traditionnels, vivez une expérience paisible et immersive.',
    includes: [
      'Transport',
      'Balade en pirogue',
      'Visite de village',
      'Repas traditionnel',
    ],
    ideal_for: 'Détente, couples, excursions nature',
    color: '#F4E8D0',
  },
  {
    id: 5,
    icon: '🌸',
    image: '/le-lac-rose.jpg',
    title: 'Lac Rose – Sensations & Paysage Unique',
    price: '28 000 FCFA / personne',
    description: 'Découvrez l\'un des sites les plus emblématiques du Sénégal : le célèbre Lac Rose, connu pour ses reflets uniques et son ancienne arrivée du rallye Paris-Dakar. Entre balade en 4x4 sur les dunes, découverte de l\'extraction traditionnelle du sel et vue spectaculaire sur le lac.',
    includes: [
      'Transport aller-retour',
      'Visite du lac',
      'Explication sur l\'exploitation du sel',
      'Balade en 4x4 (optionnelle selon formule)',
      'Déjeuner',
    ],
    ideal_for: 'Amateurs d\'aventure, de photos et de découverte culturelle',
    color: '#FF7F7F',
  },
];
