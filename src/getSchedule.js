const { hours, species } = require('../data/zoo_data');

const openDays = Object.keys(hours);
const operation = Object.values(hours);
const animalsName = species.map((specie) => specie.name);
const object1 = {};

function allAnimals(weekDay) {
  const exhibit = species.filter(({ availability }) => availability.includes(weekDay));
  return exhibit.map((item) => item.name);
}

function diary() {
  openDays.forEach((element, index) => {
    object1[openDays[index]] = {
      officeHour: `Open from ${operation[index].open}am until ${operation[index].close}pm`,
      exhibition: allAnimals(openDays[index]),
    };
  });

  operation.forEach((time, index) => {
    if (time.open === 0) {
      object1[openDays[index]] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });

  return object1;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return diary();
  }
  if (openDays.includes(scheduleTarget)) {
    return { [scheduleTarget]: object1[scheduleTarget] };
  }
  if (animalsName.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return diary();
}

module.exports = getSchedule;
