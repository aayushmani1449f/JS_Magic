class EmployeePayrollData {
    id;
    salary;
    gender;
    startDate;

    constructor(...params) {
        let idRegex = /^[1-9]\d*$/;
        if (idRegex.test(params[0])) {
            this.id = params[0];
        } else {
            throw "ID is incorrect!";
        }
        
        let salaryRegex = /^[1-9]\d*$/;
        if (salaryRegex.test(params[1])) {
            this.salary = params[1];
        } else {
            throw "Salary is incorrect!";
        }

        let genderRegex = /^[MF]$/;
        if (genderRegex.test(params[2])) {
            this.gender = params[2];
        } else {
            throw "Gender is incorrect!";
        }

        if (params[3] <= new Date()) {
            this.startDate = params[3];
        } else {
            throw "Start Date is incorrect!";
        }
    }
    
    toString() {
        return "id=" + this.id + ", salary=" + this.salary + ", gender=" + this.gender + ", startDate=" + this.startDate;
    }
}

try {
    let employee = new EmployeePayrollData(1, 50000, "M", new Date("2020-01-01"));
    console.log(employee.toString());
    let employee2 = new EmployeePayrollData(0, 50000, "M", new Date("2020-01-01"));
    console.log(employee2.toString());
} catch (e) {
    console.log(e);
}
