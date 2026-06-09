document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('payrollForm');
    const employeeList = document.getElementById('employeeList');

    // Load existing employees from local storage
    const loadEmployees = () => {
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        employeeList.innerHTML = '';
        employees.forEach(emp => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${emp.name}</td>
                <td>${emp.role}</td>
                <td>$${parseFloat(emp.salary).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
            `;
            employeeList.appendChild(row);
        });
    };

    // Initial load
    loadEmployees();

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get values from the form
        const name = document.getElementById('name').value;
        const role = document.getElementById('role').value;
        const salary = document.getElementById('salary').value;

        const newEmployee = { name, role, salary };

        // Save to local storage
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        employees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(employees));

        // Reload the list
        loadEmployees();

        // Clear the form
        form.reset();
    });
});
