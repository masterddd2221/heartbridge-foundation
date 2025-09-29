// pages/join.js
import { useState } from "react";
import Head from "next/head";

export default function JoinWaitingList() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    condition: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // auto expand textarea
    if (name === "condition") {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + "px";
    }

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,}$/;

    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!emailRegex.test(form.email))
      newErrors.email = "Please enter a valid email address.";
    if (!phoneRegex.test(form.phone))
      newErrors.phone = "Please enter a valid phone number (10+ digits).";
    if (!form.condition.trim())
      newErrors.condition = "Please describe your medical condition.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    console.log("Form submitted:", form);
  };

  return (
    <>
      <Head>
        <title>Join Waiting List | HeartBridge Foundation</title>
      </Head>

      <main className="joinPage">
        <div className="overlay" />
        <div className="formWrapper animateFadeUp">
          <header className="hero">
            <h1>Join Our Waiting List</h1>
            <p>
              Enrollment requires a small one-time fee. Once you are listed,
              all treatment and recovery support is fully donor-funded.
            </p>
          </header>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="form">
              <label className="animateField" style={{ animationDelay: "0.1s" }}>
                Full Name:
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </label>

              <label className="animateField" style={{ animationDelay: "0.2s" }}>
                Email Address:
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>

              <label className="animateField" style={{ animationDelay: "0.3s" }}>
                Phone Number:
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </label>

              <label className="animateField" style={{ animationDelay: "0.4s" }}>
                Medical Condition / Notes:
                <textarea
                  name="condition"
                  value={form.condition}
                  onChange={handleChange}
                  rows="3"
                  required
                />
                {errors.condition && (
                  <span className="error">{errors.condition}</span>
                )}
              </label>

              <button
                type="submit"
                className="submitBtn animateField"
                style={{ animationDelay: "0.5s" }}
              >
                Submit Application
              </button>
            </form>
          ) : (
            <div className="success animateSuccess">
              <h2>Thank you for applying!</h2>
              <p>
                Our team will review your application and reach out to you
                shortly.
              </p>
            </div>
          )}

          {/* ✅ Support Call-to-Action */}
          <div className="supportBox animateFadeUp" style={{ animationDelay: "0.7s" }}>
            <p>
              <strong>Need help?</strong> Talk to our support team at{" "}
              <a href="mailto:support@heartbridge.org">support@heartbridge.org</a>
            </p>
          </div>
        </div>
      </main>

      <style jsx>{`
        .joinPage {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          background: url('/images/medical-bg.jpg') no-repeat center center/cover;
          position: relative;
        }

        .overlay {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(3px);
          z-index: 1;
        }

        .formWrapper {
          position: relative;
          z-index: 2;
          max-width: 600px;
          width: 100%;
          background: #fff;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .hero {
          text-align: center;
          margin-bottom: 28px;
        }
        .hero h1 {
          font-size: 32px;
          color: #d1435b;
          margin-bottom: 8px;
        }
        .hero p {
          color: #555;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        label {
          display: flex;
          flex-direction: column;
          font-weight: 600;
          color: #333;
        }
        input,
        textarea {
          padding: 10px;
          margin-top: 6px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
          font-family: inherit;
          resize: none;
          transition: border 0.2s;
        }
        input:focus,
        textarea:focus {
          border-color: #d1435b;
          outline: none;
        }
        .error {
          font-size: 0.9rem;
          color: #c53030;
          margin-top: 4px;
        }
        .submitBtn {
          background: linear-gradient(135deg, #d1435b, #b83245);
          color: #fff;
          border: none;
          padding: 14px 20px;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          font-weight: 600;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
          transition: all 0.25s ease;
        }
        .submitBtn:hover {
          background: linear-gradient(135deg, #b83245, #912d38);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
        }

        .success {
          text-align: center;
          background: #f0fff4;
          padding: 30px;
          border: 1px solid #38a169;
          border-radius: 10px;
        }
        .success h2 {
          color: #2f855a;
          margin-bottom: 12px;
        }

        .supportBox {
          margin-top: 20px;
          padding: 12px 16px;
          background: #f7fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          text-align: center;
          font-size: 0.95rem;
          color: #444;
        }
        .supportBox a {
          color: #d1435b;
          font-weight: 600;
          text-decoration: none;
        }
        .supportBox a:hover {
          text-decoration: underline;
        }

        /* 🔥 Animations */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animateFadeUp {
          animation: fadeUp 0.7s ease forwards;
        }

        .animateField {
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
        }

        .animateSuccess {
          animation: scaleIn 0.5s ease forwards;
        }
      `}</style>
    </>
  );
}
