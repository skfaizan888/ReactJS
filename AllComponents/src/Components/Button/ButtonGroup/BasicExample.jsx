import {ButtonGroup,Button} from "react-bootstrap"
import { ToolsBut } from "./ToolsBut"
export const BasicExample=()=>{
    return(
     <div>
     <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
    
    <ToolsBut/>
     </div>


     
    )
}