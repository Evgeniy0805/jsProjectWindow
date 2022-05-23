
const modals = () => {
    function openPopup(trigger, modal) {
        trigger.addEventListener('click', (e) => modal.style.display = 'block');
    }

    const engineerBtn = document.querySelector('.popup_engineer_btn'),
          engineerPopup = document.querySelector('.popup_engineer');

    openPopup(engineerBtn, engineerPopup);
};

export default modals;