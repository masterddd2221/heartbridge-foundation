import styles from "./ReviewCard.module.css";

export default function ReviewCard({ review }) {
  return (
    <div className={styles.card}>
      <p className={styles.text}>"{review}"</p>
    </div>
  );
}
