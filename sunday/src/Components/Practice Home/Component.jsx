import React from "react";
import { person } from "./Compo";

export const Component =()=>{
    const data=person.data;
    const data2=data.filter((item)=> item.age >=20);
    console.log(data)
    return(
        <div>
            <h1>Faizan Ahmed</h1>
           
                {data2.map((item)=>{
                    return(
                <div>
                <h3>{item.name}</h3>
                <h3>{item.age}</h3>
                <h3>{item.Add}</h3>
                </div>
                );
            })
            };
        </div>
    )
}    
