const person = {name : "tom Hanks", phone : 012928129 , gfName: "emma Watson" };
// const gfNAme = person.gfName;
// const phoneN = person.phone;
// const {phone, name , gfName} = person;

// const gfNAme = person.gfName;
// const phoneN = person.phone;
// const {phone, name , gfName} = person;

// console.log(phone, name , gfName);

const friends = ['faruk Ahmed', 'retared rich', "friem","wiuwodyhus"];
const [first, ...restFriends] = friends;
console.log(first, ...restFriends);
