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
	'some long text to test the efficiency of the thing to work regardless of how long the text is, because it is important',
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
		/** @type {HTMLSpanElement} */
		let content = this.shadowRoot.querySelector('span')
		content.textContent = this.dataset.content

		this.shadowRoot
			.querySelector('output')
			.addEventListener('animationend', () => {
				this.remove()
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
	const firstState = toastContainer.offsetHeight
	toastContainer.append(toast)
	const finalState = toastContainer.offsetHeight
	const invert = finalState - firstState
	toastContainer.childElementCount &&
		toastContainer.animate(
			[
				{ transform: `translateY(${invert}px)` },
				{ transform: 'translateY(0px)' },
			],
			{
				duration: 150,
				easing: 'ease-in-out',
			}
		)
})
