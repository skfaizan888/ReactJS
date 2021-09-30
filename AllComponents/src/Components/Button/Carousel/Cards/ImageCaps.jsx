import { Card } from "react-bootstrap"

export const ImageCaps=()=>{
    return(
        <>
  <Card>
    <Card.Img variant="top" src="logo.jpg" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="Logo.jbj" />
  </Card>
</>
    )
}