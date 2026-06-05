const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

const getWorkingHours = (empCheck) => {
    switch (empCheck) {
        case 1: return 4;
        case 2: return 8;
        default: return 0;
    }
};

const calcDailyWage = (empHrs) => empHrs * WAGE_PER_HOUR;

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString() {
            return "Day" + this.dayNum + " => Wage: " + this.dailyWage;
        }
    });
}

let totalWage = empDailyWageArr.filter(dailyWageObj => dailyWageObj.dailyWage > 0)
    .reduce((totalWage, dailyWageObj) => totalWage += dailyWageObj.dailyWage, 0);
console.log(totalWage);

let mapDayWithWageArr = empDailyWageArr.map(dailyWageObj => dailyWageObj.toString());
console.log(mapDayWithWageArr);

let fullDayWageArr = empDailyWageArr.filter(dailyWageObj => dailyWageObj.dailyWage === 160);
console.log(fullDayWageArr.map(obj => obj.toString()));

let firstFullTime = empDailyWageArr.find(dailyWageObj => dailyWageObj.dailyWage === 160);
console.log(firstFullTime ? firstFullTime.toString() : undefined);

let isAllFulltimeWage = fullDayWageArr.every(dailyWageObj => dailyWageObj.dailyWage === 160);
console.log(isAllFulltimeWage);

let isAnyPartTimeWage = empDailyWageArr.some(dailyWageObj => dailyWageObj.dailyWage === 80);
console.log(isAnyPartTimeWage);

let totalDaysWorked = empDailyWageArr.filter(dailyWageObj => dailyWageObj.dailyWage > 0).length;
console.log(totalDaysWorked);
