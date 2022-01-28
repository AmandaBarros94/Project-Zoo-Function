const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const speciesFound = [];
  ids.forEach((id) => {
    speciesFound.push(species.find((specie) => specie.id === id));
  });
  return speciesFound;
}
module.exports = getSpeciesByIds;
