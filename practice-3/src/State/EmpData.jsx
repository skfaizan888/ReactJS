import React, { useEffect, useState } from "react";

export const EmpData = () => {
  const selector = useState(getAllemp);
  const [empData, setEmpData] = useState();
  useEffect(() => {
    setEmpData(selector);
  }, [selector]);
  return (
    <div>
        {empData &&
        empData.map((item)=>{
       return(
        <div>

             <h3>EMP Name:</h3>
             <h3>EMP Id:</h3>
             <h3>EMP Contact:</h3>
             <h3>EMP Address:</h3>

         </div>
        
       )
       } ) }
    
    </div>
  );
};
