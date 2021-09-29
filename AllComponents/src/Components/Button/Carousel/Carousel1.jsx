import {Carousel} from "react-bootstrap"

export const Carousel1=()=>{
    return(
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/330px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg"
      alt="Sharukh Khan Fisrt"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Shahrukh_Khan_during_the_promotion_of_Jab_Tak_Hai_Jaan.jpg/330px-Shahrukh_Khan_during_the_promotion_of_Jab_Tak_Hai_Jaan.jpg"
      alt="Sharukh Khan Second"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-50"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Narendra_Modi_2021.jpg/330px-Narendra_Modi_2021.jpg"
      alt="Sharukh Khan Third"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>

    )
}