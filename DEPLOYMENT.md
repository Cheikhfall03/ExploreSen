# 🚀 Guide de Déploiement sur Vercel

Ce guide vous explique comment déployer l'application ExploreSen sur Vercel, une plateforme de déploiement optimisée pour Next.js.

## 📋 Prérequis

- Compte GitHub, GitLab, ou Bitbucket
- Compte Vercel (gratuit à [vercel.com](https://vercel.com))
- Accès au projet ExploreSen sur votre machine locale

## 🌐 Étape 1 : Préparez votre Repository Git

### Si vous n'avez pas encore initialisé Git

```bash
# Naviguez vers le répertoire du projet
cd exploresen

# Initialisez le repository Git
git init

# Ajoutez tous les fichiers
git add .

# Créez le premier commit
git commit -m "Initial commit: ExploreSen web app"

# Renommez la branche par défaut à 'main'
git branch -M main

# Ajoutez le repository distant (GitHub/GitLab)
git remote add origin https://github.com/yourusername/exploresen.git

# Poussez le code vers le serveur
git push -u origin main
```

### Si vous avez déjà un repository Git

Assurez-vous que tous vos changements sont committés :
```bash
git status
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## 🔧 Étape 2 : Configuration du Repository (Optionnel mais Recommandé)

### Créez un fichier `.github/workflows/vercel-preview.yml`

Ceci créera automatiquement des previews pour chaque pull request :

```yaml
name: Vercel Preview Deployment
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
on:
  push:
    branches:
      - main
  pull_request:
    types:
      - opened
      - synchronize
      - reopened

jobs:
  Deploy-Preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=preview --token=${{ secrets.VERCEL_TOKEN }}
      - name: Build Project Artifacts
        run: vercel build --token=${{ secrets.VERCEL_TOKEN }}
      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prebuilt --token=${{ secrets.VERCEL_TOKEN }}
```

## 🚀 Étape 3 : Déploiement sur Vercel

### Méthode 1 : Interface Web Vercel (Recommandée pour les débutants)

1. **Visitez [vercel.com](https://vercel.com)**

2. **Connectez-vous ou créez un compte**
   - Cliquez sur "Sign Up"
   - Choisissez "Continue with GitHub/GitLab/Bitbucket"
   - Autorisez Vercel

3. **Importez votre projet**
   - Cliquez sur "Add New..." > "Project"
   - Sélectionnez votre repository `exploresen`
   - Vercel détectera automatiquement les paramètres Next.js

4. **Configuration Automatique**
   - **Framework** : Next.js (détecté automatiquement)
   - **Build Command** : `npm run build` (pré-rempli)
   - **Output Directory** : `.next` (pré-rempli)
   - **Install Command** : `npm ci` (pré-rempli)

5. **Variables d'Environnement**
   - Allez à "Environment Variables"
   - Ajoutez vos variables si nécessaire
   - Par défaut, la démo n'en a pas besoin

6. **Cliquez sur "Deploy"**

   ✅ Votre application est maintenant en ligne !

### Méthode 2 : CLI Vercel (Pour avancés)

1. **Installez le CLI Vercel**
```bash
npm install -g vercel
```

2. **Authentifiez-vous**
```bash
vercel login
```

3. **Déployez l'application**
```bash
# Pour la production
vercel --prod

# Pour un test
vercel
```

4. **Suivez les instructions du CLI**
   - Confirmez les paramètres du projet
   - Attendez que le déploiement se termine

## ✅ Vérification du Déploiement

Après le déploiement, vous recevrez :
- ✅ Une URL unique : `https://exploresen-xxxxx.vercel.app`
- ✅ Un domaine personnalisé (optionnel)
- ✅ Des informations de déploiement

Visitez l'URL pour vérifier que tout fonctionne correctement.

## 🎯 Étape 4 : Configuration Avancée (Optionnel)

### Ajouter un Domaine Custom

1. **Allez à votre Projet Vercel > Settings > Domains**
2. **Cliquez sur "Add"**
3. **Entrez votre domaine** (par ex: `exploresen.sn`)
4. **Suivez les instructions DNS** pour configurer votre domaine

### Variables d'Environnement

1. **Allez à Settings > Environment Variables**
2. **Cliquez sur "Add New"**
3. **Renseignez les variables** :
   - Key: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://votredomaine.com`

### Paramètres de Build

1. **Settings > Build & Development Settings**
2. Configurez selon vos besoins :
   - **Install Command** : commande pour installer les dépendances
   - **Build Command** : commande pour créer la version optimisée
   - **Output Directory** : où Vercel trouve les fichiers de sortie

### Monitorage et Logs

1. **Déploiements** : Voir l'historique et l'état des déploiements
2. **Logs** : Consultez les logs de build et de runtime
3. **Analytics** : Activez pour suivre les performances
4. **Usage** : Monitorer la bande passante et les requêtes

## 🔄 Déploiement Automatique

Après la configuration initiale, Vercel déploiera automatiquement :
- ✅ Chaque push sur `main` = production
- ✅ Chaque pull request = preview automatique
- ✅ Chaque push sur d'autres branches = preview

Pas besoin de faire quoi que ce soit ! 🎉

**Votre application ExploreSen est en ligne ! 🚀**

## 📊 Optimisations Vercel Incluses

Votre application bénéficie automatiquement de :

- **Edge Functions** : Exécution ultra-rapide
- **Image Optimization** : Images automatiquement optimisées
- **Performance Analytics** : Suivi des Core Web Vitals
- **Automatic HTTPS** : Certificat SSL gratuit
- **Global CDN** : Contenu servi depuis le serveur le plus proche
- **Serverless Functions** : Scalabilité automatique

## 🔒 Sécurité

Vercel fournit :
- ✅ Certificat SSL/TLS automatique
- ✅ Protection contre les attaques courantes
- ✅ Environnement de production isolé
- ✅ Backups automatiques

## 🐛 Dépannage

### Le déploiement échoue

1. **Vérifiez les logs**
   - Allez à Deployments > Cliquez sur le déploiement échoué
   - Consultez l'onglet "Build" pour voir les erreurs

2. **Erreurs courantes et solutions** :

```bash
# Erreur: "Build failed"
# Solution: Vérifiez que package.json a tous les dépendances

# Erreur: "Cannot find module"
# Solution: npm install puis git push

# Erreur: "Out of memory"
# Solution: Optimisez les images ou contactez support Vercel
```

### L'application est déployée mais vide

1. Vérifiez que `src/app/page.tsx` existe
2. Vérifiez que le build crée bien `.next/`
3. Relancez le déploiement

### Performance lente

1. Utilisez les Vercel Analytics
2. Optimisez les images
3. Minimisez le JavaScript

## 📚 Ressources Utiles

- [Documentation Vercel](https://vercel.com/docs)
- [Guide Next.js sur Vercel](https://vercel.com/guides/nextjs)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Status Page Vercel](https://www.vercelstatus.com/)

## 🆘 Support

Si vous rencontrez des problèmes :

1. **Consultez les Vercel Docs** : https://vercel.com/docs
2. **Vérifiez les discussions** : https://github.com/vercel/next.js/discussions
3. **Contactez Vercel Support** : Pour les comptes Premium

## 🎉 Félicitations !

Votre application Tourismen est maintenant en ligne et accessible au monde entier !

### Prochaines Étapes

1. Testez votre application déployée
2. Partagez l'URL avec vos clients
3. Configurez un domaine custom (optionnel)
4. Activez Analytics pour suivre le trafic
5. Mettez en place un monitoring

---

**Vous avez besoin d'aide ?** Consultez [vercel.com/support](https://vercel.com/support)

**ExploreSen** - Explorez le Sénégal avec confiance 🌍
