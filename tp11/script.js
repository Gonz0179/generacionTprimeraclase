
const parrafos = document.querySelectorAll('p');

        // Usar un for loop para recorrer todos los párrafos
        for (let i = 0; i < parrafos.length; i++) {
            // Agregar un eventListener para que al hacer click se añada o quite la clase "resaltado"
            parrafos[i].addEventListener('click', function() {
                this.classList.toggle('resaltado');
            });
        }