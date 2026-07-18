# Ciel · Corbion

Station d'observation du ciel — une PWA de contemplation météo pour Corbion et les Ardennes belges.
Vent, pluie (radar animé), qualité de l'air, pollens, foudre en temps réel et astronomie, sur une page unique.

Pensée pour être consultée à deux, sans compte, sans mouchard, hébergeable gratuitement sur GitHub Pages.

## Ce qu'elle affiche

- **Ciel vivant** : le bandeau de tête rend le ciel réel du lieu selon l'heure et la météo (aube, jour, crépuscules, nuit), avec l'astre positionné à son altitude réelle.
- **Synthèse** en une phrase, générée à partir des conditions du moment.
- **Vent** : direction (cadran), vitesse et rafales.
- **Air** : indice européen de qualité de l'air (0–100+), un seul indice consolidé.
- **Pollens** : graminées → bouleau → aulne → armoise → ambroisie → olivier (modèle CAMS Europe).
- **Pluie** : radar animé (passé 2 h + prévision courte).
- **Foudre** : carte temps réel LightningMaps intégrée.
- **Ciel & astres** : lever/coucher, durée du jour, midi solaire, phase et illumination de la lune, six crépuscules (civil, nautique, astronomique).
- **Vigilance** : indicateurs calculés localement (vent, orage, pluie, chaleur, froid/verglas, UV).
- **48 heures** au pas horaire + **7 jours**.
- **Journal** : consigne les conditions réelles d'un geste, stocké dans le navigateur, exportable en JSON.

## Lieux

Trois lieux pré-configurés : **Corbion**, **Libramont (L'Oréal)**, **Temploux (Paraclub)**.
Bouton « + lieu » pour en ajouter (recherche par nom de commune). Tout est mémorisé localement.

## Sources de données

| Domaine | Source | Clé requise |
|---|---|---|
| Vent, pluie, soleil, prévisions | Open-Meteo Forecast API | non |
| Qualité de l'air, pollens | Open-Meteo Air Quality API (CAMS) | non |
| Radar animé | RainViewer | non |
| Foudre temps réel | LightningMaps / Blitzortung.org | non |
| Astronomie | SunCalc (calcul local) | non |
| Fond de carte | OpenStreetMap | non |

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
3. Dépôt → **Settings** → **Pages** → *Source* : branche `main`, dossier `/ (root)` → **Save**.
4. Après une minute, l'app est en ligne sur `https://<ton-pseudo>.github.io/ciel-corbion/`.
5. Sur mobile : ouvre l'URL, puis « Ajouter à l'écran d'accueil » pour l'installer comme app.

> Les chemins sont relatifs (`./`), l'app fonctionne donc dans un sous-dossier de dépôt sans réglage.

## Limites connues (honnêtes)

- **Air** : l'app utilise l'**indice européen** (CAMS), pas le BelAQI officiel belge — ce dernier n'expose pas d'API publique exploitable depuis une page statique sans serveur.
- **Vigilance** : indicateurs **calculés** à partir de seuils, **pas** les codes couleur officiels de l'IRM (leur API n'est pas publique / bloque le navigateur). Ils sont clairement étiquetés « non officiels ».
- **Foudre** : carte visuelle intégrée uniquement. Pas d'alerte « impact à moins de 8 km » : Blitzortung n'offre pas d'API REST et interdit l'accès direct sans serveur relais. Cette alerte-là relève de Home Assistant.
- **Pollens** : armoise, ambroisie et olivier restent indicatifs pour la région (couverture CAMS partielle).

## Attributions

Radar « Weather data by RainViewer » · Foudre Blitzortung.org / LightningMaps.org · Fond OpenStreetMap · Données météo & air Open-Meteo.
