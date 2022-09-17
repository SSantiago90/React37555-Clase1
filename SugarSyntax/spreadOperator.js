// Spread en array
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(numbers[0], numbers[1], numbers[2]);

const moreNumbers = [10, 20, 30];

console.log("Concatenemos los arrays:", numbers, moreNumbers);

//Spread en object
let listaItems = {
  id001: {
    title: "Remera Foo",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  id102: {
    title: "Campera Bar",
    price: 800,
    description: "sed do eiusmod tempor incididunt ut labore",
  },
  id203: {
    title: "Pantalón Baz",
    price: 500,
    description: " Ut enim ad minim veniam, quis nostrud exercitation",
  },
};

let copiaItems = listaItems;
copiaItems.id999 = { title: "Otro producto" };
console.log(listaItems);
console.log("COPIA---------------------------\n", copiaItems);
