import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <section className={styles.wrapper}>
      <nav className={styles.navContainer}>
          <div>
            <img src="https://icons.iconarchive.com/icons/dapino/flowered-folder/256/folder-flower-pink-icon.png" alt="header image" />
          </div>
        <ul className={styles.links}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/todo'>Todo</Link></li>
        </ul>
      </nav>
      
    </section>
  );
}

export default Header;
