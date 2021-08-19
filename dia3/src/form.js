const inputName = document.querySelector('[data-js="name"]');
const inputCores = document.querySelector('[data-js="cores"]');
const divCores = document.querySelector('[data-js="mostrarCores"]');

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

const cores = {
  vermelho: '#f00',
  azul: '#0000ff',
  amarelo: '#ffff00',
  verde: '#008000',
  preto: '#000',
}

function changeColor(colorParam) {
  colorParam.map((option) => {
    const divColorida = document.createElement('div');
    const nomeCor = document.createElement('p');
    if (option.selected) {
      divColorida.style.width = '100px'
      divColorida.style.height = '100px'
      divColorida.style.margin = '24px'
      divColorida.style.backgroundColor = cores[option.value]
      nomeCor.style.color = '#fff'
      nomeCor.textContent = option.value
      divColorida.appendChild(nomeCor)
      divCores.appendChild(divColorida);
    }
  })
};

inputCores.addEventListener('change', (e) => {
  const selectedOpts = [...e.target.options].map(x => ({
    value: x.value,
    selected: x.selected,
  }))
  changeColor(selectedOpts)
})
