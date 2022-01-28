const {species} = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const species = [];
  ids.forEach((id) => {
    species.push(species.find((specie) => specie.id === id));
  });
  return species;
}
module.exports = getSpeciesByIds;
