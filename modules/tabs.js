function tabs(headerSelector, tabSelector, contentSelector, activeClass){
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabSelector);
    const contents = document.querySelectorAll(contentSelector);

    const hideContent = () => {
        contents.forEach(content => {
            content.style.display = "none";
        });
        tabs.forEach(tab => tab.classList.remove(activeClass));
    };

    const showTabContent = (index = 0) => {
        if (tabs[index]){
            contents[index].style.display = 'block';
            tabs[index].classList.add(activeClass);
        }
    }
    hideContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target.closest(tabSelector);
        if (target){
            tabs.forEach((tab, index) => {
                if (tab == target) {
                    hideContent();
                    showTabContent(index);
                }
            });
        }
    });
}

export default tabs