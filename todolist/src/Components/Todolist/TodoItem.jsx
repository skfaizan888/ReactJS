import React from "react";
import { Form, Button, Col, Row, Card } from "react-bootstrap";

export const TodoItem = ({ item, handleDelete }) => {
  return (
    <div>
      <Card>
        <Row>
          <Col>
            <Form.Check></Form.Check>
          </Col>
          <Col>
            <Form.Label> {item} </Form.Label>
          </Col>
          <Col>
            <Button onClick={(item) => handleDelete(item)}>Delete</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
