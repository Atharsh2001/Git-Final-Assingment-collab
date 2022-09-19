var n = 6;
var str = "";
for (let i = n / 2; i < n; i += 2) {
  for (let j = 1; j < n - i; j += 2) {
    str += " ";
  }
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  for (let j = 1; j < n - i + 1; j++) {
    str += " ";
  }
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  str += "\n";
}
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      str += " ";
    }
    for (let k = 0; k < 2 * (n-i) - 1; k++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);