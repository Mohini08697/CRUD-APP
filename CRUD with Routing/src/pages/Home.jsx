import React, { useState } from 'react';
import UserForm from './../components/UserForm/UserForm';
import HomeUser from './../components/Home/HomeUser';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Switch, Link, Route } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar expand="lg" bg="info" style={{ borderRadius: '10px' }}>
        <Container>
          <Link to="/home">
            <Button variant="success">Home</Button>
          </Link>
          <Link to="/userlist">
            <Button>UserList</Button>
          </Link>
          <Link to="/createuser">
            <Button variant="success">Create User</Button>
          </Link>
        </Container>
      </Navbar>
      <hr />
      <UserForm />
      <Switch>
        <Route path="/home">
          <HomeUser />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
