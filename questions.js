function CreationTableauLangages() {

  var arrayLangue = [];
  arrayLangue.push("Html");
  arrayLangue.push("CSS");
  arrayLangue.push("Java");
  arrayLangue.push("PHP");

  return arrayLangue;

}

// Créer un tableau "nombres" contenant les nombres de 0 à 5
function CreationTableauNombres() {

  var arrayNb = [];

  for (var i = 0; i < 6; i++) {
    arrayNb.push(i);
  }

  return arrayNb;

}


// Remplacer le troisième élément du tableau par Javascript
function RemplacementElement(langages) {

// supprime 1 élément à partir de l'index 2, et insère "javascript"
langages.splice(2,1, "Javascript");
  return langages;

}

// Ajouter "Ruby" et "Python" à la fin du tableau
function AjoutElementLangages(langages) {
 arrayLength = langages.length;
  langages.splice(arrayLength,0, "Ruby");
  arrayLength = langages.length;
  langages.splice(arrayLength,0, "Python");

    return langages;
}

// Ajouter "-2" et "-1" au début du tableau nombres
function AjoutElementNombres(langages) {

  langages.splice(0,0, -1);
  langages.splice(0,0, -2);

    return langages;
}

// Supprimer le premier élément du tableau langages
function SuppressionPremierElement(langages) {
  langages.splice(0,1);

    return langages;
}

// Supprimer le dernier élément du tableau langages
function SuppressionDernierElement(langages) {
  arrayLength = langages.length;
  langages.splice(arrayLength-1,1);

    return langages;
}

// Faire de la chaîne "reseaux_sociaux_chaine" un tableau "reseaux_sociaux
function ConversionChaineTableau(langages) {
  arrayLength = langages.split(',').length;
  arrayInsere = langages.split(',');

  var arraySociaux = [];
  //alert(arrayLength);
  for (var i = 0; i < arrayLength; i++) {

    arraySociaux.push(arrayInsere[i]);
  }
    return arraySociaux;
}

// Faire du tableau "langages" une chaîne "langages_chaine". Séparer les langages par une virgule
function ConversionTableauChaine(langages) {

    return langages.join();
}

// Trier le tableau "reseaux_sociaux"

function TriTableau(langages) {

    return langages.sort();
}

// Inverser le tableau "langages"

function InversionTableau(langages) {

    return langages.reverse();
}
