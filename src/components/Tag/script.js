let input = document.querySelector('#tag-input');
let form = document.querySelector('.input-form');
let tagInput = document.querySelector('.component__tag-input');

const addTag = (text) => {
	if (!text) return;
	let tag = document.createElement('div');
	tag.className = 'tag';
	tag.innerHTML = `
	 ${text}
		<button class="icon icon-delete">
			<svg height="16" width="16">
				<use href="#delete-icon" />
			</svg>	
		</button>
`.trim();
	form.before(tag);
	form.reset();
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	addTag(input.value);
});

input.addEventListener('keyup', (e) => {
	if (e.code === 'Comma') addTag(input.value.slice(0, -1));
	else if (e.code === 'Backspace')
		e.target.parentNode?.previousElementSibling?.remove();
});

tagInput.addEventListener('click', (e) => {
	if (!e.target.classList.contains('icon-delete')) return;
	e.target.parentNode.remove();
});
