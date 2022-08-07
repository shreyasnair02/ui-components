// a variable for storing project data

// folder name and value added here should match
let projectArr = [
	'Accordion',
	'Button',
	'Context Menu',
	'Dropdown',
	'Tag Input',
];

function setAttributes(el, attrs) {
	Object.keys(attrs).forEach((key) => el.setAttribute(key, attrs[key]));
}

let projects = projectArr.map((project) => ({
	name: project,
	elem() {
		let projectElem = document.createElement('a');
		setAttributes(projectElem, {
			href: `./components/${project}/index.html`,
			class: `component-section__component`,
			target: '_blank',
		});
		projectElem.innerHTML = `
			<svg class="component-section__illustration">
				<use href=#${project.replace(' ', '-').toLowerCase()}-illustration />
			</svg>
			<span class="component-section__component-name">${this.name}</span>
		`.trim();
		return projectElem;
	},
}));

export default projects;
