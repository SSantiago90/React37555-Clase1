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

//dynamic Properties
{
  let nuevoNombreProducto = "Zapatillas Foo";
  let modificarId = "203";

  console.log(listaItems);
}
//Destructuring
{
  function mostrarDetalles(idItem) {
    let detalleItem = listaItems["id" + idItem];
  }
  mostrarDetalles(203);
}
