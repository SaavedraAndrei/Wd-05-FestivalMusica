
document.addEventListener('DOMContentLoaded', function(e){
    crearGaleria();
})

function crearGaleria(){

    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        
        const img = document.createElement('IMG');
        img.src = `build/img/thumb/${i}.webp`
        

        // MOSTRAR IMAGEN
        img.dataset.imagenId = i;
        img.onclick = mostrarImagen;

        
        
        const lista = document.createElement('LI');
        lista.appendChild(img);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    
    const id = parseInt(e.target.dataset.imagenId);

    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`  

    const overlay = document.createElement('DIV');
    overlay.classList.add('overlay');
    overlay.appendChild(imagen);

    const body = document.querySelector('body')
    body.appendChild(overlay)

    const btnX = document.createElement('P');
    btnX.textContent = 'X';
    btnX.classList.add('btn-cerrar');

    btnX.onclick = function(){
        overlay.remove();
    }

    overlay.onclick = function(){
        overlay.remove();
    }

    overlay.appendChild(btnX);
    
}