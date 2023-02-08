import Link from "next/link";
import React from "react";
import styles from "./NavItems.module.scss";
import classNames from "classnames";

const headerLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "What's on",
    href: "/whats-on",
  },
  {
    title: "Book Venue",
    href: "/book-venue",
  },
  {
    title: "Galary",
    href: "/galary",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

const NavItems = ({ customClass }) => {
  return (
    <div className={styles.navItemsWrapper}>
      {headerLinks.map((item) => (
        <Link
          className={classNames(styles.navItem, customClass)}
          href={item.href}
          replace
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
