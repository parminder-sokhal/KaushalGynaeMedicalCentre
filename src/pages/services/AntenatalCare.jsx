import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesAndTreatments";

const AntenatalCare = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/pregnant-woman-receiving-ultrasound-scan-stomach.jpg"
          alt="Antenatal Pregnancy Care"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Antenatal Care
              <span className="block text-pink-400">& Pregnancy Check-ups</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Comprehensive pregnancy care to ensure the health, safety, and
              comfort of both mother and baby throughout every stage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Appointment
              </Link>

              <Link
                to="/services"
                className="bg-white/90 text-pink-500 hover:bg-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-6 py-16 grid lg:grid-cols-4 gap-12">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-10 text-gray-700 leading-relaxed">
          {/* WHY IMPORTANT */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Antenatal Care Is Important
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ensures the healthy growth and development of the baby</li>
              <li>Monitors the mother’s physical and emotional health</li>
              <li>Detects and manages high-risk conditions early</li>
              <li>Provides guidance on diet, exercise, and supplements</li>
              <li>Prepares the mother for delivery and breastfeeding</li>
            </ul>
          </section>

          {/* INCLUDED */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What Is Included in Antenatal Care?
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  1. Regular Pregnancy Checkups
                </h3>
                <p>
                  Monitoring blood pressure, weight, baby’s heart rate, uterus
                  size, and overall pregnancy progress.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  2. Ultrasound Scans
                </h3>
                <p>
                  Includes early scan, NT scan, anomaly scan, and growth scans
                  to monitor fetal development and detect abnormalities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  3. Blood Tests & Diagnostic Screenings
                </h3>
                <p>
                  Hemoglobin, thyroid, blood sugar, infection screenings, and
                  other essential tests to ensure maternal and fetal safety.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  4. Nutritional & Lifestyle Guidance
                </h3>
                <p>
                  Diet planning, supplements (iron, calcium, folic acid),
                  hydration, sleep, and safe physical activity guidance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  5. Monitoring High-Risk Pregnancies
                </h3>
                <p>
                  Specialized care for mothers with diabetes, hypertension,
                  thyroid disorders, or multiple pregnancies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  6. Vaccination Guidance
                </h3>
                <p>Includes TT, Tdap, and Flu vaccines as advised.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  7. Emotional & Mental Health Support
                </h3>
                <p>
                  Support for anxiety, mood changes, and emotional wellbeing
                  throughout pregnancy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  8. Birth Planning & Preparation
                </h3>
                <p>
                  Guidance on labor signs, delivery options, hospital
                  preparation, and breastfeeding.
                </p>
              </div>
            </div>
          </section>

          {/* SUMMARY */}
          <section className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Summary</h2>
            <p>
              Antenatal Care & Checkups provide complete medical and emotional
              support for expecting mothers, ensuring a healthy pregnancy and a
              safe, confident childbirth journey.
            </p>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="bg-gray-50 p-6 rounded-2xl h-fit shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Other Services
          </h3>
          <ul className="space-y-3 text-pink-500 font-medium">
            {servicesData.map((item) => (
              <li key={item.id}>
                <Link to={`/services/${item.id}`}>› {item.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
};

export default AntenatalCare;
