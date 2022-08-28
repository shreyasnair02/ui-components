let open = document.querySelector('.modal_btn');
let section = document.querySelector('.section');
let modal = document.querySelector('.modal');
let idname = document.querySelector('#idname');
let pass = document.querySelector('#idpass');
let email = document.querySelector('#idemail');

open.addEventListener('click', (e) => {
    e.stopPropagation();
    change();

    document.body.addEventListener('click', takeInput);
});

function change() {
    document.body.removeEventListener('click', takeInput);
    modal.classList.toggle('hidden');
    section.classList.toggle('darken');
}


function takeInput(e) {
    e.stopPropagation();
    let form = document.querySelector('.details_section');
    let formData = new FormData(form);
    if (e.target.closest('.shut') || (!e.target.closest('.modal'))) {
        form.reset();
        change();

    }

    else if (e.target.closest('.signin')) {
        if ((form.checkValidity()) && (!pass.input.trim().length == 0) && (!idname.input.trim().length == 0) && (!email.input.trim().length == 0)) {
            console.log('true')
            change();
        }
        else {
            console.log('false')
            form.reportValidity();

        }
    }
    else if (e.target.closest('.reset')) {
        form.reset();
    }

}
