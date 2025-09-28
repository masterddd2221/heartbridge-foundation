// pages/patients/[id].js
import { useRouter } from "next/router";
import patientsData from "../../data/patientsData";
import styles from "../../styles/PatientDetail.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PatientDetail() {
  const router = useRouter();
  const { id } = router.query;
  const patient = patientsData.find((p) => p.id.toString() === id);

  if (!patient) {
    return <p className={styles.notFound}>Patient not found.</p>;
  }

  // Animation variants for reusability
  const fadeSlideUp = {
    hidden: { y: 30, opacity: 0 },
    visible: (i = 1) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className={styles.title}
        variants={fadeSlideUp}
        custom={0}
      >
        {patient.name}’s Story
      </motion.h1>

      <motion.img
        src={patient.image}
        alt={patient.name}
        className={styles.photo}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />

      <motion.section
        className={styles.section}
        variants={fadeSlideUp}
        custom={1}
      >
        <h2>Background</h2>
        <p>{patient.background}</p>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={fadeSlideUp}
        custom={2}
      >
        <h2>Treatment</h2>
        <p>{patient.treatment}</p>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={fadeSlideUp}
        custom={3}
      >
        <h2>Outcome</h2>
        <p>{patient.outcome}</p>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={fadeSlideUp}
        custom={4}
      >
        <h2>How HeartBridge Helped</h2>
        <p>{patient.support}</p>
      </motion.section>

      <motion.div
        className={styles.donateBox}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.7 }}
      >
        <Link href="/donate" className={styles.donateButton}>
          Donate to Support More Patients
        </Link>
      </motion.div>

      <motion.div
        className={styles.backLink}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
      >
        <Link href="/patients">← Back to Patients</Link>
      </motion.div>
    </motion.div>
  );
}
