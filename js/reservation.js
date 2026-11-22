function calculer() {
  let prix = Number(document.getElementById("act").value);
  let nb = Number(document.getElementById("nbp").value);
  if (nb < 1) {
    nb = 0;
  }
  let st = prix * nb;
  let rem = 0;
  if (nb >= 4) {
    rem = st * 0.1;
  }
  let tot = st - rem;

  document.getElementById("pu").innerText = prix + "DT";
  document.getElementById("nbper").innerText = nb;
  document.getElementById("st").innerText = st + " DT";
  document.getElementById("rem").innerText = rem + " DT";
  document.getElementById("tot").innerText = tot + " DT";
}

document.getElementById("act").onchange = calculer;
document.getElementById("nbp").oninput = calculer;
document.getElementById("calc").onclick = calculer;
calculer();

function verifier(e) {
  e.preventDefault();

  let err = document.getElementById("err");
  let recap = document.getElementById("recap");
  err.innerText = "";
  recap.innerText = "";

  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  let email = document.getElementById("email").value;
  let tel = document.getElementById("tel").value;
  let date = document.getElementById("dateres").value;
  let nb = Number(document.getElementById("nbp").value);
  let cond = document.getElementById("condi").checked;

  let d = new Date();
  let mois = d.getMonth() + 1;
  let jour = d.getDate();
  if (mois < 10) mois = "0" + mois;
  if (jour < 10) jour = "0" + jour;
  let auj = d.getFullYear() + "-" + mois + "-" + jour;

  if (nom === "" || prenom === "") {
    err.innerText = "Nom et prénom vides";
  } else if (!email.includes("@")) {
    err.innerText = "Email invalide.";
  } else if (tel === "") {
    err.innerText = "Téléphone invalide";
  } else if (date === "" || date < auj) {
    err.innerText = "Date invalide ";
  } else if (nb < 1 || nb > 6) {
    err.innerText = "participants entre 1et6";
  } else if (!cond) {
    err.innerText = "Acceptez les conditions.";
  } else {
    calculer();
    let tot = document.getElementById("tot").innerText;
    recap.innerText =
      "Simulation enregistrée localement à l'écran : aucune réservation réelle n'a été effectuée. " +
      "Date =" +
      date +
      "  Participants =" +
      nb +
      " Total = " +
      tot;
  }
}

function vider() {
  document.getElementById("err").innerText = "";
  document.getElementById("recap").innerText = "";
  document.getElementById("pu").innerText = "0 TND";
  document.getElementById("nbPersonnes").innerText = "0";
  document.getElementById("st").innerText = "0 TND";
  document.getElementById("rem").innerText = "0 TND";
  document.getElementById("tot").innerText = "0 TND";
}

let f = document.getElementById("form");
f.onreset = vider;
f.onsubmit = verifier;
