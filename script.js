function openPopUp() {
    const popUpWrapper = document.querySelector('.pop-up__wrapper')
    popUpWrapper.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

function closePopUp() {
    const popUpWrapper = document.querySelector('.pop-up__wrapper')
    popUpWrapper.style.display = 'none'
    document.body.style.overflow = 'unset'
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', openPopUp)

const close = document.querySelector('.close')
close.addEventListener('click', closePopUp)