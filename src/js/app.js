document.addEventListener('DOMContentLoaded', function(){
    navFija();
    smoothScroll();
   
})


function navFija(){

    const barra = document.querySelector('.header');
    
    const observar = new IntersectionObserver( function(entries){
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    })


    observar.observe(document.querySelector('.informacion'))
}

function smoothScroll(){

    const enlaces = document.querySelectorAll('.navegacion a')
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();


            const scroll = document.querySelector(e.target.attributes.href.value)

            scroll.scrollIntoView({
                behavior: 'smooth'
            })
        })
    });
}









































// document.addEventListener('DOMContentLoaded', function(){
//     scrollNav();

//     navFija();
// })

// function navFija(){

//     const barra = document.querySelector('.header');

//     const observer = new IntersectionObserver( function(entries){
//         if (entries[0].isIntersecting) {
//             barra.classList.remove('fijo');
//         } else {
//             barra.classList.add('fijo');
//         }
//     })

//     observer.observe(document.querySelector('.video'))
// }

// function scrollNav(){

//     const enlaces = document.querySelectorAll('.navegacion a')

//     enlaces.forEach(enlace => {
        
//         enlace.addEventListener('click', function(e){
            
//             e.preventDefault();

//             const seccion = document.querySelector(e.target.attributes.href.value);

//             seccion.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         })

//     });

// }