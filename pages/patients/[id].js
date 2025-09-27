import { useRouter } from "next/router";
import patientsData from "../../data/patientsData";
import styles from "../../styles/PatientDetail.module.css";
import Link from "next/link";

export default function PatientDetail() {
  const router = useRouter();
  const { id } = router.query;
  const patient = patientsData.find((p) => p.id.toString() === id);

  if (!patient) {
    return <p className={styles.notFound}>Patient not found.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{patient.name}’s Story</h1>
      <img src={patient.image} alt={patient.name} className={styles.photo} />

      <section className={styles.section}>
        <h2>Background</h2>
        <p>{patient.background}</p>
      </section>

      <section className={styles.section}>
        <h2>Treatment</h2>
        <p>{patient.treatment}</p>
      </section>

      <section className={styles.section}>
        <h2>Outcome</h2>
        <p>{patient.outcome}</p>
      </section>

      <section className={styles.section}>
        <h2>How HeartBridge Helped</h2>
        <p>{patient.support}</p>
      </section>

      {/* Donate button linking to /donate */}
      <div className={styles.donateBox}>
        <Link href="/donate" className={styles.donateButton}>
          Donate to Support More Patients
        </Link>
      </div>

      {/* Back link */}
      <div className={styles.backLink}>
        <Link href="/patients">← Back to Patients</Link>
      </div>
    </div>
  );
}
