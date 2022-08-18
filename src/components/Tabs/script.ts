const tabsWrapper: HTMLDivElement = document.querySelector('.tabs');
const tabs: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.tab');
const tabContent: NodeListOf<HTMLDivElement> = document.querySelectorAll('.tab-content');
const highlighter: HTMLDivElement = document.querySelector('.highlighter');
let bool = false;

tabsWrapper.addEventListener('mouseover', (e) => {
    let elem = e.target as HTMLButtonElement;
    highlighter.style.opacity = '1';
    if(elem.classList.contains('tab') && !bool) {
        let bounds = elem.getBoundingClientRect();
        highlighter.setAttribute('style', `height: ${bounds.height}px; width: ${bounds.width}px; top: ${bounds.top}px; left: ${bounds.left}px;`)
        bool = true;
    } else if (bool && elem.classList.contains('tab')) {
        let updatedBounds = elem.getBoundingClientRect();
        highlighter.style.left = `${updatedBounds.left}px`;
        highlighter.style.width = `${updatedBounds.width}px`;
    }
})

tabsWrapper.addEventListener('mouseleave', () => {
    bool = false;
    highlighter.style.opacity = '0';
})

tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
       const active: HTMLDivElement = document.querySelector('.show');
       active.classList.remove('show');
       tabContent[idx].classList.add('show');
    })
})