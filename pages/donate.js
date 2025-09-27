"use client";
import { motion } from "framer-motion";

export default function Donate() {
  return (
    <main style={{ maxWidth: 800, margin: "50px auto", padding: 20 }}>
      <motion.h1
        style={{ textAlign: "center", marginBottom: 20, fontSize: "2.2rem", color: "#222" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Donate to HeartBridge Foundation
      </motion.h1>

      <motion.p
        style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: 35, color: "#444" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Your donation directly supports patients in urgent need of heart and liver care.  
        Every contribution is a bridge of hope.
      </motion.p>

      <motion.div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginBottom: 40,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div
          style={{
            background: "#fff",
            padding: 22,
            borderRadius: 12,
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#d1435b", marginBottom: 10 }}>Bank Transfer</h2>
          <p style={{ color: "#333" }}>
            <b>HeartBridge Foundation</b> <br />
            0001234567 <br />
            Zenith Bank
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: 22,
            borderRadius: 12,
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#d1435b", marginBottom: 10 }}>Mobile Money</h2>
          <p style={{ color: "#333" }}>
            <b>+234 800 000 0000</b>
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{
          textAlign: "center",
          marginBottom: 30,
          fontSize: "1.05rem",
          color: "#444",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        <p>Interested in corporate partnerships?</p>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            background: "#d1435b",
            color: "#fff",
            padding: "12px 22px",
            borderRadius: 8,
            fontWeight: 600,
            textDecoration: "none",
            transition: "background 0.2s",
          }}
        >
          Contact Us
        </a>
      </motion.div>

      <motion.p
        style={{ marginTop: 25, color: "#d1435b", textAlign: "center", fontWeight: 600 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        All donations are used transparently. Receipts available upon request.
      </motion.p>
    </main>
  );
}
