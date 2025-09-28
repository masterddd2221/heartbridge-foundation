import { motion } from "framer-motion";
import styles from "../styles/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <motion.img
        src="/images/loader.png"
        alt="HeartBridge Logo"
        className={styles.logo}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.h2
        className={styles.text}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
       
      </motion.h2>
    </div>
  );
}
