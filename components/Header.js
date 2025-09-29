import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Logo Section (now clickable, goes home) */}
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/heartbridge-foundation-logo.png"
          alt="HeartBridge Foundation Logo"
          width={50}
          height={50}
          className={styles.logoImg}
        />
        <span>HeartBridge Foundation</span>
      </Link>

      {/* Hamburger button (mobile only) */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Nav links */}
      <nav className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/doctor" className={styles.navLink}>Doctor</Link>
        <Link href="/patients" className={styles.navLink}>Patients</Link>
        <Link href="/team" className={styles.navLink}>Team</Link>
        <Link href="/testimonials" className={styles.navLink}>Testimonials</Link>
        <Link href="/donate" className={styles.navLink}>Donate</Link>
        <Link href="/contact" className={styles.navLink}>Contact</Link>
        <Link href="/waiting-list" className={styles.navLink}>Waiting List</Link>
      </nav>
    </header>
  );
}
