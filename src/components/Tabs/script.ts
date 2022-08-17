const tabs: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.tab');
const tabContent: NodeListOf<HTMLDivElement> = document.querySelectorAll('.tab-content');

tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
       const active: HTMLDivElement = document.querySelector('.show');
       active.classList.remove('show');
       tabContent[idx].classList.add('show');
    })
})