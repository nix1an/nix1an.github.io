document.addEventListener('DOMContentLoaded', () => {
    const copyEmail = document.getElementById('copy-email');
    const feedbackMessage = document.getElementById('feedback-message');

    copyEmail.addEventListener('click', (event) => {
        event.preventDefault();

        const emailText = copyEmail.innerText;
        navigator.clipboard.writeText(emailText).then(() => {
            feedbackMessage.classList.remove('hidden');
            feedbackMessage.classList.add('visible');

            setTimeout(() => {
                feedbackMessage.classList.remove('visible');
                feedbackMessage.classList.add('hidden');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});
