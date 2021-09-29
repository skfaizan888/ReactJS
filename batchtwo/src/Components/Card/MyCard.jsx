import  React  from "react"
import {Card,Button} from "react-bootstrap"

export const MyCard =()=>{
    return(
   <div>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Shahrukh_Khan_during_the_promotion_of_Jab_Tak_Hai_Jaan.jpg/330px-Shahrukh_Khan_during_the_promotion_of_Jab_Tak_Hai_Jaan.jpg "/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
   </div>
 
    )
}