/* 1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
para valor 6
1
12
123
1234
12356

para valor 3
1
12
123 */

/* let numero = prompt("Ingrese un numero:");
console.log(numero);
let cadena="";
for (let index = 1; index <= numero; index++) {
   cadena+=index;
   console.log(cadena);
    
}
 */


/* 2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, f alse, true, 3, true]
Resultado: [3, true] */
/* const array1 = [4, 3, true, 'manzana'];
const array2 = ['pera', 3, false, true, 3, true];


function elementosCoincidentes(array1, array2){
    const conciden=[];
    for (const elemento of array1) {
       if(array2.find(elemnt => elemnt == elemento)!= undefined){
        conciden.push(elemento);
       }
        
    }
    console.log(conciden)
}

elementosCoincidentes(array1,array2); */


/* 
3)
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}
*/

class Producto {
    constructor(nombre, precio, unidades) {
        this.nombre = nombre;
        this.precio = precio;
        this.unidades = unidades;
    }
 
}

class Carrito {
    constructor() {
        this.montoTotal = 0;
        this.productos = [];
    }


    montoTotalCarrito(producto) {
        this.montoTotal += (producto.precio * producto.unidades);
    }

    agregarProducto(producto) {   
        this.productos.push(producto)
        this.montoTotalCarrito(producto);
    }

    mostrarCarrito() {
        let carrito = "Monto Total: $"+ this.montoTotal + "\n";
        console.log(carrito)
        this.productos.forEach(producto => console.log(producto.nombre));
       
    }

    controlProducto(producto){
    const productoExistente = this.productos.find(item => item.nombre == producto.nombre);
      if( productoExistente != undefined){
        console.log( "El producto "+ productoExistente.nombre +" ya existe y hay " + productoExistente.unidades +" unidades")
      } else{
        console.log("Se agrego " + producto.nombre + " al carrro de compras.")
        this.agregarProducto(producto)
      }
    }
}

const carrito = new Carrito();
const producto = new Producto('Azucar', 2, 5);
carrito.controlProducto(producto);
const producto2 = new Producto( 'Pan', 2, 25);
carrito.controlProducto(producto2);
const producto3 = new Producto('Azucar', 2, 5);
carrito.controlProducto(producto);
carrito.mostrarCarrito(); 
