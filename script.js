function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const body = document.querySelector("body")

  const estilo = window.getComputedStyle(body)
  const imagemAtual = estilo.backgroundImage
  console.log(imagemAtual) // Ex: url("imagem.jpg")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    body.style.backgroundImage = 'url("./assets/bg-desktop-light.jpg")'
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    body.style.backgroundImage = 'url("./assets/bg-desktop.jpg")'
  }
}
