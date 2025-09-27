// pages/team.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Link from "next/link";
import teamData from "../data/teamData";
import styles from "../styles/Team.module.css";

export default function Team() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Meet Our Team</h1>

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000, // 4 seconds
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className={styles.swiper}
      >
        {teamData.map((member) => (
          <SwiperSlide key={member.id}>
            <div className={styles.card}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.image}
              />
              <h2 className={styles.name}>{member.name}</h2>
              <p className={styles.role}>{member.role}</p>
              <Link href={`/team/${member.id}`} className={styles.button}>
                View Profile
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
