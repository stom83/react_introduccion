import React from 'react';
import {useEffect, useState} from 'react';
function Card(props){
  const [name, updateName] = useState(props.name);
  useEffect(()=> {
    console.log(name);
  })

  function imprime(){}
  
  return (
    <div>
      <div>
        <img
        src={props.icon}
        alt={props.name}
        />
      </div>
    </div>
  )
}
export default Card;