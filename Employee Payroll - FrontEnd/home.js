let empPayrollList;

window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector("#emp-count").textContent = empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? 
           JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
    if (empPayrollList.length == 0) return;
    
    const headerHtml = `
        <tr>
            <th></th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>DEPARTMENT</th>
            <th>SALARY</th>
            <th>START DATE</th>
            <th>ACTIONS</th>
        </tr>
    `;
    
    let innerHtml = `${headerHtml}`;
    
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${empPayrollData._profilePic}" width="30" height="30" style="border-radius: 50%;"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>₹ ${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png" width="16" height="16" style="cursor: pointer; margin-right: 10px;">
                <img id="1" alt="edit" onclick="update(this)" src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" width="16" height="16" style="cursor: pointer;">
            </td>
        </tr>
        `;
    }
    
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    if (deptList) {
        for (const dept of deptList) {
            deptHtml = `${deptHtml} <div class='dept-badge dept-${dept.toLowerCase()}'>${dept}</div>`;
        }
    }
    return deptHtml;
}
