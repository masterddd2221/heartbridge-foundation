"use client";
import { motion } from "framer-motion";

export default function Donate() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: "url('/images/donate-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "40px 15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 500,
          background: "rgba(255,255,255,0.95)",
          padding: "30px 20px",
          borderRadius: 14,
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ marginBottom: 16, fontSize: "1.8rem", color: "#222" }}>
          Support HeartBridge Foundation
        </h1>

        <p
          style={{
            fontSize: "1rem",
            marginBottom: 25,
            color: "#444",
            lineHeight: 1.5,
          }}
        >
          Want to donate or partner with us?  
          Reach out directly through Email.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
            alignItems: "center",
          }}
        >
          {/* Email */}
          <a
            href="mailto:heartbridgefoundation@gmail.com"
            style={{
              width: "100%",
              maxWidth: 320,
              background: "#d1435b",
              color: "#fff",
              padding: "14px",
              borderRadius: 10,
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "1rem",
              transition: "background 0.2s",
            }}
          >
            📧 Email Us
          </a>

        </div>
      </motion.div>
    </main>
  );
}
