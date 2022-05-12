import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './CreateForm.module.css';

const CreateForm = (props) => {
  return (
    <div className={styles.createform}>
      <hr />
      <Row>
        <Col>
          <Form.Control
            value={props.value.name}
            name="name"
            type="text"
            placeholder="Name"
            onChange={props.createHandler}
          />
        </Col>
        <Col>
          <Form.Control
            value={props.value.username}
            name="username"
            type="text"
            placeholder="User_Name"
            onChange={props.createHandler}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Control
            value={props.value.email}
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={props.createHandler}
          />
        </Col>
        <Col>
          <Form.Control
            value={props.value.phone}
            name="phone"
            type="tel"
            placeholder="Contact_Number"
            onChange={props.createHandler}
          />
        </Col>
      </Row>
      <hr />
      <div>
        <Link to="/userList">
          <Button
            className={styles.button}
            onClick={props.createClickHandler}
            variant="outline-success"
          >
            Create
          </Button>{' '}
        </Link>
        &nbsp;
        <Button className={styles.button} variant="outline-danger">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CreateForm;
