class Tabs {
	private highlighter: HTMLDivElement;
	private tabContent: NodeListOf<HTMLDivElement>;
	private tabs: NodeListOf<HTMLButtonElement>;
	private tabWrapper: HTMLDivElement;
	private firstBounds: DOMRect;

	constructor() {
		this.tabWrapper = document.querySelector('.tabs');
		this.tabs = document.querySelectorAll('.tab');
		this.tabContent = document.querySelectorAll('.tab-content');
		this.highlighter = document.querySelector('.highlighter');

		this.addEventListeners();
	}

	addEventListeners() {
		this.tabs.forEach(( tab, idx  )=> tab.addEventListener('click', () => this.switchTab(idx)))
		this.setInitialBounds();
	}

	setInitialBounds() {
		// set bounds
		this.firstBounds = this.tabs[0].getBoundingClientRect();
		this.highlighter.setAttribute('style', `top: ${this.firstBounds.top}px; left: ${this.firstBounds.left}px; height: ${this.firstBounds.height}px`)
	}

	switchTab(idx) {
		const active: HTMLDivElement = document.querySelector('.show');
		active.classList.remove('show');
		this.tabContent[idx].classList.add('show');
	}
}

new Tabs();