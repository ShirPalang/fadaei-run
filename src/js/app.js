const zamin = document.getElementById('zamin')
const character = document.getElementById('character')

let zaminPosition = 1
const frames = ['./public/images/character1.png', './public/images/character2.png', './public/images/character3.png', './public/images/character2.png']

let isJump = false


setInterval(() => {
    zamin.innerHTML += `<img src="public/images/zamin.jpg" alt="">`
}, 600)

setInterval(() => {
    zaminPosition = zaminPosition + 10
    zamin.style.left = `-${zaminPosition}px`

}, 20)

let index = 0

setInterval(() => {
    if (index === frames.length - 1) {
        index = 0
    } else {
        index++
    }
    character.children[0].src = frames[index]
}, 130)

let jumpPosition = 153
let isUp = false

document.body.addEventListener('keydown', e => {

    if (e.key === ' ' && !isJump) {
        jumpHandler(jumpPosition, isUp)
    }

    if (e.key === ' ') {
        isJump = true
    }

    setTimeout(() => {
        isJump = false
    }, 1100);

})

document.body.addEventListener('touchstart' , ()=> {
    jumpHandler(jumpPosition, isUp)

    isJump = true

    setTimeout(() => {
        isJump = false
    }, 1100);
})

const jumpHandler = (position , isUp) => {
    const jumpDown = interval => {
        let toDown = setInterval(() => {
            if (position === 300) {
                clearInterval(interval)
                isUp = true
            }

            if (isUp && position !== 153) {
                position -= 1
                character.style.bottom = `${position}px`
            }

            if (position === 153) {
                clearInterval(toDown)
            }
        }, 1)
    }

    let jumpUp = setInterval(() => {
        if (position !== 300) {
            position += 1
            character.style.bottom = `${position}px`
            return false
        }
    }, 1)

    jumpDown(jumpUp)
}