import React from 'react';

const UserCard = (props) => {
const {userobj:{login, name, picture}}=props

  return (
    <li key={login.uuid}>
          <p>{name.first}</p>
          <p>{name.last}</p>
          <img src={picture.medium} alt={name} />
        </li>
  );
}

export default UserCard;
