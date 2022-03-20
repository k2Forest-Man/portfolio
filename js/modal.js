const modalButton = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')
const overlay = modal.querySelector('.overlay')
const closeButton = modal.querySelector('.modal__close')

modalButton.forEach((buttons) => {
  buttons.addEventListener('click', () => {
    modal.classList.remove('hidden')
  })
})

// modalButton.addEventListener('click', () => {
//   modal.classList.remove('hidden')
// })

overlay.addEventListener('click', () => {
  modal.classList.add('hidden')
})

closeButton.addEventListener('click', () => {
  modal.classList.add('hidden')
})