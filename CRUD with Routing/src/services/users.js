import React from 'react';

export const users = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => users);
};

export const createUsers = (user) => {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((users) => users);
};

export const editUsers = (user) => {
  return fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((users) => users);
};
