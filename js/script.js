/*
    Using selectors inside the element
    Traversing the DOM
*/

const btns = document.querySelectorAll('.question-btn');
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement
    });
    question.classList.toggle('show-text');
});