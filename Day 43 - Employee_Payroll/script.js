document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('payrollForm');
    const employeeList = document.getElementById('employeeList');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get values from the form
        const name = document.getElementById('name').value;
        const role = document.getElementById('role').value;
        const salary = document.getElementById('salary').value;

        // Create a new row
        const row = document.createElement('tr');

        // Insert cells
        row.innerHTML = `
            <td>${name}</td>
            <td>${role}</td>
            <td>$${parseFloat(salary).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
        `;

        // Append to the table
        employeeList.appendChild(row);

        // Clear the form
        form.reset();
    });
});
