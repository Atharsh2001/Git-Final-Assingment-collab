let n1 = 5;
let string = "";
for (let i = 1; i <= n1; i++) {
  for (let j = n1; j > i; j--) {
    string += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 1; i <= n1 - 1; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = (n1 - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);