let employee = new Object();

employee.name = "David Smith";
employee.age = 46;
employee.job = "Supervisor";
employee.salary = 80000;
employee.retired = false;
employee.number = 2789018;
employee.benefits = ["Dental", "Health Care", "Pension Plan"];

let shallow;
let deep;

function shallowCopy(shallow) {
    shallow = Object.assign({}, employee);
    return shallow;
}

function deepCopy(deep) {
    deep = JSON.parse(JSON.stringify(employee));
    return deep;
}

shallowCopy(shallow);
deepCopy(deep);