import {Button ,Badge} from "react-bootstrap"

export const Profile=()=>{
    return(
        <Button variant="primary">
  Profile <Badge bg="secondary">9</Badge>
  <span className="visually-hidden">unread messages</span>
</Button>
    )
}