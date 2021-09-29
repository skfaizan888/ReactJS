import React from "react"
import  Carousel from 'react-bootstrap/Carousel'


export const Reducer=()=>{
  return(
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Shahrukh_Khan_during_the_promotion_of_Jab_Tak_Hai_Jaan.jpg/330px-Shahrukh_Khan_during_the_promotion_of_Jab_Tak_Hai_Jaan.jpg"
      alt="Sharukh Khan"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Shahrukh_Khan_during_the_promotion_of_Jab_Tak_Hai_Jaan.jpg/330px-Shahrukh_Khan_during_the_promotion_of_Jab_Tak_Hai_Jaan.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Shahrukh_Khan_during_the_promotion_of_Jab_Tak_Hai_Jaan.jpg/330px-Shahrukh_Khan_during_the_promotion_of_Jab_Tak_Hai_Jaan.jpg  "
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  )
}