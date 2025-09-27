import styles from './PatientCard.module.css';

export default function PatientCard({ name, story, contact, photo }) {
  return (
    <div className={styles.card}>
      <img src={photo} alt={name} className={styles.photo} />
      <h3>{name}</h3>
      <p>{story}</p>
      <div className={styles.contact}>
        <span>Contact: <span className={styles.blur}>{contact}</span></span>
      </div>
    </div>
  );
}