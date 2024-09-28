const openMenu = document.querySelector('.toggle');
const closeMenu = document.querySelector('#close');
const menu = document.querySelector('.menu-section');

openMenu.addEventListener('click', () => {
    console.log("clico")
    menu.style.display = 'flex'

    menu.style.top = (menu.offsetWidth * -1) + 'px'
    openMenu.style.display = 'none'

    setTimeout(() => {
        menu.style.opacity = '1'    
        menu.style.top = '0'
    }, 100)
})

closeMenu.addEventListener('click', () => {
    console.log('asdsa')
    menu.style.opacity = '0'

    menu.style.top = (menu.offsetWidth * -1) + 'px'
    setTimeout(() => {
        menu.removeAttribute('style')
        openMenu.removeAttribute('style')
    }, 200)
})

