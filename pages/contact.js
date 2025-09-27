"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main style={{ maxWidth: 600, margin: "60px auto", padding: 16 }}>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: 20 }}
      >
        Contact Us
      </motion.h1>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          background: "#fff",
          padding: 28,
          borderRadius: 14,
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! (form is demo only)");
        }}
      >
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#d1435b", boxShadow: "0 0 8px rgba(209,67,91,0.4)" }}
          type="text"
          placeholder="Your Name"
          required
          style={{
            padding: 12,
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 16,
            outline: "none",
          }}
        />
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#d1435b", boxShadow: "0 0 8px rgba(209,67,91,0.4)" }}
          type="email"
          placeholder="Your Email"
          required
          style={{
            padding: 12,
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 16,
            outline: "none",
          }}
        />
        <motion.textarea
          whileFocus={{ scale: 1.02, borderColor: "#d1435b", boxShadow: "0 0 8px rgba(209,67,91,0.4)" }}
          placeholder="Your Message"
          rows={5}
          required
          style={{
            padding: 12,
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 16,
            outline: "none",
          }}
        />
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#b1324a" }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          style={{
            background: "#d1435b",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "14px 0",
            fontWeight: 600,
            fontSize: 17,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          Send Message
        </motion.button>
      </motion.form>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{ marginTop: 28, color: "#444", textAlign: "center" }}
      >
        Or email us:{" "}
        <a href="mailto:info@heartbridge.org" style={{ color: "#d1435b", fontWeight: 600 }}>
          info@heartbridge.org
        </a>
      </motion.p>
    </main>
  );
}
