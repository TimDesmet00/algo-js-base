let inputAr = [
  "Alexandre Vandewiele",
  "Antoine Lansman",
  "Bastien Venturi",
  "Carole Gerard",
  "Dorian Vanden Eynde",
  "Elisabeth Leyder",
  "Elodie Ali",
  "Justin Michel",
  "Justine Frigo",
  "Justine Leleu",
  "Kimi Lefort",
  "Layla",
  "Lidwine Careme",
  "Lucas Beauloi",
  "Marie Tara",
  "Mathias Barbier",
  "Okly 2023",
  "Pierre Marien",
  "Robin Piot",
  "Rosalie Boulard",
  "Stephane Comblez",
  "Tim Desmet",
  "Toms",
  "Valentin Lefort",
  "Vens Alexandre",
  "Virginie Dourson",
];

let randomUser = [];

let pickLearner = (inputAr, n) => {
  if (n <= 0 || n > inputAr.length) {
    alert(
      "vous avez introduit un nombre inferieur a 0 ou superieur au nombre d'entré du tableau"
    );
  } else {
    for (let i = 0; i < n; i++) {
      let randomIndex = Math.floor(Math.random() * inputAr.length);
      randomUser.push(inputAr[randomIndex]);
    }
  }
};

pickLearner(6);
console.log(randomUser);
