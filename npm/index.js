const lodash =require ('lodash')

const names=['Aryan', 'Marian', 'Barbarian', 'Targerian', 'Darian'];
const lowerCase = lodash.map(names,lodash.lowerCase);
console.log(lowerCase);
