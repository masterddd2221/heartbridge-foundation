"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState(""); // success or error
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setError("");

    const form = e.target;
    const data = new FormData(form);

    // Validate email
    const email = data.get("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("❌ Please enter a valid email address.");
      return;
    }

    const response = await fetch("https://formspree.io/f/xzzjdjep", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("✅ Message sent successfully! We’ll get back to you soon.");
      form.reset();
    } else {
      setError("⚠️ Something went wrong. Please try again.");
    }
  };

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
        onSubmit={handleSubmit}
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
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          whileFocus={{
            scale: 1.02,
            borderColor: "#d1435b",
            boxShadow: "0 0 8px rgba(209,67,91,0.4)",
          }}
          style={{
            padding: 12,
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 16,
            outline: "none",
          }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          whileFocus={{
            scale: 1.02,
            borderColor: "#d1435b",
            boxShadow: "0 0 8px rgba(209,67,91,0.4)",
          }}
          style={{
            padding: 12,
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 16,
            outline: "none",
          }}
        />
        <motion.textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          whileFocus={{
            scale: 1.02,
            borderColor: "#d1435b",
            boxShadow: "0 0 8px rgba(209,67,91,0.4)",
          }}
          style={{
            padding: 12,
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 16,
            outline: "none",
          }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, backgroundColor: "#b1324a" }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: "#d1435b",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "14px 0",
            fontWeight: 600,
            fontSize: 17,
            cursor: "pointer",
          }}
        >
          Send Message
        </motion.button>

        {/* Feedback messages */}
        {status && (
          <p style={{ color: "green", textAlign: "center", marginTop: 10 }}>
            {status}
          </p>
        )}
        {error && (
          <p style={{ color: "red", textAlign: "center", marginTop: 10 }}>
            {error}
          </p>
        )}
      </motion.form>
    </main>
  );
}
