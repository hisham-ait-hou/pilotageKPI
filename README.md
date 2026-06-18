# pilotageKPI

Site vitrine statique pour présenter une offre B2B industrielle de conseil et développement autour du pilotage opérationnel, de la performance KPI et de la digitalisation industrielle.

## Objectif commercial

Le site permet de présenter une offre professionnelle couvrant :

- la Performance Opérationnelle ;
- la Digitalisation Industrielle ;
- la saisie terrain par rôle ;
- les imports contrôlés ;
- la structuration des données opérationnelles ;
- les tableaux de bord KPI ;
- le cockpit Direction ;
- l’intégration progressive de systèmes existants, capteurs, gateway IoT ou API sécurisée.

Le projet reste volontairement statique : pas de backend, pas de PHP, pas de base de données et pas de dépendance npm.

## Pages du site

- `index.html` : accueil et positionnement principal.
- `solutions.html` : solutions de pilotage opérationnel industriel.
- `modules.html` : modules Production, Planification, Maintenance, Stock, RH, Sécurité, Sous-traitance et Direction.
- `digitalisation-terrain.html` : saisie terrain par rôle et qualité des données.
- `capteurs-temps-reel.html` : intégration progressive capteurs, gateway IoT, API sécurisée et KPI.
- `offres.html` : offres commerciales et niveaux d’accompagnement.
- `methode.html` : méthode projet progressive.
- `apropos.html` : présentation du consultant.
- `contact.html` : contact et demande de diagnostic.
- `404.html` : page d’erreur statique.

## Structure des dossiers

```text
pilotageKPI/
|-- index.html
|-- solutions.html
|-- modules.html
|-- digitalisation-terrain.html
|-- capteurs-temps-reel.html
|-- offres.html
|-- methode.html
|-- apropos.html
|-- contact.html
|-- 404.html
|-- robots.txt
|-- sitemap.xml
|-- assets/
|   |-- css/
|   |   `-- style.css
|   |-- js/
|   |   `-- main.js
|   `-- img/
|       |-- hero-industrial-kpi.png
|       `-- demo/
|           |-- hero-dashboard-mine.png
|           |-- role-based-data-platform.png
|           |-- integrated-modules-dashboard.png
|           |-- iot-data-flow-mining.png
|           `-- cockpit-direction-boardroom.png
|-- documents/
|-- docs/
|-- README.md
`-- .gitignore
```

## Lancement local avec WAMP

Placer le dossier dans :

```text
c:\wamp64\www\pilotageKPI
```

Puis ouvrir :

```text
http://localhost/pilotageKPI/
```

## Déploiement GitHub Pages

Repository :

```text
https://github.com/hisham-ait-hou/pilotageKPI
```

Configuration GitHub Pages :

```text
Settings > Pages > Deploy from branch > main > root
```

URL cible :

```text
https://hisham-ait-hou.github.io/pilotageKPI/
```

## Déploiement Cloudflare Pages

Paramètres recommandés :

- connecter le repository GitHub ;
- framework preset : `None` ;
- build command : vide ;
- output directory : `/` ou root.

## Workflow Git

```bash
git status
git add .
git commit -m "message"
git push
```

## Règles de confidentialité

- Ne pas publier de données réelles d’entreprise.
- Ne pas mentionner l’entreprise actuelle.
- Ne pas exposer de fichiers sensibles.
- Utiliser uniquement des visuels et contenus de démonstration anonymisés.
- Ne pas publier de chiffres internes ou confidentiels.

## Prochaines évolutions possibles

- formulaire avancé ;
- brochure PDF ;
- blog SEO ;
- espace client ;
- version dynamique PHP/MySQL ;
- intégration API/capteurs.
