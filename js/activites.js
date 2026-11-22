var infos = {
  A01: {
    cat: "Culture",
    titre: "Découverte de la médina — Nabeul",
    desc: "Visite dans les ruelles de la médina de Nabeul et découverte des souks traditionnels (2 h - 20 TND).",
  },
  A02: {
    cat: "Artisanat",
    titre: "Atelier d'initiation à la poterie — Nabeul",
    desc: "Découverte du travail de l'argile et de la poterie avec un artisan local (1 h 30 - 35 TND).",
  },
  A03: {
    cat: "Culture",
    titre: "Parcours découverte de Kerkouane — Kerkouane",
    desc: "Visite des ruines puniques de Kerkouane au bord de la mer (2 h 30 - 30 TND).",
  },
  A04: {
    cat: "Nature",
    titre: "Randonnée découverte — Djebel Abderrahmane",
    desc: "Balade à pied en pleine nature avec vue sur le Cap Bon (3 h - 25 TND).",
  },
  A05: {
    cat: "Nature",
    titre: "Circuit du littoral — Kélibia",
    desc: "Marche le long de la côte et des plages de Kélibia (3 h - 40 TND).",
  },
  A06: {
    cat: "Artisanat",
    titre: "Peinture sur céramique — Nabeul",
    desc: "Décoration d'une pièce en céramique avec des motifs locaux (2 h - 25 TND).",
  },
  A07: {
    cat: "Découverte",
    titre: "Découverte d'un marché local — Nabeul",
    desc: "Tour au marché local pour voir les produits et épices de la région (1 h 30 - 15 TND).",
  },
  A08: {
    cat: "Découverte",
    titre: "Promenade photographique — Hammamet",
    desc: "Balade photo dans la vieille ville d'Hammamet et près de la mer (2 h - 30 TND).",
  },
};

function afficherDetails(code) {
  var act = infos[code];
  if (act) {
    document.getElementById("catFen").innerHTML = act.cat;
    document.getElementById("titreFen").innerHTML = act.titre;
    document.getElementById("descFen").innerHTML = act.desc;
  }
}

var Recherche = document.getElementById("recherche");
var listeCat = document.getElementById("categorie");
var cartes = document.getElementsByName("catre");
var nbAff = document.getElementById("nb");
var msgVide = document.getElementById("aucun");

function filtrer() {
  var mot = Recherche.value.toLowerCase();
  var cat = listeCat.value;
  var compteur = 0;

  for (var i = 0; i < cartes.length; i++) {
    var texte = cartes[i].innerHTML.toLowerCase();
    var okMot = texte.indexOf(mot) !== -1;
    var okCat = cat === "Toutes" || texte.indexOf(cat.toLowerCase()) !== -1;

    if (okMot && okCat) {
      cartes[i].style.display = "";
      compteur++;
    } else {
      cartes[i].style.display = "none";
    }
  }

  nbAff.innerHTML = compteur;

  if (compteur === 0) {
    msgVide.hidden = false;
  } else {
    msgVide.hidden = true;
  }
}

Recherche.addEventListener("input", filtrer);
listeCat.addEventListener("change", filtrer);
