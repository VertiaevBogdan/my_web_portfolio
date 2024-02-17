document.body.onclick = (event) => {
    const elem = event.target;
    if (elem.classList.contains('email')){
        event.preventDefault(); // Предотвращаем стандартное действие ссылки

        // Копируем текст из элемента в буфер обмена
        navigator.clipboard.writeText(elem.innerHTML)
            .then(()=>{
                // Выводим сообщение "copied"
                const outElement = document.querySelector('.out');
                outElement.innerHTML = 'Copied';
                outElement.classList.add('copied-message');

                // Через 3 секунды удаляем сообщение "copied"
                setTimeout(() => {
                    outElement.innerHTML = '';
                    outElement.classList.remove('copied-message');
                }, 3000);
            })
            .catch(err => {
                console.log(err);
            });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav__list a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // Добавляем плавный скроллинг
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contactButton');

    // Обработчик события клика на кнопке "Contact Me"
    contactButton.addEventListener('click', function() {
        // Находим блок "contact"
        const contactSection = document.getElementById('contact');

        // Выполняем плавный скроллинг к блоку "contact"
        contactSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
