let menu = document.querySelector('.menu');
document.addEventListener('contextmenu', (e) => {
	e.preventDefault();
	menu.style.display = 'flex';
	var width =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;
	var height =
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;
	let menuDimensions = menu.getBoundingClientRect();
	let menuW = menuDimensions.width,
		menuH = menuDimensions.height;
	let pos = {
		top: e.clientY,
		left: e.clientX,
		right: 'auto',
	};
	let thresholdW = menuW + e.clientX >= parseInt(width);
	let thresholdWOptions = menuW * 2 + e.clientX >= parseInt(width);
	let thresholdH = menuH + e.clientY >= parseInt(height);
	if (thresholdW) {
		pos = {
			top: e.clientY,
			right: 0,
			left: 'auto',
		};
	} else {
		menu.className = 'menu left-anim';
	}
	if (thresholdWOptions) {
		menu.className = 'menu right-anim';
	}
	if (thresholdH) {
		pos = {
			top: e.clientY - menuH,
			left: e.clientX,
			right: 'auto',
		};
	}
	if (thresholdH && thresholdW) {
		pos = {
			top: e.clientY - menuH,
			left: 'auto',
			right: 0,
		};
	}
	menu.setAttribute(
		'style',
		`display: flex; top: ${pos.top}px; left: ${pos.left}px; right: ${pos.right}px`
	);
});

document.addEventListener('click', (e) => {
	if (menu.contains(e.target)) return;
	menu.style.display = 'none';
});
