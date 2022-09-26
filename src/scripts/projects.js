// a variable for storing project data

// folder name and value added here should match
let projectArr = [
	'Accordion',
	'Button',
	'Context Menu',
	'Dropdown',
	'Tabs',
	'Tag Input',
	'Toast',
	'Input Autocomplete'
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
			<div class="component-section__component-name">${this.name}
				<svg height="20" width="20" class="component-section__external-link">
					<use href="#external-link" />	
				</svg>	
			</div>
		`.trim();
		return projectElem;
	},
}));

export default projects;
