//Ej1 
/*
let uno=1;
let dos=uno; 
uno=5;

console.log(uno);
console.log(dos);

Antes de mostrar estos valores es claro que a la hora de declarar el segundo valor solo se va quedar con ese valor y no se actualizara 
esto debido que es un valor constante y no uno autmatico 
*

//ej2

alert ("bienvenido Usuario");
let Usuario=prompt("Ingrese su Nombre");
alert("bienveido " + Usuario + " a esta nueva pagina");
let edad= prompt("Ingrese su edad");
console.log (edad);
alert ("Oh con que tienes "+ edad);
alert("Okey " +Usuario + " de " + edad + "años Puedes Pasar");

//ej 3
let nombre = "Juan";
let edad = 30;
let cumpleaños = "12 de marzo";
let ciudad = "Buenos Aires";
let ocupacion = "Programador";
let pasatiempos = "jugar al fútbol y leer";


console.log("Hola, mi nombre es " + nombre + ", tengo " + edad + " años y nací el " + cumpleaños + "."+ " Vivo en la ciudad de " + ciudad + " y trabajo como " + ocupacion + "." +" Mis pasatiempos favoritos son " + pasatiempos + ".")


let uno=2 , Nombre="Juan", arroz="45", genero="Masculino";

console.log(uno);

console.log(Nombre);

console.log(arroz);

console.log(genero);

//ej 4



let palabra=prompt("Ingrese una palabra");
let num= palabra.length;
window.alert(""+ num);

//ej 5
let edad=prompt("Ingrese una edad");
alert(edad*365+" Su edad tiene esa cantidad de dias")

//ej 6
let num1

let num2
let resultado

num1=prompt("Ingrese un numero")

num2=prompt("Ingrese otro numero")

resultado=parseInt(num1)+parseInt(num2)

alert(resultado)


//ej 7 - ej 1

let edad = prompt("Ingrese su edad");
let MaxEdad = prompt("Ingrese su edad máxima");
let Snack = prompt("Ingrese su snack favorito");
let PorDia = prompt("Ingrese cuántos come por día");
let precio = prompt("Ingrese el precio de cada snack");

let Resto = MaxEdad - edad;
let Resultado = Resto * 365 * PorDia;
let PrecioTotal = precio * Resultado;

alert("Necesita " + Resultado + " de snacks para poder comer " + Snack + " por " + PorDia + " al día.");
alert("Costará $" + PrecioTotal + " en total.");

*/
//ej 7 -ej 2

let diasViaje = 7;
let presupuestoMaximo = 500;
let comida = "almuerzo y cena"; 
let comidasTotales = diasViaje * 2; 


let gastoPorComida = presupuestoMaximo / comidasTotales;


alert("Podés gastar $" + gastoPorComida + " en cada comida para que te alcance la plata durante los " + diasViaje + " días de viaje.");

