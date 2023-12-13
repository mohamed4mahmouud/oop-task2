class Person {
  constructor(fullName, money, sleep, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleep;
    this.healthRate = healthRate > 100 ? 100 : healthRate;
  }
  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "Happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else if (hours > 7) {
      this.sleepMood = "lazy";
    }
  }

  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else {
      this.healthRate = 50;
    }
  }

  buy(items) {
    this.money -= items * 10;
  }
}

class Employee extends Person {
  constructor(id, fullName, healthRate, email, workMood, isManager, salary) {
    super(fullName, healthRate);
    this.id = id;
    this.email = email;
    this.workMood = workMood;
    this.salary = salary > 1000 ? salary : 1000;
    this.isManager = isManager;
  }
  work(hours) {
    if (hours === 8) {
      this.workMood = "happy";
    } else if (hours > 8) {
      this.workMood = "tired";
    } else {
      this.workMood = "lazy";
    }
  }
}

class Office {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }
  getAllEmployees() {
    return this.employees;
  }
  getEmployee(empId) {
    const employee = this.employees.find((el) => el.email === empId);
    if (employee && employee.isManager === "yes") {
      const { id, healthRate, workMood, email, isManager } = employee;
      return { id, healthRate, workMood, email, isManager };
    } else {
      return employee;
    }
  }
  hireEmployee(emp) {
    this.employees.push(emp);
  }
  fireEmployee(empId) {
    this.employees = this.employees.filter((el) => el.email !== empId);
  }
}

let office1 = new Office("office1");
let st = true;

while (st) {
  const choice = prompt(
    'Menu:\n1. Add new employee (Type "add")\n2.if Manager(type mngr) \n3.if normal(type nrml)\n' +
      '4. Quit (Type "q")'
  );
  switch (choice) {
    case "add":
      add(office1);
      break;
    case "mngr":
      diplayData(office1);
      break;
    case "nrml":
      let name = prompt("enter your name");
      let age = prompt("enter your age");
      diplayData(office1);
    case "q":
      st = false;
      break;
    default:
      alert("Invalid choice. Please enter a valid option.");
  }
}

function add(office) {
  let name = prompt("Enter employee name");
  let email = prompt("Enter employee email");
  let isManager = prompt("Enter yes if employee is manager");

  let employee = new Employee(
    email,
    name,
    100,
    email,
    "happy",
    isManager,
    2000
  );
  employee.salary = 2000;
  office.hireEmployee(employee);
  alert("Employee added successfully!");
}

function diplayData(office) {
  const email = prompt("Enter employee email");

  let data = office.getEmployee(email);
  let empdata = Object.keys(data)
    .map((e) => data[e])
    .join(" ");
  console.log(data);
  alert(empdata);
}
