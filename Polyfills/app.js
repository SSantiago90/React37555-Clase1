let num1 = 5;
let num2 = 10;

if (userAgent !== "ie") {
  alert(multiplicar(num1, num2));
} else {
  let total = 0;
  for (var i = 0; i < num1; i++) {
    total += suma(total, num2);
  }
  alert(total);
}
