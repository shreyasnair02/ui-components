class Tabs {
	private highlighter: HTMLDivElement;
	private tabContent: NodeListOf<HTMLDivElement>;
	private tabs: NodeListOf<HTMLButtonElement>;
	private tabWrapper: HTMLDivElement;
	private firstBounds: DOMRect;
	private left: number;
	private bool: boolean;
	private previousTarget: HTMLButtonElement;

	constructor() {
		this.tabWrapper = document.querySelector('.tabs');
		this.tabs = document.querySelectorAll('.tab');
		this.tabContent = document.querySelectorAll('.tab-content');
		this.highlighter = document.querySelector('.highlighter');
		this.left = 0;
		this.bool = false;
		this.previousTarget = null;

		// bindings, changing context of _this_
		this.mouseover = this.mouseover.bind(this);
		this.mouseenter = this.mouseenter.bind(this);

		this.addEventListeners();
	}

	addEventListeners() {
		this.tabs.forEach((tab, idx) =>
			tab.addEventListener('click', () => this.switchTab(idx))
		);
		this.setInitialBounds();
		this.tabWrapper.addEventListener('mouseover', this.mouseover);
		this.tabWrapper.addEventListener('mouseleave', () => {
			this.highlighter.style.opacity = '0';
		});
		this.tabWrapper.addEventListener('mouseenter', () => {
			this.highlighter.style.transition = 'transform 0ms, opacity 150ms';
		});
	}

	mouseover(e) {
		if (!e.target.classList.contains('tab')) return;
		this.highlighter.style.opacity = '1';
		this.highlighter.style.transitionProperty = 'transform, opacity, width';
		this.highlighter.style.transitionTimingFunction = 'ease-in-out'
		this.highlighter.style.transitionDuration = '150ms';
		const { target } = e;
		this.previousTarget = target;
		const { width, left } = target.getBoundingClientRect();
		const updatedBounds = {
			deltaX: left - this.left,
			deltaW: width,
		};
		console.log(updatedBounds);
		this.highlighter.style.width = `${updatedBounds.deltaW}px`;
		this.highlighter.style.transform = `translateX(${updatedBounds.deltaX}px)`;
	}

	mouseenter(e) {
		this.highlighter.style.transitionDuration = '0ms';
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
