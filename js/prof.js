const button = document.getElementById('btn-new')
const modal = document.querySelector('dialog')

button.addEventListener('click', () => {
    modal.showModal()
})

const  frm = document.querySelector('dialog form')
const cardManName = document.querySelector('.man .info h3')
const cardManSubject = document.querySelector('.man .info p')
const cardWomanName = document.querySelector('.woman .info h3')
const cardWomanSubject = document.querySelector('.woman .info p')

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = frm.inName.value;
    const subject = frm.inSubject.value;

    cardName.innerHTML = name
    cardSubject.innerHTML = `Professor de ${subject}`

    modal.close()
})
