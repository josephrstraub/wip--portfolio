// @flow
import React from 'react';
import logo from 'assets/logo.svg';
import styles from './styles.scss';

export default function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <h1 className={styles['App-title']}>Welcome to React</h1>
      </header>
      <p className={['App-intro']}>
        To get started, edit <code>src/components/App/index.jsx</code> and save to reload.
      </p>
    </div>
  );
}
