import React from "react";
import styles from "./UserCard.module.scss";

const UserCard = (props) => {
  const {
    userobj: { login, name, picture },
  } = props;

  return (
    <li key={login.uuid} className={styles.userCard}>
      <div className={styles.nameWrapper}>
        <p>{name.first}</p>
        <p>{name.last}</p>
      </div>
      <img src={picture.medium} alt={name} />
    </li>
  );
};

export default UserCard;
