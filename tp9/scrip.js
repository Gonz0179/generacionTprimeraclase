
//ej 1
/*function test1 (x, y){
    return y-x
}
console.log (test1(10,40))
*/
//El resultado que se muestra es 30

//ej2
/*function test2(x, y) {
    return x * 2
    console.log(x)
    return x / 2
  }
  
  console.log(test2(10))
  */

  //ej3  1)

  /*function triplicador (x){
    return (x*3)


  }
  let num = prompt ("ingrese un numero")
  
  alert(triplicador(num))

function Multiplicacion (x,y){
    return (x*y)
  }
  let num1 = prompt ("ingrese un numero")
  let num2 = prompt ("ingrese un numero")
alert(Multiplicacion(num1,num2))
*/
// 3) 
/*
function division (x, y){
    
    return(x/y)
}
let num1 = prompt ("ingrese un numero")
let num2 = prompt ("ingrese un numero")
alert(division(num1, num2))



//4 

function resto(x,y){
  return (x%y)
}
let num1 = prompt ("ingrese un numero")
let num2 = prompt ("ingrese un numero")
alert("El resultado es: " + resto(num1, num2))

//5

function Multiplicacion (x,y){
    return (x*y)
  }
  
function division (x, y){  
  return(x/y)
}
function resto(x,y){
  return (x%y)
}

function raro (x){
  Multiplicacion(x,3)
  Multiplicacion(x,12)
  division (x,12);
  resto(x,3)
  return(x)
}

alert(raro(5))

*/
//7
function fizzBuzz2(palabra1, palabra2, hasta, fizzNum, buzzNum) {
    let resultado = [];
    
    for (let i = 1; i <= hasta; i++) {
        if (i % fizzNum === 0 && i % buzzNum === 0) {
            resultado.push(palabra1 + palabra2);
        } else if (i % fizzNum === 0) {
            resultado.push(palabra1);
        } else if (i % buzzNum === 0) {
            resultado.push(palabra2);
        } else {
            resultado.push(i);
        }
    }
    
    return resultado.join(", ");
}

console.log(fizzBuzz2("papa", "Caliente", 30, 3, 5));