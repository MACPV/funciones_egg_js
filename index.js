/*
function calVel(distancia, tempo){
   // let distancia = 10;
  //  let tempo = 10;
    let vel = distancia / tempo;
    alert(vel);
    return vel
}
calVel(50,7);
calVel(100,4);
calVel(7,3); 
const calcularVelocidad = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
        return velocidad
    }
    

const velocidad1 = calcularVelocidad(10,2);
console.log("La velocidad de Juana es " + velocidad1);
const velocidad2 = calcularVelocidad(20,2);
console.log("La velocidad de Juana es " + velocidad2);

const velocidad3 = calcularVelocidad(30,2);
console.log("La velocidad de Juana es " + velocidad3);
*/


let totalApagar = 0; // Mueva esto fuera de la función

function comprar() {
  const nombre = prompt("¿Qué producto desea llevar?");
  const cantidad = Number(prompt("¿Cuántas unidades?"));
  const precio = Number(prompt("¿Cuánto sale cada unidad?"));
  const subtotal = cantidad * precio;
  totalApagar += subtotal; // Acumule subtotal en totalApagar
  console.log(`El subtotal para ${nombre} es: ${subtotal}`);
  return subtotal; // Devuelva el subtotal para cada compra
}

const total1 = comprar();
const total2 = comprar();
const total3 = comprar();

console.log(`El total de todas las compras es: ${totalApagar}`); // Muestre el total final
