// pages/waiting-list.js
import Head from "next/head";
import Link from "next/link";

const waitingPatients = [
  { id: 1, name: "Joseph K.", condition: "Needs ongoing dialysis treatment", img: "/images/patient1.jpeg" },
  { id: 2, name: "Agnes M.", condition: "Awaiting heart surgery", img: "/images/patient2.jpeg" },
  { id: 3, name: "Kwame T.", condition: "Requires monthly medication", img: "/images/patient3.jpeg" },
];

export default function WaitingListPage() {
  return (
    <>
      <Head>
        <title>Waiting List | HeartBridge Foundation</title>
        <meta
          name="description"
          content="Join the HeartBridge Foundation waiting list to access donor-funded medical care."
        />
      </Head>

      <main className="wrapper">
        {/* Hero */}
        <header className="hero">
          <h1>Secure Your Spot on Our Waiting List</h1>
          <p>
            Early enrollment ensures priority access to care and donor-funded treatment.  
            Patients listed below are currently awaiting support and care.
          </p>
          <Link href="/join" className="ctaButton">
            Join the Waiting List
          </Link>
        </header>

        {/* Why Join */}
        <section className="whyJoin">
          <h2>Why Join?</h2>
          <ul>
            <li><strong>Priority Access</strong> – Be the first to receive updates and opportunities.</li>
            <li><strong>Trusted Care</strong> – Transparent and donor-supported healthcare.</li>
            <li><strong>Global Network</strong> – Coordinated support wherever you are.</li>
          </ul>
        </section>

        {/* Process */}
        <section className="steps">
          <h2>How It Works</h2>
          <div className="step">
            <h3>Step 1: Referral & Evaluation</h3>
            <p>We review medical documents and arrange evaluation with partner doctors to prioritize urgent cases.</p>
          </div>
          <div className="step">
            <h3>Step 2: Joining the List</h3>
            <p>Approved patients are added to our official list and become eligible for support as funds are raised.</p>
          </div>
          <div className="step">
            <h3>Step 3: Treatment & Support</h3>
            <p>When funding is secured, patients receive full treatment, counseling, and recovery care at no personal cost.</p>
          </div>
        </section>

        {/* Enrollment Fees */}
        <section className="fees">
          <h2>Enrollment Fees</h2>
          <div className="feeBreakdown">
            <p>Medical Document Review – <span>$50</span></p>
            <p>Administrative Processing – <span>$100</span></p>
            <p>Case Management & Hospital Coordination – <span>$100</span></p>
            <hr />
            <p className="total">
              Total Enrollment Fee: <span>$250 (One-time)</span>
            </p>
          </div>
          <p className="note">
            ⚠️ Once you are enrolled, treatment and medical support are fully donor-funded.  
            You will never pay for surgery, medication, or recovery costs.
          </p>
        </section>

        {/* Patient Preview */}
        <section className="listPreview">
          <h2>Patients Currently on the Waiting List</h2>
          <div className="cards">
            {waitingPatients.map((p) => (
              <article className="card" key={p.id}>
                <img src={p.img} alt={p.name} />
                <div className="cardBody">
                  <h4>{p.name}</h4>
                  <p className="cond">{p.condition}</p>
                  <Link href={`/images/${p.id}`} className="view">
                    View Profile
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="cta">
          <Link href="/join" className="joinBtn">
            Join the Waiting List Now
          </Link>
          <p className="limited">Limited spots available for early enrollment.</p>
        </div>
      </main>

      <style jsx>{`
        .wrapper {
          max-width: 980px;
          margin: 48px auto;
          padding: 24px;
          font-family: Inter, Arial, sans-serif;
        }
        .hero {
          text-align: center;
          margin-bottom: 28px;
        }
        .hero h1 {
          color: #d1435b;
          font-size: 34px;
          margin-bottom: 8px;
        }
        .hero p {
          color: #444;
          max-width: 720px;
          margin: 0 auto 16px;
        }

        /* CTA buttons */
        .ctaButton,
        .joinBtn {
          display: inline-block;
          background: linear-gradient(135deg, #d1435b, #b83245);
          color: #fff;
          padding: 14px 26px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 4px 14px rgba(0,0,0,0.12);
          transition: all 0.25s ease;
        }
        .ctaButton:hover,
        .joinBtn:hover {
          background: linear-gradient(135deg, #b83245, #912d38);
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.18);
        }

        .whyJoin {
          margin: 30px 0;
        }
        .whyJoin h2 {
          color: #333;
          margin-bottom: 10px;
        }
        .whyJoin ul {
          list-style: disc;
          padding-left: 20px;
          color: #555;
        }

        .steps {
          margin: 28px 0;
          display: grid;
          gap: 16px;
        }
        .step {
          background: #fff;
          padding: 16px;
          border-radius: 10px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
        }
        .step h3 {
          color: #c53030;
          margin-bottom: 6px;
        }

        .fees {
          margin: 32px 0;
          text-align: center;
        }
        .feeBreakdown {
          background: #fafafa;
          border-radius: 8px;
          padding: 16px;
          display: inline-block;
          text-align: left;
        }
        .feeBreakdown span {
          font-weight: bold;
        }
        .total {
          margin-top: 8px;
          color: #d1435b;
          font-weight: bold;
        }
        .note {
          margin-top: 10px;
          color: #555;
          font-size: 0.95rem;
        }

        .listPreview {
          margin: 40px 0;
        }
        .listPreview h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
        }
        .card {
          background: #fafafa;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 12px;
          transition: transform 0.18s ease;
        }
        .card:hover {
          transform: translateY(-6px);
        }
        .card img {
          width: 84px;
          height: 84px;
          object-fit: cover;
          border-radius: 10px;
        }
        .cardBody h4 {
          margin: 0;
          color: #222;
        }
        .cond {
          margin: 6px 0 10px;
          color: #666;
          font-size: 0.95rem;
        }
        .view {
          color: #d1435b;
          font-weight: 600;
          text-decoration: none;
        }

        .cta {
          text-align: center;
          margin: 40px 0;
        }
        .limited {
          margin-top: 10px;
          color: #666;
          font-size: 0.9rem;
        }

        @media (max-width: 600px) {
          .hero h1 {
            font-size: 26px;
          }
          .cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
