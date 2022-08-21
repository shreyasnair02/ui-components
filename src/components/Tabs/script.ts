class Tabs {
	private highlighter: HTMLDivElement;
	private tabContent: NodeListOf<HTMLDivElement>;
	private tabs: NodeListOf<HTMLButtonElement>;
	private tabWrapper: HTMLDivElement;
	private firstBounds: DOMRect;
	private left: number;
	private previousIndex: number;
	private tabContentParent: HTMLDivElement;

	constructor() {
		this.tabWrapper = document.querySelector('.tabs');
		this.tabs = document.querySelectorAll('.tab');
		this.tabContentParent = document.querySelector('.tabs-content');
		this.tabContent = document.querySelectorAll('.tab-content');
		this.highlighter = document.querySelector('.highlighter');
		this.left = 0;
		this.previousIndex = 0;

		// bindings, changing context of _this_
		this.mouseover = this.mouseover.bind(this);

		this.addEventListeners();
	}

	addEventListeners() {
		this.tabs.forEach((tab: HTMLButtonElement, idx: number) =>
			tab.addEventListener('click', () => this.switchTab(idx))
		);
		this.setInitialBounds();
		this.tabWrapper.addEventListener('mouseover', this.mouseover);
		this.tabWrapper.addEventListener('mouseleave', () => {
			this.highlighter.style.opacity = '0';
		});
		this.tabWrapper.addEventListener('mouseenter', () => {
			this.highlighter.classList.remove('transition');
			this.highlighter.style.opacity = '1';
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

	switchTab(idx: number) {
		this.handleActive(idx, 'tab--active', this.tabs);
		this.handleActive(idx, 'show', this.tabContent);
	}

	handleActive(
		idx: number,
		className: string,
		elem: NodeListOf<HTMLButtonElement> | NodeListOf<HTMLDivElement>
	) {
		let getActive = document.querySelector(`.${className}`);
		getActive?.classList.remove(className);
		elem[idx].classList.add(className);
		if (elem === this.tabs) {
			if (this.previousIndex < idx) {
				this.tabContentParent.style.setProperty('--translate', '-40px');
			} else {
				this.tabContentParent.style.setProperty('--translate', '40px');
			}
			this.previousIndex = idx;
		}
	}
}

new Tabs();
