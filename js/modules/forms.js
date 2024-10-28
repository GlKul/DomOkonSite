import { data } from "jquery";
const forms = () => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const phoneInputs = document.querySelectorAll('user_phone');

    /*phoneInputs.forEach(phoneInput => {
        phoneInputValidasion(phoneInput);
    });

    const phoneInputValidasion = (phoneInput) => {
        phoneInput = /^\+?([0-9]{1})\)?[ ]?([0-9]{3})[ ]?([0-9]{3})[-]?([0-9]{2})[-]?([0-9]{2})$/;
    }*/

    let FormSubmissionStatus = {
        loading: "Загрузка",
        success: "Спасибо! Мы с вами свяжемся",
        failure: "Что-то пошло не так...",
    };

    const postData = async (url, data) => {
        try {
            let statusElement = document.querySelector('.status');
            statusElement.textContent = FormSubmissionStatus.loading;
            let res = await fetch(url, {
                method: "POST", 
                body: data,
            });
            return await res.text();
        } catch (error) {
            console.error("Ошибка", error);
            statusElement.textContent = FormSubmissionStatus.failure;
            throw error;
        }
    }

    const cleanInput = ()=>{
        inputs.forEach(input => {
            input.value = '';
        })
    }
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);
            console.log('OK');
            const formData = new FormData(form);
            console.log(formData);
            const BtnSubmit = document.querySelector('button[type="submit"]');
            if (BtnSubmit){BtnSubmit.disabled = true;}
            postData("assets/server.php", formData)
            .then(responce => {
                console.log('Ответ сервера:', responce);
                statusMessage.textContent = FormSubmissionStatus.success;})
            .catch(() => {statusMessage.textContent = FormSubmissionStatus.failure;})
            .finally(() => {
                cleanInput();
                setTimeout(() => {
                    statusMessage.remove();
                    if (BtnSubmit) {BtnSubmit.disablet = false;}
                }, 5000);
            })

        });
    });
}


export default forms