const tiles = document.querySelectorAll('.tile')

gsap.registerPlugin(ScrollTrigger);

////// Animation for tile with "Blog" /////////////////////

const timeLineTile1 = gsap.timeline({
    defaults: {
        duration: 0.35,
    },
    scrollTrigger: {
        trigger: tiles[0],
        start: 'top 80%',
    }
})

if(window.innerWidth > 768){
    timeLineTile1.fromTo(tiles[0], {
        x: '-120px',
        opacity: 0,
    },{
        duration: 0.5,
        opacity: 1,
        x: '-100px',
    })
} else {
    timeLineTile1.fromTo(tiles[0], {
        y: '50px',
        opacity: 0,
        x: 0,
    },{
        duration: 0.5,
        opacity: 1,
        x: 0,
        y: '0',
    })
}

timeLineTile1.fromTo('.letter1', {
    scale: 0,
    x: 80,
    y: 70,
},{
    x: 0,
    y: 0,
    scale: 1,
    stagger: 0.1,
}, '-=0.5')

timeLineTile1.fromTo('.letterLine', {
    scale: 0,
    x: -100,
}, {
    x: 0,
    scale: 1,
}, '-=0.5')

timeLineTile1.fromTo('.letter2', {
    scale: 0,
    rotate: '-50deg',
}, {
    rotate: 0,
    scale: 1,
}, '-=0.25')

timeLineTile1.fromTo('.letter3', {
    scale: 0,
    x: -20,
    rotate: '50deg',
}, {
    x: 0,
    rotate: 0,
    scale: 1,
}, '-=0.125')

timeLineTile1.fromTo('.letter3Lines', {
    scaleX: 0,
}, {
    scaleX: 1,
    stagger: 0.05,
})

timeLineTile1.fromTo('.letter3Dot', {
    scale: 0,
    x: '10px',
    y: '15px',
}, {
    x: 0,
    y: 0,
    scale: 1,
}, '-=0.75')

timeLineTile1.fromTo('.letter4', {
    scale: 0,
    x: 100,
    y: 100,
}, {
    x: 0,
    y: 0,
    scale: 1,
}, '-=1.5')

timeLineTile1.fromTo('.letter5', {
    scale: 0,
    x: 100,
    y: 100,
}, {
    x: 0,
    y: 0,
    scale: 1,
}, '-=1.25')

timeLineTile1.fromTo('.cat', {
    scale: 0,
    x: 100,
    y: 100,
}, {
    x: 0,
    y: 0,
    scale: 1,
}, '-=1')

timeLineTile1.fromTo('.letter6', {
    scale: 0,
    x: 100,
    y: 100,
}, {
    x: 0,
    y: 0,
    scale: 1,
}, '-=1')

timeLineTile1.fromTo('.letter6lines', {
    scaleX: 0,
}, {
    scaleX: 1,
}, '-=0.8')

timeLineTile1.fromTo('.letter6dots', {
    scale: 0,
    x: '20px',
    y: '10px',
}, {
    x: 0,
    y: 0,
    scale: 1,
    stagger: 0.1,
}, '-=0.6')

////////////////////////////////////////////////////////////

///////////// Second Tile Animations ///////////////////////

const timeLineTile2 = gsap.timeline({
    defaults: {
        duration: 0.4,
    },
    scrollTrigger: {
        trigger: tiles[1],
        start: 'top 80%',
    }
})

if(window.innerWidth > 768){
    timeLineTile2.fromTo(tiles[1], {
        x: '120px',
        opacity: 0,
    },{
        duration: 0.5,
        opacity: 1,
        x: '100px',
    })
} else {
    timeLineTile2.fromTo(tiles[1], {
        y: '50px',
        x: 0,
        opacity: 0,
    },{
        duration: 0.5,
        opacity: 1,
        x: '0',
        y: 0,
    })
}


timeLineTile2.fromTo('.leaf1',{
    scale: 0,
    x: 300,
    y: -100,
    rotate: -50,
    opacity: 0,
},{
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
}, '-=0.5')

timeLineTile2.fromTo('.leaf2',{
    scale: 0,
    x: 300,
    y: 100,
    rotate: 50,
    opacity: 0,
},{
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
}, '-=0.25')

timeLineTile2.fromTo('.graph', {
    scaleX: 0,
},{
    scaleX: 1,
    stagger: 0.1,
})

timeLineTile2.fromTo('.cloud', {
    scale: 0,
    x: 70,
    y: 70,
},{
    x: 0,
    y: 0,
    scale: 1,
    stagger: 0.1,
}, '-=0.8')
////////////////////////////////////////////////////////////
//////////// Third tile Animations /////////////////////////
const timeLineTile3 = gsap.timeline({
    defaults: {
        duration: 0.4,
    },
    scrollTrigger: {
        trigger: tiles[2],
        start: 'top 80%',
    }
})

if(window.innerWidth > 768){
    timeLineTile3.fromTo(tiles[2], {
        x: '-120px',
        opacity: 0,
    },{
        duration: 0.5,
        opacity: 1,
        x: '-100px',
    })
} else {
    timeLineTile3.fromTo(tiles[2], {
        y: '50px',
        x: 0,
        opacity: 0,
    },{
        duration: 0.5,
        opacity: 1,
        x: '0',
        y: 0,
    })
}

timeLineTile3.fromTo('.building', 0.3,{
    opacity: 0,
    scaleY: 0,
    y: 200
}, {
    y: 0,
    scaleY: 1,
    opacity: 1,
    stagger: 0.1
}, '-=0.5')