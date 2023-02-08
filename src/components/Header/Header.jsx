import React, { useState } from "react";
import NavItems from "../NavItems/NavItems";
import styles from "./Header.module.scss";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.leftContent}>
        <div className={styles.logo}>
          <img src="/images/logo.svg" />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Search"
            className={styles.textInput}
          />
          <button className={styles.searchBtn}>
            <img src="/images/search.svg" width="15" height="15" />
          </button>
        </div>
      </div>
      <div className={styles.rightContent}>
        <button className={styles.searchBtnForMobile}>
          <img src="/images/search.svg" width="15" height="15" />
        </button>
        <NavItems customClass={styles.navItems} />
        <div className={styles.hamberger} onClick={() => setOpenModal(!openModal)}>
          <img src="./images/hamberger.svg" />
          {openModal && (
            <div className={styles.modal}>
              <NavItems customClass={styles.mobileNavItems} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
