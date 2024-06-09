import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { getUsers } from "../../api/index";
import Spinner from "../../components/Spinner/Spinner";
import UserCard from "../../components/UserCard/UserCard";
import styles from './UserListPage.module.scss'

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // getUsers(prompt())
    getUsers(15)
      .then((data) => {
        setUsers(data.results);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const userMap = () =>
    users.map((userobj) => {
      return (
        <UserCard key={userobj.login.uuid} userobj={userobj}/>
      );
    });

  return (
    <div>
      <Header />
      {users && <ul className={styles.usersWrapper}>{userMap()}</ul>}
      {isLoading && <div>{<Spinner />}</div>}
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default UserList;