document.addEventListener('mousemove', (evt) => {
	document.body.style.cssText = `--move-x: ${evt.clientX}px; --move-y: ${evt.clientY}px`;
})
