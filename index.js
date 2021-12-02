// Write your solution in this file!

const employee = { name: 'Vik', streetAdress: 'Glendwood Drive' };


console.log(employee);


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee = { ...employee };

    newemployee[key] = value;

    return newemployee;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value;

    return employee;

}

function deleteFromEmployeeByKey(employee, key) {
    const p = { ...employee };

    delete p[key];

    return p;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];

    return employee;
}





