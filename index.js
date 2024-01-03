// Write your solution in this file!

//solutin 1//
function updateEmployeeWithKeyAndValue(employee, key, value) 
{
    return {
      ...employee,
      [key]: value
    };
}

//solution 2//
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) 
{
    employee[key] = value;
    return employee; 
}

//solution 3//
function deleteFromEmployeeByKey(employee, key) 
{
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
}
  
//solution 4//
function destructivelyDeleteFromEmployeeByKey(employee, key) 
{
    delete employee[key];
    return employee; 
}