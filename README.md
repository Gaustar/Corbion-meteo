# 🌤️ SkyStation

Station météo avancée, inspirée de Corbion-meteo, en un seul repo prêt pour GitHub Pages.

## ✨ Fonctionnalités

| Onglet | Contenu |
|--------|---------|
| **🌡️ Maintenant** | Conditions live, vent détaillé (Beaufort, direction, rafales), alertes calculées, qualité de l'air AQI, pollens (6 espèces), soleil |
| **📊 Prévoir** | Fenêtres de sortie sur 48h, confiance multi-modèles (AROME / ICON / ECMWF), timeline interactive, courbe température, 7 jours |
| **🌧️ Pluie** | Radar animé RainViewer, compteur sécheresse, bilan 14 jours, pluie heure par heure |
| **🔭 Astres** | Aurores boréales (Kp NOAA), passages ISS, planètes visibles (astronomy-engine), phases lune, crépuscules |

## 🚀 Déploiement

1. Crée un repo GitHub
2. Ajoute les 4 fichiers ci-dessus à la racine
3. **Settings → Pages** → `main` → `/ (root)`
4. `https://&lt;user&gt;.github.io/&lt;repo&gt;`

## 🛠️ Stack

- Open-Meteo (météo + air + pollens)
- RainViewer (radar)
- NOAA SWPC (aurores)
- SeeISS (passages ISS)
- Astronomy Engine + SunCalc (calculs locaux)
- Leaflet + Chart.js
- 100% client-side, 0 clé API

## 📱 PWA

"Ajouter à l'écran d'accueil" pour installer l'app. Service worker en réseau-d'abord : les mises à jour s'affichent au rechargement.
