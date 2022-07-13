let menu = document.querySelector('.menu');
document.addEventListener('contextmenu', (e) => {
	e.preventDefault();
	menu.style.display = 'flex';
	menu.setAttribute(
		'style',
		`display: flex; top: ${e.clientY}px; left: ${e.clientX}px`
	);
	console.log(e);
});

document.addEventListener('click', (e) => {
	if (menu.contains(e.target)) return;
	menu.style.display = 'none';
});
