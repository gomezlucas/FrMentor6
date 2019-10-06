 
 eventListeners();
//Defino event Listener
function eventListeners(){
let ui = new UI()
document.querySelector('.navbar-bars').addEventListener("click", function(){
    ui.navbarClick();
})

}

//Defino funcion constructore
function UI(){};

//defino prototipo  UI para el click en navbar button
UI.prototype.navbarClick = function(){
    let list = document.querySelector(".navbar-links")
    let icon = document.querySelector(".navbar-bars")
    console.log(icon)

     if (list.classList.contains('navbar-links__show')){
        list.classList.remove('navbar-links__show')
        icon.classList.remove('change')
    }else{
        list.classList.add('navbar-links__show')
        icon.classList.add('change')
    }
 }
