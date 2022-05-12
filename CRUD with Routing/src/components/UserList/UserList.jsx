import React from 'react';
import { Table, Button } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import EditForm from './../EditForm/EditForm';

const UserList = (props) => {
  const list = props.list.map((item, index) => {
    return (
      <>
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.username}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>
            <Link to="/editform">
              <Button variant="success" onClick={()=>{props.editHandler(index)}}>Edit</Button>
            </Link>
            &nbsp;
            <Button
              variant="danger"
              onClick={() => {
                props.deleteHandler(index);
              }}
            >
              Delete
            </Button>
          </td>
          
          


        </tr>
      </>
    );
  });
  return (
    <Table
      style={{ border: '2px dashed black' }}
      striped
      bordered
      hover
      variant="success"
    >
      <thead>
        <tr>
          <th>Sr.No.</th>
          <th>First Name</th>
          <th>User Name</th>
          <th>E-mail Id</th>
          <th>Contact Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </Table>
  );
};

export default UserList;
