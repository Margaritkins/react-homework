import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section>
      <Header />
      <main className={styles.container}>
        <h2 className={styles.title}>Home Page</h2>
        <h3 className={styles.subtitle}>
          Welcome to our Task and User Management App!
        </h3>
        <article className={styles.article}>
          <p>
            Our app helps you easily organize and track your tasks, as well as
            manage users. The main features of the app include
          </p>
          <ul className={styles.description}>
            <li>
              <Link to="/todo">Task List:</Link>{" "}
              <span>
                Create, edit, and delete tasks, mark them as completed.
              </span>
            </li>
            <li>
              <Link to="/users">Users:</Link>{" "}
              <span>
                Add new users, edit their information, and delete them if
                necessary.
              </span>
            </li>
            <p>
              Intuitive Interface: Easy navigation between pages for quick
              access to needed functions.
            </p>
            <p>
              Go to the{" "}
              <a href="/users">
              </a>{" "}
                <Link to="/users">Users</Link>
                {" "}page to manage your users
            </p>
            <p>
              or the{" "}
              <a href="/todo">
              </a>{" "}
                <Link to="/todo">Task List</Link>
                {" "}page to manage your tasks.
            </p>
          </ul>
        </article>
      </main>
    </section>
  );
};

export default Home;
