import projects from './projects.js';

let input = document.querySelector('.component-section__search');
let componentWrapper = document.querySelector('.component-section__components');
let results = projects;

console.log(componentWrapper);

const render = (results) => {
	componentWrapper.innerHTML = '';
	results.forEach((result) => componentWrapper.append(result.elem()));
}

render(results);

input.addEventListener('keyup', () => {
	if (input.value.length === 0) {
		results = projects;
		render(results);
	} else {
		results = projects.filter((project) =>
			project.name.toLowerCase().includes(input.value.toLowerCase())
		);
		render(results);
	}
});

console.log(input);
