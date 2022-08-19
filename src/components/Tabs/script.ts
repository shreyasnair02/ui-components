class Tabs {
	private highlighter: HTMLDivElement;
	private tabContent: NodeListOf<HTMLDivElement>;
	private tabs: NodeListOf<HTMLButtonElement>;
	private tabWrapper: HTMLDivElement;
	private firstBounds: DOMRect;
	private left: number;

	constructor() {
		this.tabWrapper = document.querySelector('.tabs');
		this.tabs = document.querySelectorAll('.tab');
		this.tabContent = document.querySelectorAll('.tab-content');
		this.highlighter = document.querySelector('.highlighter');
		this.left = 0;

		// bindings, changing context of _this_
		this.mouseover = this.mouseover.bind(this);

		this.addEventListeners();
	}

	addEventListeners() {
		this.tabs.forEach((tab, idx) =>
			tab.addEventListener('click', () => this.switchTab(idx))
		);
		this.setInitialBounds();
		this.tabWrapper.addEventListener('mouseover', this.mouseover);
		this.tabWrapper.addEventListener('mouseleave', () => {
			this.highlighter.style.opacity = '0'
		});
		this.tabWrapper.addEventListener('mouseenter', () => {
			this.highlighter.classList.remove('transition');
			this.highlighter.style.opacity = '1'
		});
	}

	mouseover(e) {
		if (!e.target.classList.contains('tab')) return;
		this.highlighter.classList.add('transition');
		const { target } = e;
		const { width, left } = target.getBoundingClientRect();
		const updatedBounds = {
			deltaX: left - this.left,
			deltaW: width,
		};
		console.log(updatedBounds);
		this.highlighter.style.width = `${updatedBounds.deltaW}px`;
		this.highlighter.style.transform = `translateX(${updatedBounds.deltaX}px)`;
	}

	setInitialBounds() {
		this.firstBounds = this.tabs[0].getBoundingClientRect();
		this.highlighter.setAttribute(
			'style',
			`top: ${this.firstBounds.top}px; left: ${this.firstBounds.left}px; height: ${this.firstBounds.height}px`
		);
		this.left = this.firstBounds.left;
	}

	switchTab(idx) {
		const active: HTMLDivElement = document.querySelector('.show');
		active.classList.remove('show');
		this.tabContent[idx].classList.add('show');
	}
}

new Tabs();
