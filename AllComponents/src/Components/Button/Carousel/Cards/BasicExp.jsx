import { Card,Button} from "react-bootstrap";
import { KichenSing } from "./KichenSing";
import { ImageCaps } from "./ImageCaps";

export const BasicExp=()=>{
    return(
        <div>
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/330px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      <ImageCaps/>
      <KichenSing/>
     
        </div>
        
    )
}