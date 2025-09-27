// pages/team.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Link from "next/link";
import teamData from "../data/teamData";
import styles from "../styles/Team.module.css";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <main className={styles.container}>
      {/* Heading animation */}
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Meet Our Team
      </motion.h1>

      {/* Swiper animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
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
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
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
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </main>
  );
}
