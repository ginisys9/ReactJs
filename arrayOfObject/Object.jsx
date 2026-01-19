
function Object(){
  const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
function fullName(person){
    return person.firstName + " " + person.lastName;
}
const characters = [
  { age: 1, first: "Tim", last: "Draper" },
  { age: 17, first: "Davage", last: "Boies" },
  { age: 199, first: "Tim", last: "Kemp" },
  { age: 75, first: "Henry", last: "Mosley" },
  { age: 444, first: "Elizabeth", last: "Holmes" },
  { age: 95, first: "Donald", last: "Lucas"},
  { age: 186, first: "Larry", last: "Ellison" },
  { age: 364, first: "Channing", last: "Robertson"},
  { age: 285, first: "Charles", last: "Fleischmann"},
  { age: 33, first: "John", last: "Howard"}
];
function getFullName(char){
     return  char.first + " " + char.last;
}
   return (
    <>
    <h2>Object list are given below</h2>
    <p>fullName:{fullName(person)}</p>
    <p>age:{person.age}</p>
    <p>eyeColor:{person.eyeColor}</p>
    <h2>Person details</h2>
    <ul>
      {characters.map(function(value,index){
         return  <li>listNumber: {index} : {getFullName(value)} is {value.age} years old</li>
      })}
    </ul>
    </>
   )
}
export default Object;