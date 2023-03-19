window.addEventListener('scroll', () => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`);
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.smooth-wrapper',
	content: '.smooth-content',
	smoothTouch: 0.2,
})
