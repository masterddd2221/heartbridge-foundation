"use client";
import { motion } from "framer-motion";
import styles from "../styles/Doctor.module.css";

export default function Doctor() {
  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Doctor
      </motion.h1>

      <motion.div
        className={styles.profile}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.img
          src="/images/dr-joel.jpg"
          alt="Dr. Joel S. Richardson"
          className={styles.image}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.h2
          className={styles.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Dr. Joel S. Richardson
        </motion.h2>

        <motion.p
          className={styles.bio}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Dr. Joel S. Richardson is a highly respected cardiologist with over 15 years of
          clinical and research experience in the diagnosis, treatment, and prevention of
          cardiovascular diseases. A graduate of [insert medical school/university], Dr.
          Richardson has dedicated his career to advancing heart health and improving
          patient outcomes, particularly in underserved communities where access to quality
          medical care is often limited.
          <br /><br />
          Throughout his career, Dr. Richardson has managed complex cardiac conditions
          ranging from congenital heart defects and arrhythmias to advanced heart failure.
          His approach combines the latest evidence-based practices with compassionate,
          patient-centered care. He is widely recognized for his ability to explain
          complicated medical information in clear, reassuring ways that empower patients
          and their families to make informed decisions.
          <br /><br />
          Beyond the clinic, Dr. Richardson has contributed to several peer-reviewed
          journals, participated in international medical conferences, and received awards
          for his commitment to excellence in cardiology. He is also an active member of
          professional bodies such as the American College of Cardiology and the World
          Heart Federation.
          <br /><br />
          At HeartBridge Foundation, Dr. Richardson leads the medical team with a clear
          mission: to ensure that every patient, regardless of financial background, has
          access to world-class heart care. His vision is not only to heal, but also to
          educate and advocate for healthier lifestyles, preventive measures, and equitable
          healthcare systems.
          <br /><br />
          When he is not in the hospital or volunteering his time with HeartBridge, Dr.
          Richardson mentors young medical professionals and collaborates on global
          initiatives to expand cardiovascular treatment in low-resource settings. His
          dedication, expertise, and unwavering compassion continue to save lives and
          inspire hope in countless families.
        </motion.p>
      </motion.div>
    </div>
  );
}
