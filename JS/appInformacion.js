const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
    pregunta.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('activa');

        const respuesta = pregunta.querySelector('.respuesta');
        const alturaRespuesta = respuesta.scrollHeight;

        if(!respuesta.style.maxHeight){
            respuesta.style.maxHeight = alturaRespuesta + 'px';
        } else {
            respuesta.style.maxHeight = null;
        }
    })
})