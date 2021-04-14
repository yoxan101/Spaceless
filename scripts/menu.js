const menuBtn = document.querySelector('.menuBtn')
const menuElements = document.querySelectorAll('.menuElement')

const tlMenu = gsap.timeline({
    default: {
        ease: 'power4inOut',
    },
    paused: true,
    reversed: true,
})

tlMenu.to('.topLine', 0.3,{

    y: '160%',

}).to('.topLine', 0.3,{

    rotate: '-45deg',

},'-=0.1').to('.bott', 0.3,{

    y: '-220%',
    width:'40px',

}, '-=0.4').to('.bott', 0.3,{
    
    rotate: '45deg'

}, '-=0.3').to('.menu', 0.4,{

    x: '0'

}, '-=0.6').to('.menuElement', 0.4,{

    y: 0,
    scale: 1,
    opacity: 1,
    stagger: 0.2,

}, '-=0.6')


menuBtn.onclick = () =>{
    if(tlMenu.reversed()){
        tlMenu.play() 
    } else {
        tlMenu.reverse()
    }
}

menuElements.forEach(menuElement => {
    menuElement.onclick = () =>{
        tlMenu.reverse()
    }
})

document.querySelector('.logoContainer').onclick = () =>{
    tlMenu.reverse()
}