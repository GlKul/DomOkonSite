function modals(){
    function bindModal (triggerSelector, modalSelector, closeSelector){
        const clickElement = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        const openModal = (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        clickElement.forEach(element => {
            element.addEventListener('click', openModal);
        });

        close.addEventListener('click', function() {
            modal.style.display = "none";
            document.body.style.overflow = '';
        })
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
              modal.style.display = "none";
              document.body.style.overflow = "";
            }
          });
    }
    function showModalByTime(selector, time){
        setTimeout(() => {
            const modal = document.querySelector(selector);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 6000);
}

export default modals;