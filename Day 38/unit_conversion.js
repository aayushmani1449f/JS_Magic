let inches = 42;
let feet = inches / 12;
console.log(`${inches} in = ${feet} ft`);

let lengthFt = 60;
let breadthFt = 40;
let lengthMts = lengthFt * 0.3048;
let breadthMts = breadthFt * 0.3048;
let areaMts = lengthMts * breadthMts;
console.log(`Plot of 60ft x 40ft in meters is ${lengthMts}m x ${breadthMts}m`);
console.log(`Area in square meters: ${areaMts} sq.m`);

let totalAreaMts = areaMts * 25;
let areaInAcres = totalAreaMts / 4046.86;
console.log(`Area of 25 such plots in acres: ${areaInAcres} acres`);
