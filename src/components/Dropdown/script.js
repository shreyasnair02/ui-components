const dropdownValue = document.querySelector('.dropdown__value')
const dropdown = document.querySelector('.dropdown')
const chevron = document.querySelector('.chevron-down')
const dropdownList = document.querySelector('.dropdown__list')
let flag = 1

document.addEventListener('click', (e) => {
	const { target } = e

	if (target.classList.contains('dropdown__item')) {
		const active = document.querySelector('.selected')
		active.classList.remove('selected')
		target.classList.add('selected')

		dropdownValue.textContent = target.textContent
		console.log('Selected Value: ', dropdown.textContent.trim())
	}

	if (target === dropdown) {
		dropdown.classList.toggle('opened')
	}

	if (target === document.body && dropdown.classList.contains('opened'))
		dropdown.classList.toggle('opened')
})

document.addEventListener('keyup', (e) => {
	if (e.code === 'Escape' && dropdown.classList.contains('opened'))
		dropdown.classList.toggle('opened')
})
