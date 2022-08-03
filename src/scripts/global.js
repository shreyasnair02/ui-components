import projects from './projects.js';

let input = document.querySelector('.component-section__search');
let componentWrapper = document.querySelector('.component-section__components');
let results = projects;

console.log(componentWrapper)

results.forEach((result) => componentWrapper.append(result.elem()));

input.addEventListener('keyup', () => {
	if (input.length === 0) {
		results = projects;
	} else {
		results = projects.filter((project) => project.name.includes(input.value));
	}
});

console.log(results);
