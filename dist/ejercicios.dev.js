"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Producto = function Producto(nombre, precio, unidades) {
  _classCallCheck(this, Producto);

  this.nombre = nombre;
  this.precio = precio;
  this.unidades = unidades;
};

var Carrito =
/*#__PURE__*/
function () {
  function Carrito() {
    _classCallCheck(this, Carrito);

    this.montoTotal = 10;
    this.productos = ["Leche"];
  }

  _createClass(Carrito, [{
    key: "agregarProducto",
    value: function agregarProducto(producto) {
      this.productos.push(producto.nombre);
      this.montoTotal(producto);
    }
  }, {
    key: "mostrarCarrito",
    value: function mostrarCarrito() {
      var carrito = this.montoTotal();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.productos()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _producto = _step.value;
          carrito += _producto.nombre;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return carrito;
    }
  }, {
    key: "montoTotal",
    set: function set(producto) {
      this.montoTotal += producto.precio * producto.unidades;
    },
    get: function get() {
      return this.montoTotal;
    }
  }, {
    key: "productos",
    get: function get() {
      return this.productos;
    }
  }]);

  return Carrito;
}();

var carrito = new Carrito();
var producto = new Producto('Azucar', 5, 2);
carrito.agregarProducto(producto);
console.log(carrito.mostrarCarrito);