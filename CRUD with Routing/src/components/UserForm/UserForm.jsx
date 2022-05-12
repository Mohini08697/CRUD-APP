import React, { useState, useEffect } from 'react';
import CreateForm from './../CreateForm/CreateForm';
import UserList from './../UserList/UserList';
import { Route, Switch } from 'react-router-dom';
import { users, createUsers, editUsers } from './../../services/users';
import EditForm from './../EditForm/EditForm';

const UserForm = () => {
  const [createVal, setCreateVal] = useState('');
  const [editVal, setEditVal] = useState({});
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    users().then((data) => {
      setList(data);
    });
  }, []);

  const onDeleteHandler = (itemIndex) => {
    const userList = [...list];
    userList.splice(itemIndex, 1);
    setList(userList);
  };

  const onEditHandler = (itemIndex) => {
    setIndex(itemIndex);
  };

  const createChangeHandler = (e) => {
    setCreateVal({
      ...createVal,
      [e.target.name]: e.target.value,
      isEditing: false,
    });
  };

  const editChangeHandler = (e) => {
    setEditVal({ ...editVal, [e.target.name]: e.target.value });
  };
  console.log(editVal);

  const onCreateHandler = () => {
    createUsers(createVal).then((user) => {
      const userList = [...list];
      userList.push(user);
      setList(userList);
      setCreateVal('');
    });
  };

  const onUpdateHandler = (index) => {
    
    editUsers(editVal).then((user) => {
      console.log(user);
      const userList = [...list];
      userList[index] = user;
      setList(userList);
      setEditVal('');
    });
  };

  return (
    <div>
      <Switch>
        <Route path="/createuser">
          <CreateForm
            value={{ createVal }}
            createHandler={createChangeHandler}
            createClickHandler={onCreateHandler}
          />
          <hr />
        </Route>
      </Switch>

      <Switch>
        <Route path="/userList">
          <UserList
            editValue={{ editVal }}
            editHandler={onEditHandler}
            deleteHandler={onDeleteHandler}
            list={list}
          />
        </Route>
      </Switch>

      <Switch>
        <Route path="/editform">
          <EditForm
            updateHandler={onUpdateHandler}
            index={index}
            value={editVal}
            changeEditHandler={editChangeHandler}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default UserForm;
