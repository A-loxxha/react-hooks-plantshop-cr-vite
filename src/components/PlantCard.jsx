import React from "react";
import { useEffect, useState } from "react";

function PlantCard() {

const [plants, setPlant] = useState([]);

useEffect(()=>{
  fetch("http://localhost:6001/plants")
  .then((response)=> response.json())
  .then((data)=> setPlant(data))
},[])

  return (
    <div>
      {plants.map((plant)=>{
        return(
          <li key={plant.id} className="card" data-testid="plant-item">
            <img src={plant.image} alt={plant.name} />
            <h4>{plant.name}</h4>
            <p>Price:{plant.price}</p>
            {true ? (
              <button className="primary">In Stock</button>
            ) : (
              <button>Out of Stock</button>
            )}
          </li>
        )
      })}
    </div>
  );
}

export default PlantCard;
