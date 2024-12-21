let title=document.querySelector('.title')




document.addEventListener('keypress', function (event) {
    event.preventDefault
    appendValueEvent(event) 
    let keyElement = event.key.toUpperCase()
    let keyElementId = document.getElementById(keyElement)

    keyElementId.classList.add('hit')
    keyElementId.addEventListener('animationend', function () {
        keyElementId.classList.remove('hit')

    })
    

})

function appendValueEvent(event){
title.innerHTML+=event.key
 
if(event.key==8){
    title.innerHTML=title.innerHTML.slice(0,-1)
}
}