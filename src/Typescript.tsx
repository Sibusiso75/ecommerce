import React from 'react'
let numbers: number = 23;
let girls:boolean = true;

function Typescript({name, age, gender, married}
    :{name:string, age:number, gender:string, married:boolean}
) {
  return (
    <div>
        <p><b>Name: </b>{name}</p>
        <p><b>Age: </b>{age}</p>
        <p><b>Gender: </b>{gender}</p>
        <p><b>Married: </b>{married}</p>
    </div>
  )
}

export default Typescript