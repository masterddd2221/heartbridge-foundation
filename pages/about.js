import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.heroTitle}>About HeartBridge Foundation</h1>
          <p className={styles.heroSubtitle}>
            Restoring dignity, renewing hope, and rewriting stories.
          </p>
        </div>
      </section>

      {/* Mission Split Section */}
<section className={styles.split}>
  <div className={styles.text}>
    <h2>Our Mission</h2>
    <p>
      To connect generous donors with patients in need, and to support
      their recovery journey through medical aid, emotional care, and
      consistent advocacy for accessible healthcare.
    </p>
  </div>

  <motion.div
    className={styles.imageWrapper}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <Image
      src="/images/mission.jpg"
      alt="Mission"
      width={500}
      height={400}
      className={styles.image}
    />
  </motion.div>
</section>


      {/* Story Section */}
      <section className={styles.story}>
        <h2>Our Story</h2>
        <p>
          HeartBridge Foundation began with a simple purpose: to bring hope and
          healing to people battling life threatening conditions. What started
          as a small initiative to help patients in underserved African
          communities has grown into a global movement. Today we connect
          compassionate donors and skilled medical professionals with those who
          have no access to critical care.
        </p>
        <p>
          From the beginning, our work has been shaped by real stories. Stories
          of children whose futures seemed uncertain, parents who could not
          afford urgent treatment, and families who felt powerless in the face
          of overwhelming medical bills. Each story has deeply moved us and
          reminded us why our mission matters.
        </p>
        <p>
          Over the years, HeartBridge Foundation has expanded its reach. Beyond
          medical aid, we provide emotional support, guidance, and education to
          help families navigate the most difficult chapters of their lives.
        </p>
        <p>
          We believe every life deserves a second chance. Our volunteers,
          donors, and medical partners work tirelessly to bridge the gap between
          resources and need, hope and despair, life and loss.
        </p>
        <p>
          At HeartBridge Foundation we are not only addressing health
          conditions, we are restoring dignity, renewing hope, and rewriting
          stories for countless families.
        </p>
      </section>
    </motion.main>
  );
}
