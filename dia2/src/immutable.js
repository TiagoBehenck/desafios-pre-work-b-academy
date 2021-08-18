const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

const daciuk = {
  ...john,
  hobbies: [...john.hobbies, 'Games']
}

const jane = {
  ...john,
  name: 'Jane',
  hobbies: [...john.hobbies, 'MuayThai', 'Programming']
}

// jane.name = 'Jane'
// jane.hobbies.push('MuayThai', 'Programming')

console.log('John:', john)
console.log('Jane:', jane)
