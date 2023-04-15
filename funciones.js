//¿QUÉ ES UNA FUNCIÓN? una función en cualquier lenguaje de programación es un bloque de instrucciones de código que nosotros podemos trabajar dentro de un scope (las llaves). Hay dos maneras de declararlas en JS: con la palabra reservada function y con la flecha que es algo bastante más nuevo.

// function sumar (parametro1, parametro2){
//     return parametro1 + parametro2
// }

// const resultadoSuma = sumar (15,22);
// console.log(resultadoSuma);

//FUNCIONES FLECHA: es otra forma de definir una función, es más resumida.

// const resultadoFlecha = (parametro1, parametro2) => {
//     return parametro1 + parametro2
// };
// console.log(resultadoFlecha(15,22));

//Si tenemos una única instrucción podemos optimizar este código

const resultadoFlecha2 = (parametro1, parametro2) => parametro1 + parametro2;
console.log(resultadoFlecha2(15,22));
