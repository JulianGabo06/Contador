
let contador = 0;

const valor = document.querySelector('#Valor')
const botones = document.querySelectorAll('.Boton')
botones.forEach(boton=>{
    boton.addEventListener('click', function(e){
        const estilos= e.currentTarget.classList;

        if(estilos.contains('Disminuir')){
            contador--;
        }
        else if(estilos.contains('Aumentar')){
            contador++;
        }
        else{
            contador=0
        }
            valor.textContent=contador;


        if(contador>0){
            valor.style.color='#fff'
        }
        else if(contador<0){
            valor.style.color='#ba215a'
        }
        else{
            valor.style.color='#000'
        }
    })
})