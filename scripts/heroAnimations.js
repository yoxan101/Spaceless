/// Book Animation ////////////

gsap.fromTo('.book',{
    scale: 0,
    y: "-50px",
    x: '50%',
},{
    scale: 1,
    y: 0,
    x: 0,
    stagger: 0.3,
})

//////////////////////////////

//// Animation for blue window onload //////

const tlBlueWindow = gsap.timeline({delay: 0.35})

tlBlueWindow.fromTo('.blueWindow', {
    scale: 0.2,
    x: 50,
    y: 50,
    opacity: 0,
}, {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
})

tlBlueWindow.fromTo('.blueWindowShadow', {
    opacity: 0,
    scale: 0.2,
    x: 50,
    y: 50,
}, {
    opacity: 0.15,
    scale: 1,
    x: 0,
    y: 0,
}, '-=0.5')

tlBlueWindow.fromTo('.blueWindowRect',{
    scaleX: 0,
},{
    scaleX: 1,
    stagger: 0.4,
})

tlBlueWindow.fromTo('.blueWindowLine', {
    scaleX: 0,
}, {
    scaleX: 1,
    stagger: 0.2,
}, '-=0.9')

///////////////////////////////////////////////

////// Animation for Window with code //////////////

const tlCodeWindow = gsap.timeline()

tlCodeWindow.fromTo('.codeWindow', {
    scale: 0.2,
    x: 65,
    y: 50,
},{
    scale: 1,
    x: 0,
    y: 0,
})

tlCodeWindow.fromTo('.codeWindowShadow', {
    opacity: 0,
    scale: 0.2,
    x: 65,
    y: 50,
},{
    opacity: 0.15,
    scale: 1,
    x: 0,
    y: 0,
}, '-=0.5')

tlCodeWindow.fromTo('.codeWindowCircle', {
    scale: 0,
    x: '4px',
    y: '4px',
},{
    scale: 1,
    x: 0,
    y: 0,
    stagger: 0.15,
})

tlCodeWindow.fromTo('.codeWindowLine', {
    scaleX: 0,
},{
    scaleX: 1,
    stagger: 0.025,
}, "-=0.6")

/////////////////////////////////////////////////