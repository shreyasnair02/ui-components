import projects from './projects.js';

let input = document.querySelector('.component-section__search');
let componentWrapper = document.querySelector('.component-section__components');
let results = projects;

const render = (results) => {
	componentWrapper.innerHTML = '';
	results.forEach((result) => componentWrapper.append(result.elem()));
};

render(results);

input.addEventListener('input', () => {
	if (input.value.trim().length === 0) results = projects;
	else
		results = projects.filter((project) =>
			project.name.toLowerCase().includes(input.value.toLowerCase())
		);
	render(results);
});

let target = document.querySelector('.component-section__header')

let options = {
	rootMargin: '0px',
	threshold: 1
}

let observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		console.log(entry.isIntersecting, entry.intersectionRatio);
		console.log(entry.boundingClientRect.top);
	})
}, options)

observer.observe(target);