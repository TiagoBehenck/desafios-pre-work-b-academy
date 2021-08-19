const inputName = document.querySelector('[data-js="name"]')
const form = document.querySelector('[data-js="form1"]')
const colorsContainer = document.createElement('div')
document.body.appendChild(colorsContainer)

export const textCapitalize = (text) => (text && text.length
  ? text
    .toLowerCase()
    .split(' ')
    .map((word) => {
      if (!word) return ''

      if (word.length <= 3) return word

      return word.replace(word[0], word[0].toUpperCase())
    })
    .join(' ')
  : text)

inputName.addEventListener('input', (e) => {
  inputName.value = textCapitalize(e.target.value)
})

function changeColor(color) {
  colorsContainer.innerHTML = ''

  Array.from(color).map(color => {
    const div = document.createElement('div')
    div.style.width = '100px'
    div.style.height = '100px'
    console.log(color.value)
    div.style.background = color.value

    colorsContainer.appendChild(div)
  })
};

const select = document.createElement('select')
const colors = ['#fff', '#0000ff', '#ffff00', '#008000', '#000']

colors.forEach(color => {
  const option = document.createElement('option')
  option.value = color
  option.textContent = color
  select.appendChild(option)
})

select.addEventListener('click', (e) => {
  e.preventDefault();
  changeColor(select.selectedOptions)
})

select.setAttribute('multiple', '')
form.appendChild(select)
