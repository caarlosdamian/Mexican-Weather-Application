import cities from '../helpers/Cities.js'
export default function CitiesTable() {
  return <>
  {cities.map((value)=>(
      <p>{value.name}</p>
  ))}</>;
}   
