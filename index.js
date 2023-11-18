const slider = document.querySelector('.slider')
const sections = gsap.utils.toArray(".slider section")
const windies = gsap.utils.toArray(".wind-container img")

let tl = gsap.timeline({
    defaults: {
        ease: "none"
    },
    scrollTrigger: {
        trigger: slider,
        pin: true,
        scrub: 1, // This means a 2 second delay after the scrollbar has been moved
        end: () => "+=" + slider.offsetWidth
    }
})

tl.to(slider, {
    xPercent: -66
})

sections.forEach((stop, index) => {
    tl
        .from(stop.querySelector('.content'), {
            yPercent: -50,
            opacity: 0,
            scrollTrigger: {
                trigger: stop.querySelector('.content'),
                start: "left center",
                end: "center center",
                containerAnimation: tl,
                scrub: true
            }
        })
        .from(stop.querySelector('img'), {
            xPercent: -40,
            yPercent: 10,
            ease: 'elastic.out(1,2)',
            scrollTrigger: {
                trigger: stop.querySelector('img'),
                scrub: 1,
                containerAnimation: tl
            }
        }, "<")
})

windies.forEach((wind, i) => {
    gsap.from(wind, {
        xPercent: wind.dataset.distance,
        scrollTrigger: {
            scrub: 0.3
        }
    })
})

// Smooth Scroll (Lenis)
const lenis = new Lenis()

lenis.on('scroll', (e) => {
console.log(e)
})

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)