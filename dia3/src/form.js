const inputName = document.querySelector('[data-js="name"]');

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
