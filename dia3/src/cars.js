const formCar = document.querySelector('[data-js="form"]');
const tableCar = document.querySelector('[data-js="table"]');

const insertNewRow = ({
  imageUrl,
  marca,
  ano,
  placa,
  cor,
}) => {
  const newRow = tableCar.insertRow(-1)

  const imageCell = newRow.insertCell(0)
  const modeloCell = newRow.insertCell(1)
  const anoCell = newRow.insertCell(2)
  const placaCell = newRow.insertCell(3)
  const corCell = newRow.insertCell(4)

  const imgElement = document.createElement('img')
  imgElement.src = imageUrl
  imgElement.alt = marca
  imageCell.appendChild(imgElement)

  modeloCell.textContent = marca
  anoCell.textContent = ano
  placaCell.textContent = placa

  const pintura = document.createElement('div')
  pintura.style.width = '25px'
  pintura.style.height = '25px'
  pintura.style.backgroundColor = cor
  corCell.appendChild(pintura)
}

formCar.addEventListener('submit', (e) => {
  e.preventDefault();

  const imageUrl = formCar.imagem.value
  const marca = formCar.marca.value
  const ano = formCar.ano.value
  const placa = formCar.placa.value
  const cor = formCar.cor.value

  const car = {
    imageUrl,
    marca,
    ano,
    placa,
    cor,
  }

  insertNewRow(car)

  formCar.imagem.value = ''
  formCar.marca.value = ''
  formCar.ano.value = ''
  formCar.placa.value = ''
  formCar.cor.value = '#ffffff'

  formCar.imagem.focus()
})
