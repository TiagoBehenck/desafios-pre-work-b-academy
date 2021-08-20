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
  const noContent = document.querySelector('[data-js="no-content"]');

  if (noContent) {
    tableCar.removeChild(noContent)
  }

  const newRow = tableCar.insertRow(-1)

  const imageCell = newRow.insertCell(0)
  const brandModelCell = newRow.insertCell(1)
  const yearCell = newRow.insertCell(2)
  const plateCell = newRow.insertCell(3)
  const colorCell = newRow.insertCell(4)
  const buttonCell = newRow.insertCell(5)

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

  const deleteButton = document.createElement('button')
  deleteButton.type = 'button'
  deleteButton.textContent = 'Excluir'
  deleteButton.addEventListener('click', () => deleteCar(newRow, plate))

  buttonCell.appendChild(deleteButton)
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


  addNewCar(car)

  e.target.reset()

  formCar.image.focus()
})

const showError = (errorMessage) => {
  const p = document.createElement('p')
  p.textContent = `${errorMessage}`
  formCar.appendChild(p)
}

const addNewCar = async ({
  image,
  brandModel,
  year,
  plate,
  color,
}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      image,
      brandModel,
      year,
      plate,
      color,
    }),
  })
    .then(r => r.json())
    .catch(e => ({ error: true, message: e.message }))

  if (response.error) {
    showError(response.message)
    return
  }

  insertNewRow({
    image,
    brandModel,
    year,
    plate,
    color,
  })
}

async function deleteCar(carRow, plate) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ plate }),
  })

  if (!response.ok) {
    return
  }

  carRow.remove()
}

const emptyRows = () => {
  const tr = document.createElement('tr')
  const td = document.createElement('td')
  tr.dataset.js = 'no-content'
  td.innerText = 'Nenhum carro encontrado'
  td.colSpan = '6'

  tr.appendChild(td)
  tableCar.appendChild(tr)
}

const fechDataCars = async () => {
  const response = await fetch(url)
    .then(r => r.json())
    .catch(e => ({ error: true, message: e.message }))

  if (response.error) {
    console.log('Erro ao buscar carros', e)
    return
  }


  if (response.length === 0) {
    emptyRows();
    return
  }

  response.forEach(insertNewRow)
}

fechDataCars()
