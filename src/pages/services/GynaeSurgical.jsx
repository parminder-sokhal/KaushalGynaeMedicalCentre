import React from "react";
import { Link } from "react-router-dom";

const GynaeSurgical = () => {
  return (
    <div className="w-full bg-white font-sans container mx-auto px-6 lg:px-40 mt-20">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 py-16">
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Gynae-Surgical Procedures (Laparoscopy, Oophorectomy, Salpingectomy, etc.)
          </h1>
          <p className="text-gray-600 leading-relaxed">
            We offer a wide range of advanced gynecological surgical procedures 
            — from minimally invasive laparoscopic surgeries to essential operations 
            like oophorectomy and salpingectomy — ensuring safer outcomes, 
            faster recovery, and compassionate care for women’s reproductive health.
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              to="/contact"
              className="bg-pink-600 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-700 transition-all duration-300 shadow"
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="border border-pink-600 text-pink-600 px-6 py-3 rounded-md font-medium hover:bg-pink-50 transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src="/medical-team-performing-tummy-tuck-surgery-operating-room.jpg"
            alt="Gynae Surgical Procedures"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 lg:px-30 py-10 text-gray-700 leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Laparoscopy</h2>
          <p>
            Laparoscopy is a minimally invasive surgical technique used to diagnose 
            and treat many gynecological problems through small incisions. It allows 
            precise visualization and treatment of internal organs using a camera.
          </p>

          <h3 className="text-xl font-bold mt-4">Why Laparoscopy Is Performed</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Diagnosis and treatment of endometriosis.</li>
            <li>Removal of ovarian cysts or fibroids.</li>
            <li>Infertility evaluation and tubal assessment.</li>
            <li>Chronic pelvic pain or adhesions.</li>
            <li>Hysterectomy (uterus removal) with minimal invasion.</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">Benefits of Laparoscopy</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Smaller incisions and minimal scarring.</li>
            <li>Less bleeding and post-surgical pain.</li>
            <li>Faster recovery and shorter hospital stay.</li>
            <li>Lower risk of infection.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Oophorectomy</h2>
          <p>
            Oophorectomy is the surgical removal of one or both ovaries. 
            It is recommended for medical conditions that affect ovarian health 
            such as cysts, tumors, or endometriosis.
          </p>

          <h3 className="text-xl font-bold mt-4">When Oophorectomy Is Needed</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Large or painful ovarian cysts.</li>
            <li>Ovarian tumors (benign or malignant).</li>
            <li>Severe endometriosis affecting ovaries.</li>
            <li>Genetic risk (BRCA mutation) to prevent cancer.</li>
            <li>Ovarian torsion or infection.</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">Types of Oophorectomy</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Unilateral:</strong> One ovary removed.</li>
            <li><strong>Bilateral:</strong> Both ovaries removed.</li>
          </ul>

          <p className="mt-2">
            The surgery is often performed laparoscopically for faster recovery and minimal scarring.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Salpingectomy</h2>
          <p>
            Salpingectomy involves the removal of one or both fallopian tubes. 
            It may be performed to treat ectopic pregnancies, blocked tubes, 
            or as part of fertility treatment to improve IVF outcomes.
          </p>

          <h3 className="text-xl font-bold mt-4">When Salpingectomy Is Needed</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Ectopic pregnancy in the fallopian tube.</li>
            <li>Blocked or damaged tubes causing infertility.</li>
            <li>Hydrosalpinx (fluid-filled tube).</li>
            <li>Pelvic infection or inflammation.</li>
            <li>Preventive removal in high-risk cancer patients.</li>
          </ul>

          <p className="mt-2">
            The procedure is usually laparoscopic and offers quick recovery 
            with improved outcomes for fertility treatments.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Our Surgical Approach</h2>
          <p>
            Our gynecological surgeries are performed with precision, compassion, 
            and the highest safety standards. We combine modern technology with 
            personalized care to ensure comfort and effective recovery.
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Experienced gynecologists and laparoscopic surgeons.</li>
            <li>Modern operation theaters with advanced imaging tools.</li>
            <li>Tailored surgical planning for each patient.</li>
            <li>Post-operative care and regular follow-ups.</li>
            <li>Compassionate support throughout recovery.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p>
            Our Gynae-Surgical Procedures include advanced, minimally invasive 
            surgeries such as Laparoscopy, Oophorectomy, and Salpingectomy. 
            We ensure safe procedures, faster recovery, and exceptional outcomes — 
            empowering women with trusted, high-quality reproductive healthcare.
          </p>
        </section>
      </div>
    </div>
  );
};

export default GynaeSurgical;
