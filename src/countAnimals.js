const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal && animal.specie && animal.sex) {
    return species
      .find((kind) => kind.name === animal.specie).residents
      .filter((kind) => kind.sex === animal.sex).length;
  }
  if (animal) {
    return species.find((kind) => kind.name === animal.specie).residents.length;
  }
  return species.reduce((acc, kind) => {
    acc[kind.name] = kind.residents.length;
    return acc;
  }, {});
}

module.exports = countAnimals;
