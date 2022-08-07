const windowWidth = window.innerWidth || document.body.scrollHeight;

const options__li = document.querySelectorAll(".options li");
options__li.forEach(li => {
    li.addEventListener("click", changeTab);
})
function changeTab() {
    for (let i = 0; i < options__li.length; i++) {
        options__li[i].classList.remove('active');
    }
    this.classList.add('active')
}
document.addEventListener('scroll', () => {
    let topL = window.pageYOffset || document.documentElement.scrollTop;
    if (topL > windowWidth / 4) {
        options__li[0].classList.remove('active');
        options__li[1].classList.add('active');
    }
    else {
        options__li[0].classList.add('active');
        options__li[1].classList.remove('active');
    }
})