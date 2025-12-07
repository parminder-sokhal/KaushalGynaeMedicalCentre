import React from "react";
import { Link } from "react-router-dom";

const AntenatalCare = () => {
  return (
    <div className="w-full bg-white font-sans container mx-auto px-6 lg:px-40 mt-20">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 py-16">
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Antenatal (Pregnancy) Care & Check-ups
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Comprehensive pregnancy care designed to ensure the health, safety,
            and comfort of both mother and baby through regular monitoring,
            lifestyle guidance, and early detection of potential complications.
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
            src="/pregnant-woman-receiving-ultrasound-scan-stomach.jpg"
            alt="Antenatal Care"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 lg:px-30 py-10 text-gray-700 leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Why Antenatal Care Is Important</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Ensures the healthy growth and development of the baby.</li>
            <li>Monitors the mother’s physical and emotional health.</li>
            <li>Helps detect and manage high-risk conditions early.</li>
            <li>Provides guidance on diet, exercise, and supplements.</li>
            <li>Prepares the mother for delivery and breastfeeding.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">What Is Included in Antenatal Care?</h2>

          <h3 className="text-xl font-bold mt-4">1. Regular Pregnancy Checkups</h3>
          <p>
            Regular visits with a gynecologist to check blood pressure, weight,
            baby’s heart rate, uterus size, and monitor overall progress
            throughout pregnancy.
          </p>

          <h3 className="text-xl font-bold mt-4">2. Ultrasound Scans</h3>
          <p>
            Essential for confirming pregnancy, monitoring fetal growth, and
            detecting any abnormalities. Includes early, NT, anomaly, and
            growth scans.
          </p>

          <h3 className="text-xl font-bold mt-4">3. Blood Tests & Diagnostic Screenings</h3>
          <p>
            Tests such as hemoglobin, thyroid, blood sugar, and infection
            screenings ensure both mother and baby remain healthy.
          </p>

          <h3 className="text-xl font-bold mt-4">4. Nutritional & Lifestyle Guidance</h3>
          <p>
            Advice on balanced diet, supplements (calcium, iron, folic acid),
            hydration, sleep, and safe physical activities.
          </p>

          <h3 className="text-xl font-bold mt-4">5. Monitoring High-Risk Pregnancies</h3>
          <p>
            Mothers with conditions like hypertension, diabetes, or multiple
            pregnancies receive specialized monitoring and customized treatment
            plans.
          </p>

          <h3 className="text-xl font-bold mt-4">6. Vaccination Guidance</h3>
          <p>Includes TT, Tdap, and Flu vaccines as advised by the doctor.</p>

          <h3 className="text-xl font-bold mt-4">7. Emotional & Mental Health Support</h3>
          <p>
            Counseling helps mothers cope with hormonal changes, anxiety, and
            postpartum emotional concerns.
          </p>

          <h3 className="text-xl font-bold mt-4">8. Birth Planning & Preparation</h3>
          <p>
            Prepares expecting mothers for labor, delivery choices, hospital
            readiness, and breastfeeding guidance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p>
            Antenatal Care & Checkups provide a complete healthcare system for
            expecting mothers. Through regular monitoring, timely tests, and
            emotional support, our team ensures a healthy pregnancy and safe
            childbirth, empowering mothers throughout their journey into
            motherhood.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AntenatalCare;
