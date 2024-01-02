const zamin = document.getElementById('zamin')
const character = document.getElementById('character')

let zaminPosition = 1
const frames = ['./public/images/character1.png' , './public/images/character2.png' , './public/images/character3.png' , './public/images/character2.png']


setInterval(()=> {
    zamin.innerHTML += `<img src="public/images/zamin.jpg" alt="">`
}, 700)

setInterval(() => {
    zaminPosition = zaminPosition + 10
    zamin.style.left = `-${zaminPosition}px`
    
}, 20)

let index = 0
setInterval(()=> {
    if(index === frames.length - 1){
        index = 0 
    } else {
        index++
    }
    character.children[0].src = frames[index]
}, 130)