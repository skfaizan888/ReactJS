import { Form, Row ,Col,Button} from "react-bootstrap"


export const Myform2=()=>{
    return(
        <div>
            <Form>
                <Row>
                    <Col>
                    <Form.Label>Fname:</Form.Label>
                    <Form.Control/>
                    </Col>
                    <Col>
                    <Form.Label>Mname:</Form.Label>
                    <Form.Control/>
                    </Col>
                    <Col>
                    <Form.Label>lname:</Form.Label>
                    <Form.Control/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Label>Contact:</Form.Label>
                    <Form.Control/>
                    </Col>
                    <Col lg={8} >
                    <Form.Label>E-Mail:</Form.Label>
                    <Form.Control/>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Form.Label>ParAdress:</Form.Label>
                    <Form.Control/>
                    </Col>
                </Row>
               <Row>
               <Col>
                    <Form.Label>PriAdress:</Form.Label>
                    <Form.Control/>
                    </Col>
               </Row>
            
                    <Button variant="primary" type="submit">  Submit </Button> 
                 
            </Form>
        </div>
    )
}