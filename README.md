# Ciel · Corbion

Station d'observation du ciel — une PWA de contemplation météo pour les Ardennes belges et au-delà.

Vent, pluie, qualité de l'air, pollens, radar animé, suivi des réserves d'eau, astronomie et événements célestes, sur quatre onglets pensés pour le mobile.

Conçue pour être consultée à deux, sans compte, sans mouchard, hébergeable gratuitement sur GitHub Pages.

## Onglets

### Maintenant

Le premier écran : un coup d'œil complet sur les conditions du moment.

- **Héros** : le bandeau de tête rend le ciel réel du lieu selon l'heure et la météo (aube, jour, crépuscules, nuit), avec horodatage et bouton de rafraîchissement.
- **Coup d'œil** : vent, qualité de l'air (indice européen AQI) et pollen dominant, en trois cellules.
- **Alertes** : vigilance calculée (vent, orage, pluie, chaleur, froid/verglas, UV) et alerte « pluie pour les réserves » quand ≥ 2 mm sont attendus dans les 24 h.
- **Vent détaillé** : direction en toutes lettres + degrés, vitesse soutenue, rafales, dominante du jour, libellé Beaufort, et mini-courbe des rafales sur 24 h.
- **Prochaines 24 heures** : défilement horaire avec icône, température et probabilité de pluie.
- **Air & pollens** : indice AQI + barres par espèce (graminées, bouleau, aulne, armoise, ambroisie, olivier) avec seuils différenciés par type de pollen.

### Prévoir

Anticiper les 48 prochaines heures et les 7 prochains jours.

- **Fenêtres pour sortir** : périodes sèches, tempérées et peu ventées d'au moins 3 h — l'objectif est de sortir plusieurs heures sans surprise. Fenêtre de pluie à éviter identifiée.
- **Confiance multi-modèles** : trois centres météo indépendants croisés (Météo-France AROME, DWD ICON, ECMWF). Le badge de confiance indique leur accord, pénalisé si un modèle manque.
- **Timeline 48 h** : courbe de température avec bande d'incertitude (écart entre modèles), barres de pluie (mm), voie de confiance (%), voie « sortie » à trois couleurs (vert = bon, rouge = pluie/vent, gris foncé = nuit). Toucher une heure ouvre son détail complet avec le vote de chaque modèle.
- **7 jours** : icône, barre de température, rafales max et UV max.

### Pluie

Suivi des précipitations et des réserves d'eau, avec radar animé.

- **Prochaine pluie** : heure, quantité attendue (mm) et durée estimée.
- **Compteur de sécheresse** : jours consécutifs sans pluie significative (≥ 2 mm/jour). Seuil configurable dans le code.
- **Bilan 14 jours** : barres quotidiennes (passé en gris, prévu en couleur) pour visualiser le rythme des précipitations.
- **Pluie heure par heure** : barres d'intensité sur 48 h.
- **Conditions du ciel** : couverture nuageuse, humidité, transparence — utile pour l'observation nocturne.
- **Radar animé** : tuiles RainViewer (passé 2 h + prévision courte) sur fond OpenStreetMap, avec lecture/pause et horodatage.

### Astres

Événements célestes observables et données astronomiques.

- **Aurores boréales** : indice Kp en temps réel (NOAA), croisé avec l'heure (nuit ?) et la couverture nuageuse pour un verdict « observable ce soir ? ». Seuil pour 50°N : Kp ≥ 7.
- **Passages ISS visibles** : liste des prochains passages avec heure, direction lever → coucher, élévation maximale et durée. Calcul côté serveur via l'API ISS de Pollux Labs.
- **Planètes visibles ce soir** : Vénus, Mars, Jupiter, Saturne, Mercure — positions calculées localement via astronomy-engine, avec direction et élévation au crépuscule.
- **Éclipses** : prochaine éclipse solaire ou lunaire visible depuis la Belgique, avec compte à rebours. Table statique vérifiée jusqu'en 2030.
- **Soleil** : lever, coucher, durée du jour, midi solaire.
- **Lune** : phase, illumination, lever et coucher.
- **Crépuscules** : aube et nuit astronomiques, nautiques et civiles — les fenêtres d'observation.

