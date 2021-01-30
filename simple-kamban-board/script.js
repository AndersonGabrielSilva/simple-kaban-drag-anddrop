
/*Help */

function log (message){
    console.log('>' + message);
}

/*App*/
var cars = document.querySelectorAll('.card');
var dropzones = document.querySelectorAll('.dropzone');

//Eventos
// Dos cards
cars.forEach((card) =>{
    card.addEventListener('dragstart', dragstar)//Acionado no momento em que o irem começou a ser arrastado
    card.addEventListener('drag', drag)//durante o movimento
    card.addEventListener('dragend', dragend)//quando o elemento foi solto
})

function dragstar(event){
    /*Para cada drozone adicione a classe de realçar. */
    dropzones.forEach(dropzone => dropzone.classList.add('highligth'))

    //this = Este cartão
    this.classList.add('is-dragging')

    //atravez do event.target, é possivel recuperar informaçoes do elemento.
    event.dataTransfer.setData("text/plain",event.target.id)
    
    console.log('event.target.id',event.target.id);
}

function drag(){
    log('durante o movimento');
}

function dragend(){
    dropzones.forEach(dropzone => dropzone.classList.remove('highligth'))

    this.classList.remove('is-dragging')

}

//Local onde o card será solto
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)/*Entrou dentro da zona*/
    dropzone.addEventListener('dragover', dragover)/*Estou dentro da zona */
    dropzone.addEventListener('dragleave', dragleave)/*Sai da zona */
    dropzone.addEventListener('drop', drop)/*Soltei alguma coisa na zona */
});


function dragenter(){

}

function dragover(){
    this.classList.add('over');

    /*pega para mim o cartão que está em is-draggind, 
    ou seja o cartão que está sendo arrastadp*/
    const cardBeingDragged = document.querySelector('.is-dragging');

    this.appendChild(cardBeingDragged);
}

function dragleave(){
    this.classList.remove('over');
}

function drop(){
    this.classList.remove('over');
}