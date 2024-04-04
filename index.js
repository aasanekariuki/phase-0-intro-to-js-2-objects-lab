// Write your solution in this file!
function  updateEmployeeWithKeyAndValue (employee, key, value){
return {
    ...employee,

    [key]:value
}
}

     const employee = {
        name:'Sam',
        streetAdress:'11 Broadway'
     
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key,value){
      employee[key] = value
     return employee
    
}
function deleteFromEmployeeByKey(employee,key){
    let newObject = {...employee}
    delete newObject[key]
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
   

