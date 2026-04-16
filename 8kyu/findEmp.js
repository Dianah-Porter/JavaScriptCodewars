function findEmployeesRole(name) {

  let [first, last] = name.split(" ");

  let employee = employees.find(emp => 
    emp.firstName === first && emp.lastName === last
  );

  return employee ? employee.role : "Does not work here!";
}
