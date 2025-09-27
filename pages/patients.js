import styles from "../styles/Patients.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Patients() {
  const patients = [
    {
      id: 1,
      img: "/images/patient1.jpeg",
      name: "Mary A.",
      story: "Mary underwent a life-saving surgery with the support of HeartBridge.",
    },
    {
      id: 2,
      img: "/images/patient2.png",
      name: "Samuel K.",
      story: "Samuel received critical medication and counseling thanks to donors.",
    },
    {
      id: 3,
      img: "/images/patient3.png",
      name: "Fatima L.",
      story: "Fatima’s recovery was made possible through timely intervention.",
    },
  ];

  return (
    <main className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Patients We Help
      </motion.h1>

      <div className={styles.grid}>
        {patients.map((p, i) => (
          <motion.div
            key={p.id}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.imageWrapper}>
              <img src={p.img} alt={p.name} className={styles.photo} />
              <div className={styles.overlay}>
                <Link href={`/patients/${p.id}`} className={styles.readMore}>
                  Read More →
                </Link>
              </div>
            </div>
            <h2 className={styles.name}>{p.name}</h2>
            <p className={styles.story}>{p.story}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
