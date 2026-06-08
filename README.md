# pilotageKPI

Site web statique vitrine pour présenter une offre professionnelle de conseil et développement autour du pilotage opérationnel, de la performance KPI et de la digitalisation industrielle.

## Objectif du projet

Le projet a pour objectif de commercialiser une offre B2B industrielle centrée sur :

- la performance opérationnelle ;
- la digitalisation industrielle ;
- la saisie terrain par rôle ;
- les tableaux de bord KPI ;
- le cockpit Direction ;
- l’intégration progressive de capteurs industriels et de données temps réel.

Le site ne contient pas de backend, pas de PHP, pas de base de données et aucune donnée réelle d’entreprise.

## Structure du projet

```text
pilotageKPI/
├── index.html
├── solutions.html
├── modules.html
├── digitalisation-terrain.html
├── capteurs-temps-reel.html
├── offres.html
├── methode.html
├── apropos.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       └── hero-industrial-kpi.png
├── documents/
├── docs/
├── README.md
└── .gitignore
```

## Lancement local

Avec WampServer, placer le dossier dans :

```text
c:\wamp64\www\pilotageKPI
```

Puis ouvrir dans le navigateur :

```text
http://localhost/pilotageKPI/
```

## Hébergement futur

Le site est compatible avec un hébergement statique via GitHub Pages ou Cloudflare Pages.

Pour un déploiement futur, il suffira de publier le dépôt et de servir la racine du projet comme dossier de sortie statique.
