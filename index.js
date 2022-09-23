const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};
console.log(employee)
beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function updateEmployeeWithKeyAndValue(_obj, key, value) {
    const updateEmployeeWithKeyAndValue = { ...employee};
  
    updateEmployeeWithKeyAndValue[key] = value;
  
    return updateEmployeeWithKeyAndValue;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
    return obj;
  }

  function deleteFromEmployeeByKey(obj, key) {
    const deleteFromEmployeeByKey = { ...employee};
    delete deleteFromEmployeeByKey.name;
    return deleteFromEmployeeByKey;
  }

  function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete employee.name
    return employee 
  }