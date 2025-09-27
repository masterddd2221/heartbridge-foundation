// pages/team/[id].js
import { useRouter } from "next/router";
import teamData from "../../data/teamData";
import styles from "../../styles/TeamDetail.module.css";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function TeamDetail() {
  const router = useRouter();
  const { id } = router.query;
  const member = teamData.find((m) => m.id.toString() === id);

  if (!member) return <p className={styles.notFound}>Team member not found.</p>;

  return (
    <div className={styles.container}>
      <img src={member.image} alt={member.name} className={styles.photo} />
      <h1 className={styles.name}>{member.name}</h1>
      <h2 className={styles.role}>{member.role}</h2>
      <p className={styles.bio}>{member.bio}</p>

      <div className={styles.contactBlock}>
        {member.contact?.email && (
          <a
            href={`mailto:${member.contact.email}`}
            className={styles.contactLink}
            aria-label={`Email ${member.name}`}
          >
            <FaEnvelope className={styles.icon} /> {member.contact.email}
          </a>
        )}

        {member.contact?.phone && (
          <a
            href={`tel:${member.contact.phone}`}
            className={styles.contactLink}
            aria-label={`Call ${member.name}`}
          >
            <FaPhone className={styles.icon} /> {member.contact.phone}
          </a>
        )}
      </div>

      <div className={styles.socials}>
        {member.socials?.twitter && (
          <a
            href={member.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on Twitter`}
            className={styles.socialIcon}
          >
            <FaTwitter />
          </a>
        )}
        {member.socials?.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className={styles.socialIcon}
          >
            <FaLinkedin />
          </a>
        )}
      </div>

      <div className={styles.backLinkBox}>
        <Link href="/team" className={styles.backLink}>
          ← Back to Team
        </Link>
      </div>
    </div>
  );
}
