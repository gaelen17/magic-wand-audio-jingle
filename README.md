# magic-wand-audio-jingle
the audio for my magic wand button

# 🪄 Projet : L'Icône Magique Sonore

Ce dépôt contient le code source permettant d'ajouter une micro-interaction sonore ("ear candy") sur une icône de baguette magique en utilisant la bibliothèque Web Audio **Tone.js**. Développé initialement pour le site web *The Disciplined Artist*.

## 🚀 Fonctionnalités
- **Synthèse en temps réel :** Aucun fichier audio lourd (`.mp3` ou `.wav`) à charger. Le son est généré à la volée par le navigateur.
- **Effets spatiaux :** Utilisation d'un effet de délai (écho) pour donner de la profondeur à l'arpège.
- **Respect de l'expérience utilisateur :** L'audio se déclenche suite à une action délibérée (le clic), évitant les blocages des navigateurs modernes.

## 🛠️ Guide d'Intégration Pas-à-Pas

### Étape 1 : Lier la Bibliothèque Tone.js
Pour que le script fonctionne, la bibliothèque Tone.js doit être chargée avant le script d'interaction.
```html
<script src="[https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js](https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js)"></script>
