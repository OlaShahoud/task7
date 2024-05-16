const ImgGold = document.querySelector('.gold')
const ImgBlue = document.querySelector('.blue')
const ImgGray = document.querySelector('.gray')
const ImgPink = document.querySelector('.pink')
const ImgRed = document.querySelector('.red')
const text1 = document.querySelector('.text1')
const text2 = document.querySelector('.text2')
const text3 = document.querySelector('.text3')
let background1 = document.querySelector('.tas1')
let Img = document.querySelector('.img')
const icon = document.querySelector('.fa-moon')
let iconSun = document.querySelector('.fa-sun')
let background2 = document.querySelector('.container-t')
let textColor = document.querySelector('.tas2')
    /*let drop1 = document.querySelector('.down__icon1')
    let drop2 = document.querySelector('.down__icon2')
    let drop3 = document.querySelector('.down__icon3')
    let drop33 = document.querySelector('.down__icon33')
    let drop11 = document.querySelector('.down__icon11')
    let drop22 = document.querySelector('.down__icon22')*/
    /*const star1 = document.querySelector('.star__icon1')
    const star2 = document.querySelector('.star__icon2')
    const star3 = document.querySelector('.star__icon3')
    const star4 = document.querySelector('.star__icon4')
    const star5 = document.querySelector('.star__icon5')*/
const star = document.querySelectorAll('.fa-star')
const drop = document.querySelectorAll('.fa-chevron-down')
const drop2 = document.querySelectorAll('.fa-angle-up')

/*task 1 js*/


ImgGold.addEventListener('click', (event) => {
    background1.style.backgroundColor = 'red'
    Img.src = "./assets/img/iphone-gold.jpg"


})
ImgBlue.addEventListener('click', (event) => {
    background1.style.backgroundColor = 'pink'
    Img.src = "./assets/img/iphone-blue.jpg"


})
ImgGray.addEventListener('click', (event) => {
    background1.style.backgroundColor = 'blue'
    Img.src = "./assets/img/iphone-gray.jpg"


})
ImgPink.addEventListener('click', (event) => {
    background1.style.backgroundColor = 'black'
    Img.src = "./assets/img/iphone-bink.jpg"


})
ImgRed.addEventListener('click', (event) => {
    background1.style.backgroundColor = 'gold'
    Img.src = "./assets/img/iphone-red.jpg"


})

/*task2 js*/
icon.addEventListener('click', (event) => {
    iconSun.style.color = 'white'
    icon.style.color = 'white'
    background2.style.backgroundColor = 'black'
    textColor.style.color = 'white'
    iconSun.style.display = 'block'
    icon.style.display = 'none'
})
iconSun.addEventListener('click', (event) => {
    iconSun.style.color = 'black'
    icon.style.color = 'black'
    background2.style.backgroundColor = 'white'
    textColor.style.color = 'black'
    icon.style.display = 'block'
    iconSun.style.display = 'none'
})

/*task 3 js */
/*drop1.addEventListener('click', (event) => {
    text1.innerHTML = 'How many team mambers'
        //drop1.classList.remove('fa-chevron-down')
        //drop1.classList.add('fa-angle-up')
    drop11.style.display = 'block'
    drop1.style.display = 'none'
})
drop11.addEventListener('click', (event) => {
    text1.innerHTML = 'How many team mambers can i invite?'
        //drop3.classList.remove('fa-chevron-down')
        //drop3.classList.add('fa-angle-up')
    drop11.style.display = 'none'
    drop1.style.display = 'block'
})
drop2.addEventListener('click', (event) => {
    text2.innerHTML = 'what in the maximum'
        //drop2.classList.remove('fa-chevron-down')
        //drop2.classList.add('fa-angle-up')
    drop22.style.display = 'block'
    drop2.style.display = 'none'
})
drop22.addEventListener('click', (event) => {
    text2.innerHTML = 'what in the maximum file uplood size?'
        //drop3.classList.remove('fa-chevron-down')
        //drop3.classList.add('fa-angle-up')
    drop22.style.display = 'none'
    drop2.style.display = 'block'
})
drop3.addEventListener('click', (event) => {
    text3.innerHTML = 'How do I reset'
        //drop3.classList.remove('fa-chevron-down')
        //drop3.classList.add('fa-angle-up')
    drop33.style.display = 'block'
    drop3.style.display = 'none'
})
drop33.addEventListener('click', (event) => {
    text3.innerHTML = 'How do I reset my password?'
        //drop3.classList.remove('fa-chevron-down')
        //drop3.classList.add('fa-angle-up')
    drop33.style.display = 'none'
    drop3.style.display = 'block'
})*/
drop.forEach((drop1, index) => {
    drop1.addEventListener('click', () => {
        //console.log(drop[index].className)

        //drop[index].classList.add('fa-angle-up')
        //drop[index].classList.remove('fa-chevron-down')
        //console.log(drop[index].className)
        if (index == 0) {
            text1.innerHTML = 'How many team mambers'
        }
        if (index == 1) {
            text2.innerHTML = 'what in the maximum'
        }
        if (index == 2) {
            text3.innerHTML = 'How do I reset'
        }
        drop2[index].style.display = 'block'
        drop[index].style.display = 'none'

    })
})
drop2.forEach((drop1, index, ) => {
        drop1.addEventListener('click', () => {
            if (index == 0) {
                text1.innerHTML = 'How many team mambers can i invite?'
            }
            if (index == 1) {
                text2.innerHTML = 'what in the maximum file uplood size?'
            }
            if (index == 2) {
                text3.innerHTML = 'How do I reset my password?'
            }
            drop[index].style.display = 'block'
            drop2[index].style.display = 'none'
        })
    })
    /*task 4 js */

/*star1.addEventListener('click', (event) => {
    star1.style.color = 'yellow'
})
star2.addEventListener('click', (event) => {
    star1.style.color = 'yellow'
    star2.style.color = 'yellow'
})
star3.addEventListener('click', (event) => {
    star1.style.color = 'yellow'
    star2.style.color = 'yellow'
    star3.style.color = 'yellow'
})
star4.addEventListener('click', (event) => {
    star1.style.color = 'yellow'
    star2.style.color = 'yellow'
    star3.style.color = 'yellow'
    star4.style.color = 'yellow'
})
star5.addEventListener('click', (event) => {
    star1.style.color = 'yellow'
    star2.style.color = 'yellow'
    star3.style.color = 'yellow'
    star4.style.color = 'yellow'
    star5.style.color = 'yellow'
})*/

star.forEach((star1, index) => {
    star1.addEventListener('click', () => {
        for (let i = 0; i <= index; i++) {
            star[i].style.color = 'yellow'
        }
    })
})