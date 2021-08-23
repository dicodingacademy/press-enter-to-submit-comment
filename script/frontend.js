document.querySelector('.js-source-code').addEventListener('click', () => {
    const commentForm = document.querySelector('.js-line-comment .js-comment-form')
    if (commentForm !== null) {
        commentForm.addEventListener("keydown", function (e) {
            if ((e.which == 13 || e.which == 10)) {
                if (e.ctrlKey) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    document.querySelector('.js-comment-form .btn-primary').click()
                }
            }
        }, true);
    }
})