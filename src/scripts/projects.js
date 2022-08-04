// a variable for storing project data


// folder name and value added here should match
let projectArr = [
	'Accordian',
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
	path: `./components/${project}/index.html`,
	illustration: `${project.replace(' ', '-').toLowerCase()}-illustration`,
	elem() {
		let projectElem = document.createElement('a');
		setAttributes(projectElem, {
			href: this.path,
			class: `./components/${project}/index.html`,
			target: '_blank',
		});
		projectElem.innerHTML = `
			<svg class="component-section__illustration">
				<use href=#${this.illustration} />
			</svg>
			<span class="component-section__component-name">${this.name}</span>
		`.trim();
		return projectElem;
	},
}));

export default projects;
