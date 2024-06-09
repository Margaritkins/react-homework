import React from 'react';
import Header from '../../components/Header/Header';
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <>
      <Header />
      <div className={styles.notFound}>
      <h1>Wrong page address</h1>
      </div>
    </>
  );
}

export default NotFound;
