const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName) {
    const firstName = employees.find((worker) => worker.firstName === employeeName);
    const lastName = employees.find((worker) => worker.lastName === employeeName);
    return (firstName || lastName);
  }
  return {};
}

module.exports = getEmployeeByName;
