const justifyLine = (ligne, lineLength) => {
  //Condtition pour voir si la ligne est saturée
  if (ligne.length === lineLength - 1) {
    return (ligne += "\n");
  } // Traitment de ligne
  else {
    let words = ligne.split(" "); //Détachement des mots de la ligne
    let i = 0; //compteur pour parcouris les differents mots
    while (ligne.length < lineLength - 1) {
      //boucle while qui se repete jusqua ce que que la ligne soit saturé
      if (i === words.length - 1) {
        i = 0;
      }
      //initialisation
      words[i] = words[i] + " ";
      let newLigne = words[0];
      //Concatination de la nouvelle ligne
      for (let i = 1; i < words.length; i++) {
        newLigne = newLigne + " " + words[i];
      }

      ligne = newLigne;
      i++;
    }
    return (ligne += "\n");
  }
};

const justifyText = (text, lineLength) => {
  let words = text.trim().split(" ");
  let lines = [words[0]]; //Tableau qui contient les lignes du pargraphe
  let j = 0; //compteur pour parcouris le tableau des lignes
  let i = 1; //compteur pour parcourir le tableau des mots
  let justifiedText = ""; //variable pour le resultat

  //Boucle sure les mots
  while (i < words.length) {
    //Condition pour voir si la ligne peut ajouter un nouveau mot
    if (lines[j].concat(" ", words[i]).length < lineLength) {
      lines[j] = lines[j].concat(" ", words[i]);
      i++;
    } //Justifier la ligne obtenur et passer vers la ligne suivante
    else {
      //Justifier la ligne
      lines[j] = justifyLine(lines[j], lineLength);
      //Passer à la ligne suivante
      j++;
      //Ajouter le mot dans la ligne suivante
      lines[j] = words[i];
      //Passer au mot suivant
      i++;
    }
  }
  //reformuler les lignes en un seule texte
  lines.map((line) => (justifiedText += line));
  return justifiedText;
};

export { justifyText, justifyLine };
