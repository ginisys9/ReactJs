
function Array(){
const points = [
  100, 20, 30, 44, 55, 70, 90, 10, 30, 45, 60, 80, 100, 100,
];
 const dayMonth=[
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun",
  "Jul", "Aug", "Sep",
  "Oct", "Nov", "Des",

]

    return(
        <>
        <h2> students list</h2>
        <ul>
         {points.map(function(value,index){
          return  <li>{index} - {value}</li>
         })}
        </ul>
        <div>
         <ul>
          {dayMonth.map((value,index)=>(
            <li>{index}-{value}</li>
          ))}
         </ul>
        </div>
        </>
    )
}
export default Array;