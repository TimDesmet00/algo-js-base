let min = prompt("donnez moi  un nombre min");
let max = prompt("donnez moi un nombre maximum");
let current = prompt("donnez moi un chiffre entre les deux");

if (isNaN(min && max && current)) {
  alert("vous n'avez pas entrer des nombres");
} else if (current >= min && current <= max) {
  alert("Bien joué" + current);
  console.log("Bien joué" + current);
} else {
  alert(" je pense que vous n'avez pas comprit la question ");
}
