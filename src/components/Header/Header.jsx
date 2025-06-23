// src/components/Header/Header.jsx

"use client"; // Bu satır ÇOK ÖNEMLİ! useState ve onClick gibi tarayıcı etkileşimleri için gereklidir.

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image"; // İkonlar için Image bileşenini ekliyoruz

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Mevcut durumun tersini ayarla (açıksa kapat, kapalıysa aç)
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Component unmount olduğunda stilin temizlenmesi için
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">W.</Link>
        </div>

        <nav className={styles.navDesktop}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#">New</Link>
            </li>
            <li>
              <Link href="/#">Popular</Link>
            </li>
            <li>
              <Link href="/#">Trending</Link>
            </li>
            <li>
              <Link href="/#">Categories</Link>
            </li>
          </ul>
        </nav>

        <div
          className={`${styles.hamburger} ${isNavOpen ? styles.active : ""}`}
          onClick={toggleNav}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </header>

      <div
        className={`${styles.navMobileContainer} ${
          isNavOpen ? styles.active : ""
        }`}
      >
        <div className={styles.overlay} onClick={toggleNav}></div>

        <nav className={styles.navMobile}>
          <div className={styles.closeIcon} onClick={toggleNav}></div>
          <ul>
            <li>
              <Link href="/" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/new" onClick={toggleNav}>
                New
              </Link>
            </li>
            <li>
              <Link href="/#" onClick={toggleNav}>
                Popular
              </Link>
            </li>
            <li>
              <Link href="/#" onClick={toggleNav}>
                Trending
              </Link>
            </li>
            <li>
              <Link href="/#" onClick={toggleNav}>
                Categories
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
