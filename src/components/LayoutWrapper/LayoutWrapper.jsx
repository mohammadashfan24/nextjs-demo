import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './LayoutWrapper.module.scss';

const LayoutWrapper = ({ children }) => {
  return (
    <div className={styles.root}>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default LayoutWrapper;