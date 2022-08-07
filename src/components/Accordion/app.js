let onebit = 1; // set this bit to zero, to keep multiple accordion items open at a time
let accordionItems = document.body.querySelectorAll(".accordion-items");
accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener("click", (event) => {
    let currentlyActive = document.querySelector(".accordion-items.active");
    if (onebit && currentlyActive && currentlyActive != accordionItem) {
      currentlyActive.firstElementChild.firstElementChild.classList.toggle(
        "hidden"
      );
      currentlyActive.nextElementSibling.style.maxHeight = 0;
      currentlyActive.classList.toggle("active");
    }
    accordionItem.classList.toggle("active");
    let spansvg =
      accordionItem.firstElementChild.firstElementChild.classList.toggle(
        "hidden"
      );
    let answer = accordionItem.nextElementSibling;
    if (accordionItem.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
