window.addEventListener("load", init);

function init() {
  /* document.querySelector("x")  x= név (article, article div), #id, .class; csak egy elemet ad vissza
   document.getElementById("id")
   document.querySelectorAll -> az összes elemet visszaadja, listában, []-val lehet hivatkozni az elemekre
   document.getElementsByClassName("class") listát ad vissza
   .innerHTML irás a html-be
   elem attributumának megváltoztatása, pl.: elem.src
   class-t rátenni: elem.classList.add("classnév")
   stílus változtatás (in-line stílus): elem.style.backgroundColor="red"
   eseménykezelők: elem.addEventListener("click",function)
   console.log(event.target) -> eseményt kiváltott elem
   */
  const LISTA = [
    "sorozat",
    "videójáték",
    "sorozat",
    "videójáték",
    "sorozat",
    "videójáték",
    "sorozat",
    "videójáték",
  ];
  const felsorolas = document.getElementById("felsorolas");
  const ujlista = document.getElementById("ujlista");
  let htmlValtozo = listabaKiir(LISTA);
  kiir(htmlValtozo, felsorolas);
  let htmlValtozo2 = listabaRendez(LISTA);
  felsorolas.addEventListener("click", klikkeles);
  kiir(htmlValtozo2, ujlista);
  //ujlista.addEventListener("click", klikkeles);
  const gombElemek = document.querySelectorAll("#ujlista button");
  for (let index = 0; index < gombElemek.length; index++) {
    gombElemek[index].addEventListener("click", szinvaltas);
  }

  /*   let htmlValtozo ="<ul>"
  for (let index = 0; index < LISTA.length; index++) {
    //htmlValtozo += "<li>" + LISTA[index] + "</li>"
    htmlValtozo += `<li> ${LISTA[index]} </li>` //alt gr+7
  }
   htmlValtozo += "</ul>"
   felsorolas.innerHTML += htmlValtozo */
}

function listabaKiir(LISTA) {
  let htmlValtozo = "<ul>";
  for (let index = 0; index < LISTA.length; index++) {
    //htmlValtozo += "<li>" + LISTA[index] + "</li>"
    htmlValtozo += `<li> ${LISTA[index]} </li>`; //alt gr+7
  }
  htmlValtozo += "</ul>";
  return htmlValtozo;
  //felsorolas.innerHTML += htmlValtozo
  //kiir(htmlValtozo, felsorolas);
}

function kiir(mit, hova) {
  hova.innerHTML += mit;
}

function klikkeles(event) {
  let tartalom = event.target.innerHTML;
  console.log(tartalom);
}

function listabaRendez(LISTA, felsorolas) {
  let htmlValtozo = "";
  for (let index = 0; index < LISTA.length; index++) {
    //htmlValtozo += "<li>" + LISTA[index] + "</li>"
    htmlValtozo += `<div><p> ${LISTA[index]} </p> <button>OK</button> </div>`; //alt gr+7
  }
  return htmlValtozo;
  //felsorolas.innerHTML += htmlValtozo
  //kiir(htmlValtozo, felsorolas);
}

function szinvaltas(event) {
  const ELEM = event.target.parentNode;
  console.log(ELEM);
  ELEM.classList.add("szin");
}