## Lieux

Aucun lieu par défaut au premier lancement. L'app propose d'en ajouter un.

- **Recherche** : champ de recherche Nominatim (OpenStreetMap) en temps réel — communes, adresses, lieux-dits, points d'intérêt.
- **GPS** : bouton « Ma position » avec reverse geocoding automatique.
- **Gestion** : réordonner (↑↓), renommer, supprimer. Au moins un lieu doit rester.
- **Multi-lieux** : pastilles de changement rapide, données rechargées à chaque sélection.

## Sources de données

| Domaine | Source | Clé requise |
|---|---|---|
| Vent, pluie, soleil, prévisions, historique 14 j | Open-Meteo Forecast API | non |
| Confiance multi-modèles | Open-Meteo (Météo-France, DWD ICON, ECMWF) | non |
| Qualité de l'air, pollens | Open-Meteo Air Quality API (CAMS) | non |
| Radar animé | RainViewer | non |
| Aurores (indice Kp) | NOAA SWPC | non |
| Passages ISS | iss-api.fly.dev (Pollux Labs) | non |
| Planètes visibles | astronomy-engine (calcul local) | non |
| Éclipses | Table statique vérifiée | non |
| Astronomie (soleil, lune, crépuscules) | SunCalc (calcul local) | non |
| Recherche de lieux | Nominatim / OpenStreetMap | non |
| Fond de carte | OpenStreetMap | non |

Aucune clé API, aucun compte, aucune dépendance serveur propriétaire.

## Déployer sur GitHub Pages

1. Crée un dépôt GitHub (ex. `ciel-corbion`).
2. Dépose ces fichiers **à la racine** du dépôt :
   ```
   index.html
   manifest.webmanifest
   sw.js
   icon.svg
   README.md
   ```
3. Dépôt → **Settings** → **Pages** → Source : branche `main`, dossier `/ (root)` → **Save**.
4. Après une minute, l'app est en ligne sur `https://<ton-pseudo>.github.io/ciel-corbion/`.
5. Sur mobile : ouvre l'URL, puis « Ajouter à l'écran d'accueil » pour l'installer comme app.

Les chemins sont relatifs (`./`), l'app fonctionne dans un sous-dossier de dépôt sans réglage.

Le service worker utilise une stratégie réseau d'abord pour le HTML : les mises à jour s'affichent dès le rechargement, sans cache périmé.

## Limites connues

- **Air** : l'app utilise l'**indice européen** (CAMS via Open-Meteo), pas le BelAQI officiel belge — ce dernier n'expose pas d'API publique utilisable depuis une page statique.
- **Vigilance** : indicateurs **calculés** à partir de seuils, **pas** les codes couleur officiels de l'IRM. Clairement étiquetés « non officiels ».
- **Pollens** : armoise, ambroisie et olivier restent indicatifs pour la Belgique (couverture CAMS partielle).
- **ISS** : l'API (iss-api.fly.dev) est maintenue par un développeur indépendant. Si le service s'arrête, le bloc ISS affiche « indisponible » sans impacter le reste de l'app.
- **Aurores** : le CORS de la NOAA n'est pas garanti à 100 %. En cas de blocage, le bloc aurores se dégrade proprement.
- **Planètes** : dépend du chargement d'astronomy-engine depuis un CDN. Si le CDN est lent ou indisponible, le bloc affiche un message clair.
- **Éclipses** : table statique maintenue à la main. Couvre 2026–2030 pour la Belgique.

## Attributions

- Radar : [RainViewer](https://rainviewer.com) — « Weather data by RainViewer »
- Fond de carte : [OpenStreetMap](https://www.openstreetmap.org/copyright)
- Recherche : [Nominatim / OpenStreetMap](https://nominatim.openstreetmap.org)
- Données météo & air : [Open-Meteo](https://open-meteo.com)
- Aurores : [NOAA SWPC](https://www.swpc.noaa.gov)
- ISS : [Pollux Labs](https://iss-api.fly.dev)
- Astronomie : [SunCalc](https://github.com/mourner/suncalc), [astronomy-engine](https://github.com/cosinekitty/astronomy)
