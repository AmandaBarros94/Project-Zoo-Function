const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const amount = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((visitants) => {
    if (visitants.age < 18) {
      amount.child += 1;
    } else if (visitants.age >= 18 && visitants.age < 50) {
      amount.adult += 1;
    } else {
      amount.senior += 1;
    }
  });
  return amount;
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) {
    return 0;
  }
  const cost = {
    child: prices.child * countEntrants(entrants).child,
    adult: prices.adult * countEntrants(entrants).adult,
    senior: prices.senior * countEntrants(entrants).senior,
  };
  const total = Object.values(cost).reduce((acc, value) => acc + value, 0);
  return total;
}
module.exports = { calculateEntry, countEntrants };
