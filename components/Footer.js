import styles from './Footer.module.css';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Logo + Name */}
      <div className={styles.logoSection}>
        <Image 
          src="/images/heartbridge-foundation-logo.png" 
          alt="HeartBridge Foundation Logo" 
          width={40} 
          height={40} 
          className={styles.logoImg}
        />
        <span>HeartBridge Foundation</span>
      </div>

      {/* Email */}
      <div className={styles.contact}>
        <a href="mailto:info@heartbridge.org">info@heartbridge.org</a>
      </div>

      {/* Copyright */}
      <p className={styles.copy}>
        © {new Date().getFullYear()} HeartBridge Foundation. All rights reserved.
      </p>
    </footer>
  );
}
