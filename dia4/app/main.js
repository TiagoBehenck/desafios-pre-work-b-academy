import './style.css'

const url = 'http://localhost:3333/cars'

const formCar = document.querySelector('[data-js="form"]');
const tableCar = document.querySelector('[data-js="table"]');

const insertNewRow = ({
  image,
  brandModel,
  year,
  plate,
  color,
}) => {
  const newRow = tableCar.insertRow(-1)

  const imageCell = newRow.insertCell(0)
  const brandModelCell = newRow.insertCell(1)
  const yearCell = newRow.insertCell(2)
  const plateCell = newRow.insertCell(3)
  const colorCell = newRow.insertCell(4)

  const imgElement = document.createElement('img')
  imgElement.src = image
  imgElement.alt = brandModel
  imageCell.appendChild(imgElement)

  brandModelCell.textContent = brandModel
  yearCell.textContent = year
  plateCell.textContent = plate

  const pintura = document.createElement('div')
  pintura.style.width = '25px'
  pintura.style.height = '25px'
  pintura.style.backgroundColor = color
  colorCell.appendChild(pintura)
}

formCar.addEventListener('submit', (e) => {
  e.preventDefault();

  const image = formCar.image.value
  const brandModel = formCar.brandModel.value
  const year = formCar.year.value
  const plate = formCar.plate.value
  const color = formCar.color.value

  const car = {
    image,
    brandModel,
    year,
    plate,
    color,
  }

  console.log({ car })

  insertNewRow(car)

  formCar.image.value = ''
  formCar.brandModel.value = ''
  formCar.year.value = ''
  formCar.plate.value = ''
  formCar.color.value = '#ffffff'

  formCar.image.focus()
})

const fechDataCars = async () => {
  const response = await fetch(url)

  console.log(response)

  if (!response.status === 200) {
    return
  }

  const carsData = await response.json()

  carsData.forEach(item => insertNewRow(item))
}

fechDataCars()
