import {Form } from "react-bootstrap"

 export const Colors=()=>{
    return(
        <>
  <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
  <Form.Control
    type="color"
    id="exampleColorInput"
    defaultValue="#563d7c"
    title="Choose your color"
  />
</>
    )
}

