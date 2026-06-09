const list = document.getElementById('employeeList'), $ = id => document.getElementById(id);

const load = async () => {
    try {
        const res = await fetch('/Employee.json');
        const emps = await res.json();
        list.innerHTML = emps.map(e => `<tr><td>${e.name}</td><td>${e.role}</td><td>$${Number(e.salary).toLocaleString('en',{minimumFractionDigits:2})}</td></tr>`).join('');
        return emps;
    } catch(err) {
        return [];
    }
};

load();

$('payrollForm').onsubmit = async e => {
    e.preventDefault();
    
    // Get current list
    const emps = await load();
    
    // Add new employee
    emps.push({ name: $('name').value, role: $('role').value, salary: $('salary').value });
    
    // Send to server to write to file
    await fetch('/save', {
        method: 'POST',
        body: JSON.stringify(emps, null, 4)
    });
    
    load();
    e.target.reset();
};
