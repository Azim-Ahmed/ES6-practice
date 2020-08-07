const ages = [12, 17, 22, 15];
const ages2 = [23,22,33,21];
const ages3 = [13,82,34,31];
//const allAges = ages.concat(ages2).concat(5).concat(ages3);

const allages2 = [...ages, 5, ...ages2, ...ages3];
console.log(allages2);
const maxNumbers = [223,223,12,332,234];
const max = Math.max(...maxNumbers);
console.log(max);