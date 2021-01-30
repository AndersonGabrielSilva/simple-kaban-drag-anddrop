
/*Help */

function log (message){
    console.log('>' + message);
}

var cars = document.querySelectorAll('.card');

//Eventos
cars.forEach((card) =>{
    card.addEventListener('dragstart', dragstar)//acionado no momento em que o irem começou a ser arrastado
    card.addEventListener('drag', drag)//durante o movimento
    card.addEventListener('dragend', dragend)//quando o elemento foi solto
})

function dragstar(){
    log('Inicio evento');
}

function drag(){
    log('durante o movimento');
}

function dragend(){
    log('fim do movimento');
}