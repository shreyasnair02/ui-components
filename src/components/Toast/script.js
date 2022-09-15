// @ts-check

class UIToast extends HTMLElement {
	constructor() {
		super();
		/** 
		 * Toast Template
		 * @type {HTMLTemplateElement | null}  
		*/
		this.template = document.querySelector('#toast-template');
	}

	connectedCallback() {
		this.attachShadow({ mode: 'open' })
		if(this.template)
		this.shadowRoot?.append(this.template.content.cloneNode(true));

		let closeBtn = this.shadowRoot?.querySelector('.close-toast');
		closeBtn?.addEventListener('click', () => {
			this.remove();
		})
	}
}

customElements.define('ui-toast', UIToast)

const button = document.querySelector('.add-toast');
const toastContainer = document.querySelector('.toast-container');

button?.addEventListener('click', () => {
	let toast = document.createElement('ui-toast');
	toastContainer?.append(toast);
})
