let btnNumber = document.querySelector('.btn__number')
const btnSuperBack = document.querySelector('.btn__superback')
const btnBack = document.querySelector('.btn__back')
if(btnNumber.value == 1) {
    btnSuperBack.classList.add('btn__disabled')
    btnBack.classList.add('btn__disabled')
}
