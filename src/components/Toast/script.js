const toastContainer = document.createElement('div')
toastContainer.classList.add('toast-container')
document.body.append(toastContainer)

// array of positive messages
const positiveMessages = [
	'Great job!',
	'You did it!',
	'You are awesome!',
	'You are the best!',
	'You are the greatest!',
]

class UIToast extends HTMLElement {
	constructor() {
		super()
		/** @type {HTMLTemplateElement} */
		this.template = document.querySelector('#toast-template')

		/** @type {HTMLDivElement} */
		this.toastContainer = document.querySelector('.toast-container')
	}

	connectedCallback() {
		this.attachShadow({ mode: 'open' })
		this.shadowRoot.append(this.template.content.cloneNode(true))

		let content = this.shadowRoot.querySelector('span')
		content.textContent = this.dataset.content

		this.shadowRoot.querySelector('output').addEventListener('animationend', () => {
			this.remove();
		})
	}
}

customElements.define('ui-toast', UIToast)

/** @type {HTMLButtonElement} */
const button = document.querySelector('.add-toast')

button.addEventListener('click', () => {
	let toast = document.createElement('ui-toast')
	toast.setAttribute(
		'data-content',
		positiveMessages[Math.floor(Math.random() * positiveMessages.length)]
	)

	toastContainer.childElementCount
		? toastContainer
				.animate([{ transform: 'translateY(-35px)' }], {
					duration: 150,
					easing: 'ease-in-out',
				})
				.finished.then(() => toastContainer.append(toast))
		: toastContainer.append(toast)
})
