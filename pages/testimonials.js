import ReviewCard from "../components/ReviewCard";
import { motion } from "framer-motion";

const reviews = [
  {
    review: "HeartBridge Foundation saved my daughter's life. We’re forever grateful.",
  },
  {
    review: "We never expected so much love and support. Thank you, HeartBridge!",
  },
  {
    review: "The doctors and volunteers are angels. God bless you all.",
  },
];

export default function Testimonials() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <main style={{ maxWidth: 850, margin: "40px auto", padding: 16 }}>
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>What People Say</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 28,
          justifyContent: "center",
        }}
      >
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            style={{ flex: "1 1 250px", maxWidth: 280 }}
          >
            <ReviewCard {...r} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
