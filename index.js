
//function updateEmployeeWithKeyAndValue(employee, key, value) {
   // const newEmployee = {...employee}
   // newEmployee [key] = value
//  return newEmployee; 

// }

// const employee = updateEmployeeWithKeyAndValue (employee, 'name', 'sam');

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee}
    newEmployee [key] = value
    return Object.assign({}, employee, { [key]: value });


}

const employee = {name : 'Sam',
streetAddress: '11 Broadway'
};

function destructivelyUpdateEmployeeWithKeyAndValue(streetAddress, key, value) {
    streetAddress [key] = value
    return streetAddress
};
streetAddress = "12 Broadway"

function deleteFromEmployeeByKey(employee, key,){
const newEmployee = {...employee};
delete newEmployee [key];
return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee [key];
    return employee;
}
    




