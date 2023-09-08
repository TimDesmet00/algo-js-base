let n = parseInt(prompt("entrez un nombre, n:"));
let add = 0;

if (!isNaN(n) && n > 0) {
  for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("entrez nombre"));
    if (!isNaN(num)) {
      add += num;
      console.log(add);
    }
  }
}
