/**
 * Projet : Micro-interaction audio pour "The Disciplined Artist"
 * Auteur : Saphyra Cromwell
 * Bibliothèque : Tone.js
 */

// Initialisation de la chaîne audio (Synthétiseur + Écho)
const delay = new Tone.FeedbackDelay("16n", 0.4).toDestination();
const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: "sine" },
    envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0,
        release: 0.5
    }
}).connect(delay);

// Ajustement fin du volume général (en décibels)
synth.volume.value = -12; 

// Sélection de la baguette magique dans le DOM
const magicWand = document.getElementById("magic-wand");

// Déclenchement au clic pour respecter les politiques audio des navigateurs
magicWand.addEventListener("click", async () => {
    // Active le contexte audio du navigateur si ce n'est pas déjà fait
    await Tone.start();
    
    const maintenant = Tone.now();
    
    // Arpège ascendant cristallin
    synth.triggerAttackRelease("C6", "16n", maintenant);
    synth.triggerAttackRelease("E6", "16n", maintenant + 0.06);
    synth.triggerAttackRelease("G6", "16n", maintenant + 0.12);
    synth.triggerAttackRelease("C7", "16n", maintenant + 0.18);
});
