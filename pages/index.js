// pages/index.js
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to HeartBridge Foundation</h1>
          <p>
            We provide life-saving support for patients with critical medical needs. 
            Explore their stories and see how compassion changes lives.
          </p>
          <div className={styles.buttons}>
            <Link href="/patients" className={styles.btnPrimary}>
              View Patients
            </Link>
            <Link href="/about" className={styles.btnSecondary}>
              About Us
            </Link>
            <Link href="/join" className={styles.btnAccent}>
              Join Waiting List
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Patients */}
      <section className={styles.featured}>
        <h2>Featured Patients</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Mary A.</h3>
            <p>Mary underwent a life-saving heart surgery with the support of HeartBridge.</p>
            <Link href="/patients/1">View Profile</Link>
          </div>
          <div className={styles.card}>
            <h3>Samuel P.</h3>
            <p>Samuel received life-saving medication and regular checkups thanks to donors.</p>
            <Link href="/patients/2">View Profile</Link>
          </div>
          <div className={styles.card}>
            <h3>Bessie L.</h3>
            <p>Bessie’s full recovery was made possible through urgent intervention.</p>
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
          <Link href="/join"><strong>Join Waiting List</strong></Link>
        </div>
      </footer>
    </div>
  );
}
