window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.fa-bars').addEventListener('click',()=>{
        let obj = document.getElementsByClassName('menu')[0]
        obj.style.left = '0px'
        obj.style.animationName = 'slideIn'
    })

    document.querySelector('.page').addEventListener('click',(e)=>{
        let obj = document.getElementsByClassName('menu')[0]
        if (e.target.classList.value == 'menu' || e.target.classList.value == 'fa-solid fa-bars' || !obj.style[0]) {
            return
        }

        obj.style.animationName = 'slideOut'
        obj.style.left = '-200px'
    })
})
