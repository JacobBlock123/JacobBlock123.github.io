const employee = new Object();

employee.name = "David Smith";
employee.age = 46;
employee.job = "Supervisor";
employee.salary = 80000;
employee.retired = false;
employee.number = 2789018;
employee.benefits = ["Dental", "Health Care", "Pension Plan"];

console.log(Object.keys(employee));

function printObject(employee) {
    console.log("The Object Employee has " + Object.keys(employee).length + " properties");

    console.log("The Object Employee has the data types: ")
    Object.keys(employee).forEach((prop)=> console.log(typeof((employee[prop]))));

    console.log("The Object Employee has the Date of Birth poroperty: " + employee.hasOwnProperty("dateOfBirth"));

    let allPropsEnumerable = true;

    Object.keys(employee).forEach((prop)=> {
        if (employee.propertyIsEnumerable(prop) == false) {
            allPropsEnumerable = false;
            return;
        }
    })

    if (allPropsEnumerable === true) {
        console.log("All properties of Object Employee are enumerable");
    }

    else {
        console.log("Not all of the properties of Object Employees are enumerable");
    }

    if (Object.isFrozen(employee) === true) {
        console.log("The Object Employee is frozen");
    }

    else {
        console.log("The Object Employee isn't frozen");
    }
}

printObject(employee);