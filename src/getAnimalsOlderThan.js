const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const typeAnimal = species.find((specie) => specie.name === animal);
  return typeAnimal.residents.every((kind) => kind.age >= age);
}

module.exports = getAnimalsOlderThan;
