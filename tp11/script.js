//1
/*var texto1 = document.getElementById('parrafo')
var text2 = 'beep';


 document.getElementById("beep").addEventListener("click", MostaraBeep);

function MostaraBeep() {
  document.getElementById("parrafo").innerHTML = text2;
    let element = document.body;
    element.classList.toggle("dark-mode");


}





//2

document.addEventListener('DOMContentLoaded', () => {
  
    const parrafos = document.querySelectorAll('p');

    
    parrafos.forEach(parrafo => {
       
        parrafo.addEventListener('click', () => {
            parrafo.classList.toggle('resaltado');
        });
    });
});


//3
const imagen = document.getElementById('miImagen');
    imagen.addEventListener('mouseover', () => {
        imagen.classList.add('oculto');
    });
    imagen.addEventListener('mouseout', () => {
        imagen.classList.remove('oculto');
    });


//4

buton1= document.getElementById("1")
buton2= document.getElementById("2")
buton3= document.getElementById("3")
imagen1= document.getElementById("m1")
imagen2= document.getElementById("m2")
imagen3= document.getElementById("m3")

buton1.addEventListener("click", () => {
    imagen1.classList.remove('oculto');
   
});
buton2.addEventListener("click", () => {
    imagen2.classList.remove('oculto');
  

});
buton3.addEventListener("click", () => {
    imagen3.classList.remove('oculto');

});


imagen1.addEventListener("click", () => {
    imagen1.classList.add('oculto');
});	

imagen2.addEventListener("click", () => {
    imagen2.classList.add('oculto');
});

imagen3.addEventListener("click", () => {
    imagen3.classList.add('oculto');
});



body.addEventListener('mousedown', () => {
    isMouseDown = true;
});

body.addEventListener('mouseup', () => {
    isMouseDown = false;
});

body.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        image.style.top = event.clientY + 'px';
        image.style.left = event.clientX + 'px';
    }
});




const colorinput = document.getElementById('colorfondo');

colorinput.addEventListener('input', () => {
    const color = colorinput.value;
    document.body.style.background = color;
});
*/


const car1 = document.getElementById('car1');
const car2 = document.getElementById('car2');
const car3 = document.getElementById('car3');
const car4 = document.getElementById('car4');

let car1Position = 0;
let car2Position = 0;
let car3Position = 0;
let car4Position = 0;

const track = document.getElementById('track');
const trackWidth = track.offsetWidth;
const carWidth = car1.offsetWidth;

window.addEventListener('keyup', (event) => {
    switch(event.key) {
        case 'a': // Mover el auto rojo
            car1Position += 50;
            car1.style.marginLeft = `${car1Position}px`;
            if (car1Position + carWidth >= trackWidth) {
                alert('¡El auto rojo ganó la carrera!');
                resetRace();
            }
            break;
        case 'l': // Mover el auto azul
            car2Position += 50;
            car2.style.marginLeft = `${car2Position}px`;
            if (car2Position + carWidth >= trackWidth) {
                alert('¡El auto azul ganó la carrera!');
                resetRace();
            }
            break;
        case 'r': // Mover el rayo
            car3Position += 100;
            car3.style.marginLeft = `${car3Position}px`;
            if (car3Position + carWidth >= trackWidth) {
                alert('¡El Rayo Maqueen ganó la carrera!');
                resetRace();
            }
            break;
        case 'g': // Mover el gordo
            car4Position += 10;
            car4.style.marginLeft = `${car4Position}px`;
            if (car4Position + carWidth >= trackWidth) {
                alert('¡El gordo jeropa ganó la carrera!');
                resetRace();
            }
            break;
    }
});

function resetRace() {
    car1Position = 0;
    car2Position = 0;
    car3Position = 0;
    car4Position = 0;
    car1.style.marginLeft = '0px';
    car2.style.marginLeft = '0px';
    car3.style.marginLeft = '0px';
    car4.style.marginLeft = '0px';
}












