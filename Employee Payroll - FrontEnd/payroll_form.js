class EmployeePayrollData {
    // getter and setter method
    get name() { return this._name; }
    set name(name) { this._name = name; }

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) { this._profilePic = profilePic; }

    get gender() { return this._gender; }
    set gender(gender) { this._gender = gender; }

    get department() { return this._department; }
    set department(department) { this._department = department; }

    get salary() { return this._salary; }
    set salary(salary) { this._salary = salary; }

    get note() { return this._note; }
    set note(note) { this._note = note; }

    get startDate() { return this._startDate; }
    set startDate(startDate) { this._startDate = startDate; }
    
    // method
    toString() {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : 
                        new Date(this.startDate).toLocaleDateString('en-GB', options);
        return "name=" + this.name + ", gender=" + this.gender + 
               ", profilePic=" + this.profilePic + ", department=" + this.department +
               ", salary=" + this.salary + ", startDate=" + empDate + ", note=" + this.note;
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    name.addEventListener('input', function() {
        if(name.value.length == 0) return;
        // Validation could be added here
    });
});

const save = (event) => {
    event.preventDefault();
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
        window.location.href = 'home.html';
    } catch (e) {
        console.error(e);
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    employeePayrollData.name = getInputValueById('#name');
    employeePayrollData.profilePic = getSelectedValues('[name=profilePic]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + 
               getInputValueById('#month') + " " + 
               getInputValueById('#year');
    employeePayrollData.startDate = date;
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    
    if(employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData];
    }
    
    alert("Employee saved successfully!\n" + employeePayrollData.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}

document.querySelector('#payrollForm').addEventListener('submit', save);
