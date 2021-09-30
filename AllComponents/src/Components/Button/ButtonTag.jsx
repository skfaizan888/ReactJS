import { Button, Row ,Col } from "react-bootstrap"

export const ButtonTag =()=>{
    return(
        <Row>
            <Col>
  <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
  <Button as="input" type="button" value="Input" />{' '}
  <Button as="input" type="submit" value="Submit" />{' '}
  <Button as="input" type="reset" value="Reset" />
  </Col>
</Row>
    )
}