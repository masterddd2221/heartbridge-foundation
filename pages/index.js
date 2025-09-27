// pages/index.js
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Our Patient Portal</h1>
          <p>
            A simple system to view patient records and keep track of important
            details. Explore the profiles and learn more about each patient.
          </p>
          <div className={styles.buttons}>
            <Link href="/patients" className={styles.btnPrimary}>
              View Patients
            </Link>
            <Link href="/about" className={styles.btnSecondary}>
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Patients */}
      <section className={styles.featured}>
        <h2>Featured Patients</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>John Doe</h3>
            <p>Living with diabetes and hypertension.</p>
            <Link href="/patients/1">View Profile</Link>
          </div>
          <div className={styles.card}>
            <h3>Jane Smith</h3>
            <p>Recovering from knee surgery, active in rehabilitation.</p>
            <Link href="/patients/2">View Profile</Link>
          </div>
          <div className={styles.card}>
            <h3>Michael Johnson</h3>
            <p>Asthma patient with a history of allergies.</p>
            <Link href="/patients/3">View Profile</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>

        <div className={styles.footerLinks}>
          <Link href="/about">About</Link>
          <Link href="/patients">Patients</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
