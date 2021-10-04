import React, { useState } from "react"
import {InputGroup,FormControl , Form} from "react-bootstrap"


export const Home =()=>{
    const [p , setP]=useState(0)
    const [n , setN]=useState(0)
    const [r , setR]=useState(0)
    const handleCalcEMI=()=>{};
    return(
          <>
          <h1>Home Loan</h1>
  <InputGroup className="mb-3">
    <FormControl
    type="Number"
    Min="1000"
    max={"1000000"}
    onChange={(e)=> setP(e.target.value)}
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
    <InputGroup.Text>$</InputGroup.Text>
  </InputGroup>

  <InputGroup className="mb-3">
  <InputGroup.Text>%</InputGroup.Text>
    <FormControl
    type="Number"
    onChange={(e) => setN(e.target.value)}

      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
  
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl aria-label="Amount (to the nearest dollar)"
    type="Number"
    onChange={(e)=> setR(e.target.value)} />
    <InputGroup.Text>Yr</InputGroup.Text>
  </InputGroup>
  <p>EMI: {Math.ceil((Number(p) + Number((p * n * r) / 100)) / (n * 12))}</p>
  <p>Processing:{(p*2)/100}</p>
</>  

    )
}