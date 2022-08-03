// a variable for storing project data

let projectArr = ['Accordian', 'Button', 'Context Menu', 'Dropdown', 'Tag Input']

let projects = projectArr.map(project => {
	return {
		name: project,
		path: `./components/${project}/index.html`,
		illustration: `${project.replace(' ', '-').toLowerCase()}-illustration`
	}
})