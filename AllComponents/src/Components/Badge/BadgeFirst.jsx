import { Badge } from "react-bootstrap"
import { ContExtvial } from "./ContExtvial"
import { Pill } from "./Pill"
import {Profile} from "./Profile"

export const BadgeFirst=()=>{
    return(
        <div>
  <h1>
    Example heading <Badge bg="secondary">New</Badge>
  </h1>
  <h2>
    Example heading <Badge bg="secondary">New</Badge>
  </h2>
  <h3>
    Example heading <Badge bg="secondary">New</Badge>
  </h3>
  <h4>
    Example heading <Badge bg="secondary">New</Badge>
  </h4>
  <h5>
    Example heading <Badge bg="secondary">New</Badge>
  </h5>
  <h6>
    Example heading <Badge bg="secondary">New</Badge>
  </h6>
   
   <ContExtvial/>
   <Pill/>
  <Profile/>
</div>
        
    )
}