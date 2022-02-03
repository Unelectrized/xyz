const pages = [
  [
    "Robux",
    "Robux is a currency that is used in Roblox."
  ],
  
  [
    "Bruh",
    "bruh."
  ]
]

let currentPages = []

const thingTemplate = document.querySelector("[data-thing-template]")
const stuffContainer = document.querySelector("[data-stuff-container]")
const searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("input", (e) => {
  const value = e.target.value
  currentPage.forEach(page => {
    const visible = page.title.includes(value) || page.description.includes(value)
    page.element.classList.toggle("hide", !visible)
  })
  console.log(currentPage)
})

currentPage = pages.map(page => {
  const card = thingTemplate.content.cloneNode(true).children[0]
  const header = card.querySelector("[data-header]")
  const body = card.querySelector("[data-body]")
  
  header.textContent = page[0]
  body.textContent = page[1]
  
  stuffContainer.append(card)
  
  return { title: page[0], description: page[1], element: card }
})
