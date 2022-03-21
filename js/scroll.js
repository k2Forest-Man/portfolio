const links = document.querySelectorAll('.menu-list__link')
const btn = document.querySelector('.main__button')


// Создали новый массив состоящий из всех эл-тов массива links
// и еще одного доп эл-та btn
const allLinks = [...links, btn]

allLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    
    
    const id = link.getAttribute('href').substring(1) 
    // substring(1) - отрезали первый символ
    const section = document.getElementById(id)

    // Плавный скролл с помощью библиотеки seamless-scroll-polyfill
    if (section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  })
})