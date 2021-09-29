import { Form } from "react-bootstrap"
import { Row,Col,Button} from "react-bootstrap"


export const MyForms2=()=>{
    return(
        <div>
            <Row>
                   <Col lg={3}>
                    <Form.Label>FName:</Form.Label>
                    <Form.Control/>
                   </Col>
                   <Col lg={3}>
                   <Form.Label>MName:</Form.Label>
                   <Form.Control/>
                   </Col>
                   <Col lg={3}>
                   <Form.Label>LName:</Form.Label>
                   <Form.Control/>
                   </Col>
            </Row>
            <Row>
                <Col>
                <Form.Label>Contact:</Form.Label>
                <Form.Control/>
                </Col>
                <Col>
                <Form.Label>E-mail:</Form.Label>
                <Form.Control/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Label>address:</Form.Label>
                <Form.Control/>
                </Col>
            </Row>
                <Button variant="primary">Primary</Button>{' '}
             
        </div>

    )
}