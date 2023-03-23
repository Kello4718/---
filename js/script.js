document.addEventListener('mousemove', (evt) => {
	document.body.style.cssText = `--move-x: ${evt.clientX}px; --move-y: ${evt.clientY}px`;
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)
const smoother = ScrollSmoother.create({
	wrapper: '.smooth-wrapper',
	content: '.smooth-content',
	smooth: 1.2,
	effects: true,
})

const title = new SplitText('.preview__pretitle', {type: 'words, chars'});
const subtitle = new SplitText('.preview__title', {type: 'words, chars'});

const titleChars = title.chars;
const subtitleChars = subtitle.chars;

titleChars.forEach((char, i) => {
	smoother.effects(char, { speed: 1, lag: (i + 1) * 0.3 });
});

subtitleChars.forEach((char, i) => {
	smoother.effects(char, { speed: 1, lag: (i + 1) * 0.3 });
});
