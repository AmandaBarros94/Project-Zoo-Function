const { employees, species } = require('../data/zoo_data');

function getOldest(id) {
  const getSenior = (acc, resident) => {
    if (acc.age > resident.age) {
      return acc;
    }
    return resident;
  };
  const { residents } = species.find((specie) => specie.id === id);
  return Object.values(residents.reduce(getSenior));
}

function getOldestFromFirstSpecies(id) {
  return getOldest(employees.find((employee) => employee.id === id).responsibleFor[0]);
}
module.exports = getOldestFromFirstSpecies;
