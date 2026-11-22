const tab = [
  {
    id: "A01",
    titre: "Découverte de la médina — Nabeul",
    categorie: "Culture",
    description:
      "Parcourez les ruelles historiques de la médina de Nabeul avec un guide local. Découvrez l'architecture traditionnelle et les souks animés. Une sortie idéale pour connaître l'histoire de la ville.",
  },
  {
    id: "A02",
    titre: "Atelier d'initiation à la poterie — Nabeul",
    categorie: "Artisanat",
    description:
      "Découvrez le travail de l'argile dans un atelier traditionnel à Nabeul. Apprenez les bases du façonnage avec un artisan potier. Vous repartez avec votre propre création.",
  },
  {
    id: "A03",
    titre: "Parcours découverte de Kerkouane — Kerkouane",
    categorie: "Culture",
    description:
      "Visitez le site archéologique punique de Kerkouane près de la mer. Observez les vestiges des maisons antiques et des rues d'époque. Un lieu riche en histoire et en patrimoine.",
  },
  {
    id: "A04",
    titre: "Randonnée découverte — Djebel Abderrahmane",
    categorie: "Nature",
    description:
      "Marchez au milieu des sentiers naturels du Djebel Abderrahmane. Profitez d'une belle vue sur les paysages du Cap Bon. Une balade agréable en plein air.",
  },
  {
    id: "A05",
    titre: "Circuit du littoral — Kélibia",
    categorie: "Nature",
    description:
      "Longez la côte et les criques de Kélibia en observant la mer. Découvrez les beaux panoramas autour du fort de Kélibia. Une promenade rafraîchissante en bord de mer.",
  },
  {
    id: "A06",
    titre: "Peinture sur céramique — Nabeul",
    categorie: "Artisanat",
    description:
      "Initiez-vous à la décoration des pièces en céramique à Nabeul. Apprenez à utiliser les couleurs et motifs locaux. Une activité créative et conviviale.",
  },
  {
    id: "A07",
    titre: "Découverte d'un marché local — Nabeul",
    categorie: "Découverte",
    description:
      "Promenez-vous dans le marché local de Nabeul pour voir les produits frais. Rencontrez les vendeurs et découvrez les saveurs de la région. Une immersion simple et authentique.",
  },
  {
    id: "A08",
    titre: "Promenade photographique — Hammamet",
    categorie: "Découverte",
    description:
      "Explorez les ruelles de Hammamet pour prendre de belles photos. Profitez de la lumière et des couleurs de la médina. Une balade idéale pour les amateurs de photo.",
  },
];

let recherche = document.getElementById("recherche");
let Cat = document.getElementById("categorie");
let nb = document.getElementById("nb");
let aucun = document.getElementById("aucun");
let car = document.getElementsByName("catre");

function filtrer() {
  let mot = recherche.value.toLowerCase();
  let Choix = Cat.value;
  let compteur = 0;

  for (let i = 0; i < car.length; i++) {
    let carte = car[i].innerText.toLowerCase();
    let act = tab[i];

    let okMot = carte.includes(mot);
    let okCat = Choix === "Toutes" || act.categorie === Choix;

    if (okMot && okCat) {
      car[i].hidden = false;
      compteur++;
    } else {
      car[i].hidden = true;
    }
  }

  nb.innerText = compteur;

  if (compteur === 0) {
    aucun.hidden = false;
  } else {
    aucun.hidden = true;
  }
}

recherche.addEventListener("input", filtrer);
Cat.addEventListener("change", filtrer);

function details(id) {
  for (let i = 0; i < tab.length; i++) {
    if (tab[i].id === id) {
      alert(tab[i].titre + " - " + tab[i].description);
    }
  }
}
