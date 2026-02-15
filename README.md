# 🌍 ExploreSen Sénégal - Web App

Une application web moderne et élégante pour explorer et réserver des tours touristiques au Sénégal. Construite avec Next.js 15, React 19, TypeScript, et Tailwind CSS.

## ✨ Caractéristiques

- **Design Moderne & Responsif** - Interface élégante optimisée pour tous les appareils
- **Performance Optimale** - Construit avec Next.js pour une vitesse maximale
- **Tours Variés** - Découvrez 5 destinations touristiques uniques
  - 🌊 Île de Gorée - Histoire & Émotion
  - 🦒 Réserve de Bandia - Safari au Sénégal
  - 🐚 Île de Fadiouth - L'île aux coquillages
  - 🌿 Sine-Saloum - Nature & Évasion
  - 🌸 Lac Rose - Sensations & Paysage Unique
- **Animations Fluides** - Transitions et animations engageantes
- **Code Moderne** - TypeScript pour la sécurité des types
- **SEO Optimisé** - Métadonnées et structure optimales
- **Prêt pour Vercel** - Configuration complète pour déploiement facile

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+ ou supérieur
- npm, yarn, pnpm, ou bun

### Installation

1. **Clonez le projet ou naviguez vers le répertoire**
```bash
cd exploresen
```

2. **Installez les dépendances**
```bash
npm install
```

3. **Configurez les variables d'environnement** (optionnel)
```bash
cp .env.example .env.local
```

4. **Lancez le serveur de développement**
```bash
npm run dev
```

5. **Ouvrez votre navigateur**
Accédez à [http://localhost:3000](http://localhost:3000) pour voir l'application.

## 📁 Structure du Projet

```
tourismen/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout avec métadonnées
│   │   ├── page.tsx            # Page d'accueil
│   │   └── globals.css         # Styles globaux Tailwind
│   ├── components/
│   │   ├── NavBar.tsx          # Barre de navigation
│   │   ├── Hero.tsx            # Section héros
│   │   ├── ToursSection.tsx    # Grille des tours
│   │   ├── TourCard.tsx        # Composant carte de tour
│   │   └── Footer.tsx          # Pied de page
│   └── lib/
│       └── tours.ts            # Données des tours
├── public/                     # Assets statiques
├── package.json               # Dépendances et scripts
├── tsconfig.json              # Configuration TypeScript
├── tailwind.config.ts         # Configuration Tailwind CSS
├── next.config.ts             # Configuration Next.js
├── vercel.json                # Configuration Vercel
└── README.md                  # Ce fichier
```

## 🎨 Personnalisation

### Modifier les Tours

Les tours sont définis dans `src/lib/tours.ts`. Vous pouvez :
- Ajouter ou supprimer des tours
- Modifier les prix et descriptions
- Changer les emojis et couleurs
- Mettre à jour les listes d'inclusions

### Styles Personnalisés

Les couleurs personnalisées sont définies dans `tailwind.config.ts` :
```typescript
colors: {
  'ocean-blue': '#0077BE',
  'sand': '#F4E8D0',
  'tropical': '#06D6A0',
  'sunset': '#FF6B6B',
}
```

## 📦 Commandes Disponibles

```bash
# Développement
npm run dev          # Lancer le serveur de développement

# Production
npm run build        # Construire pour la production
npm start            # Lancer le serveur de production

# Qualité du code
npm run lint         # Vérifier les erreurs ESLint
```

## 🔒 Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# URL publique du site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Ajoutez vos variables selon vos besoins
```

Voir `.env.example` pour plus d'exemples.

## 📱 Responsive Design

L'application est entièrement responsive avec des breakpoints :
- **Mobile** : < 640px
- **Tablet** : 640px - 1024px
- **Desktop** : > 1024px

## ⚡ Optimisations de Performance

- `next/image` pour l'optimisation des images
- Code splitting automatique
- Route caching
- Compression gzip
- CSS minification

## 🚀 Déploiement sur Vercel

### Option 1 : Déploiement via Git

1. **Poussez votre code sur GitHub/GitLab/Bitbucket**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/exploresen.git
git push -u origin main
```

2. **Accédez à [vercel.com](https://vercel.com) et connectez-vous**

3. **Cliquez sur "New Project"**

4. **Sélectionnez votre repository**

5. **Vercel détectera automatiquement Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm ci`

6. **Cliquez sur "Deploy"**

### Option 2 : Déploiement via CLI Vercel

1. **Installez le CLI Vercel**
```bash
npm i -g vercel
```

2. **Authentifiez-vous**
```bash
vercel login
```

3. **Déployez**
```bash
vercel
```

Le CLI vous guidera à travers le processus de déploiement.

### Configuration Après Déploiement

- **Domaine Custom** : Allez à Vercel > Projet > Settings > Domains
- **Variables d'Environnement** : Settings > Environment Variables
- **Analytics** : Vercel > Analytics pour monitorer les performances

Voir le fichier [DEPLOYMENT.md](./DEPLOYMENT.md) pour des instructions détaillées.

## 🐛 Dépannage

### Le serveur de développement ne démarre pas
```bash
# Supprimez .next et node_modules
rm -rf .next node_modules
npm install
npm run dev
```

### Erreurs TypeScript
```bash
# Vérifiez la configuration
npx tsc --noEmit
```

### Problèmes de build
```bash
# Nettoyez le cache Vercel
vercel build --prod
```

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Vercel](https://vercel.com/docs)
- [Guide de déploiement Vercel](./DEPLOYMENT.md)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support & Contact

Pour toute question ou assistance :
- **Email** : info@exploresen.sn
- **Téléphone** : +221 785 294 638
- **WhatsApp** : [Contactez-nous sur WhatsApp](https://wa.me/221785294638)
- **Issues GitHub** : [GitHub Issues](https://github.com/yourusername/exploresen/issues)

---

**Fait avec ❤️ pour le Sénégal et ses voyageurs**

**App: ExploreSen** - Votre compagnon de voyage au Sénégal 🌍
