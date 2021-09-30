import {Card,ListGroupItem,ListGroup} from "react-bootstrap"

export const KichenSing=()=>{
    return(
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Alia_Bhatt_grace_the_screening_of_Netflix%E2%80%99s_film_Guilty_%282%29_%28cropped%29.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    )
}