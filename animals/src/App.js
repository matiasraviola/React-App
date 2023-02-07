import { useState } from "react";
import AnimalShow from "./AnimalShow";

function App (){
    function getRandomAnimals() {
        const animals = ['bird','cat','cow','dog','gator','horse'];
        return animals[Math.floor(Math.random()*animals.length)]
    }
    const [animals,setAnimals]=useState([])
    const handleClick = ()=>{ setAnimals([...animals, getRandomAnimals() ])};
    const renderedAnimals =animals.map((animal,index)=> {
        return <AnimalShow type={animal} key={index}/>
    })
    return(
        <div>
            <button onClick={handleClick}>Add Animals</button>
            <div>{animals}</div>
        </div>
    )
}

export default App;
