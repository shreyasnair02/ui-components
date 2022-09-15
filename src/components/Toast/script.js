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
		this.shadowRoot?.append(this.template.content.cloneNode(true))
	}
}

customElements.define('ui-toast', UIToast)

const button = document.querySelector('.add-toast')
const toastContainer = document.querySelector('.toast-container')

button?.addEventListener('click', () => {
	let toast = document.createElement('ui-toast')
	if (toastContainer.childElementCount)
		toastContainer
			.animate([{ transform: 'translateY(-35px)' }], {
				duration: 150,
				easing: 'ease-in-out',
			})
			.finished.then(() => toastContainer.append(toast))
	else {
		toastContainer.append(toast)
	}
})
