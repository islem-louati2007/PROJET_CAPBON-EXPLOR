var tab = [
  [
    "A01",
    "Culture",
    "Découverte de la médina — Nabeul",
    "Visite dans les ruelles de la médina de Nabeul et découverte des souks traditionnels (2 h - 20 TND).",
  ],
  [
    "A02",
    "Artisanat",
    "Atelier d'initiation à la poterie — Nabeul",
    "Découverte du travail de l'argile et de la poterie avec un artisan local (1 h 30 - 35 TND).",
  ],
  [
    "A03",
    "Culture",
    "Parcours découverte de Kerkouane — Kerkouane",
    "Visite des ruines puniques de Kerkouane au bord de la mer (2 h 30 - 30 TND).",
  ],
  [
    "A04",
    "Nature",
    "Randonnée découverte — Djebel Abderrahmane",
    "Balade à pied en pleine nature avec vue sur le Cap Bon (3 h - 25 TND).",
  ],
  [
    "A05",
    "Nature",
    "Circuit du littoral — Kélibia",
    "Marche le long de la côte et des plages de Kélibia (3 h - 40 TND).",
  ],
  [
    "A06",
    "Artisanat",
    "Peinture sur céramique — Nabeul",
    "Décoration d'une pièce en céramique avec des motifs locaux (2 h - 25 TND).",
  ],
  [
    "A07",
    "Découverte",
    "Découverte d'un marché local — Nabeul",
    "Tour au marché local pour voir les produits et épices de la région (1 h 30 - 15 TND).",
  ],
  [
    "A08",
    "Découverte",
    "Promenade photographique — Hammamet",
    "Balade photo dans la vieille ville d'Hammamet et près de la mer (2 h - 30 TND).",
  ],
];

function afficherDetails(code) {
  for (var i = 0; i < tab.length; i++) {
    if (tab[i][0] === code) {
      document.getElementById("cat").innerHTML = tab[i][1];
      document.getElementById("titreF").innerHTML = tab[i][2];
      document.getElementById("desc").innerHTML = tab[i][3];
    }
  }
}

var Recherche = document.getElementById("recherche");
var Categ = document.getElementById("categorie");
var carte = document.getElementsByName("catre");
var nbAff = document.getElementById("nb");
var msg = document.getElementById("aucun");

function filtrer() {
  var mot = Recherche.value.toLowerCase();
  var cat = Categ.value;
  var compteur = 0;

  for (var i = 0; i < carte.length; i++) {
    var texte = carte[i].innerHTML.toLowerCase();
    var okMot = texte.indexOf(mot) !== -1;
    var okCat = cat === "Toutes" || texte.indexOf(cat.toLowerCase()) !== -1;

    if (okMot && okCat) {
      carte[i].style.display = "";
      compteur++;
    } else {
      carte[i].style.display = "none";
    }
  }

  nbAff.innerHTML = compteur;

  if (compteur === 0) {
    msg.hidden = false;
  } else {
    msg.hidden = true;
  }
}

Recherche.addEventListener("input", filtrer);
Categ.addEventListener("change", filtrer);
