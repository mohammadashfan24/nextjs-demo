import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftContent}>
        <p className={styles.title}>Get Event Updates</p>
        <div className={styles.search}>
          <input type="text" placeholder="Enter email address" />
          <button type="submit">Search</button>
        </div>
      </div>
      <div className={styles.rightContent}>
        <h2>Contact Us</h2>
        <div className={styles.emailWrapper}>
          <img src="./images/contacts/email.svg" alt="email logo"/>
          <span>events@18candleriggs.com</span>
        </div>
        <div className={styles.phoneWrapper}>
          <img src="./images/contacts/phone.svg" alt="phone logo"/>
          <span>07936 558303</span>
        </div>
        <div className={styles.socialNetworks}>
          <img src="./images/contacts/facebook.svg" alt="facebook logo"/>
          <img src="./images/contacts/instagram.svg" alt="instagram logo"/>
        </div>
        <div className={styles.socialNetworksMobile}>
          <img src="./images/contacts/facebook.svg" alt="facebook logo"/>
          <img src="./images/contacts/instagram.svg" alt="instagram logo"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
