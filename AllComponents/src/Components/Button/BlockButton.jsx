import {Button } from "react-bootstrap"

export const BlockButton=()=>{
    return(
<div className="d-grid gap-2">
  
  <Button variant="primary" size="lg">
    Block level button
  </Button>
  <Button variant="secondary" size="lg">
    Block level button
  </Button>
</div>
    )
}