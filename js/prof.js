const button = document.getElementById('btn-new')
const modal = document.querySelector('dialog')
const buttonClose = document.getElementById('btn-close')

button.addEventListener('click', () => {
    modal.showModal()
})

buttonClose.addEventListener('click', () => {
    modal.close()
})