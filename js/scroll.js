const links = document.querySelectorAll('.menu-list__link')

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    
    
    const id = link.getAttribute('href').substring(1) 
    // substring(1) - отрезали первый символ
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }
  })
})