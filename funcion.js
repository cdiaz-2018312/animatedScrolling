const espacios = document.querySelectorAll('.deslizar');

function animacion() {
    const triggerBottom = window.innerHeight / 5*4;
    espacios.forEach (espacio => {
        const espacioTop = espacio.getBoundingClientRect().top

        if(espacioTop < triggerBottom){
            espacio.classList.add('on')     
        }else{
            espacio.classList.remove('on')
        }
    })
}

window.addEventListener('scroll',animacion);

animacion();