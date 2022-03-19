const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescriptions = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const titleDoc = document.querySelector('title')

const changeContent = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove('hidden')
    } else {
      elem.classList.add('hidden')
    }
  })
}

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (event) => {
    const dataValue = tabButton.dataset.tabsHandler

    changeContent(tabDescriptions, dataValue)
    changeContent(tabImages, dataValue)

    tabButtons.forEach((btn) => {
      if (btn === event.target) {
        btn.classList.add('design-list__item_active')
      } else {
        btn.classList.remove('design-list__item_active')
      }
    })
    titleDoc.innerHTML = event.target.innerHTML; // Меняем Значение title на значение event.target
  })
})
  

    // tabDescriptions.forEach((descr) => {
    //   if (descr.dataset.tabsField === dataValue) {
    //     descr.classList.remove('hidden')
    //   } else {
    //     descr.classList.add('hidden')
    //   }
    // })

    // tabImages.forEach((image) => {
    //   if (image.dataset.tabsField === dataValue) {
    //     image.classList.remove('hidden')
    //   } else {
    //     image.classList.add('hidden')
    //   }
    // })
    
    // метод перебора по индексу