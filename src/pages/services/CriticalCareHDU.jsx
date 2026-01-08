import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesAndTreatments";

const CriticalCareHDU = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/critical-care-hospital-icu.jpg"
          alt="Critical Care HDU"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Critical Care
              <span className="block text-green-400">HDU Services</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Advanced high-dependency care for critically ill patients requiring
              close monitoring, rapid intervention, and specialized medical support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="https://u.tatvacare.in/r/SPtEZB"
                className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Appointment
              </Link>

              <Link
                to="/services"
                className="bg-white/90 text-green-500 hover:bg-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
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
              Why Critical Care / HDU Is Important
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provides continuous monitoring for unstable patients</li>
              <li>Ensures rapid response to life-threatening conditions</li>
              <li>Bridges the gap between ICU and general ward care</li>
              <li>Reduces complications through early medical intervention</li>
              <li>Improves recovery outcomes for high-risk patients</li>
            </ul>
          </section>

          {/* INCLUDED */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What Is Included in Critical Care / HDU?
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  1. Continuous Patient Monitoring
                </h3>
                <p>
                  Round-the-clock monitoring of vital signs such as heart rate,
                  blood pressure, oxygen saturation, and respiratory status.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  2. Advanced Life Support Equipment
                </h3>
                <p>
                  Ventilators, cardiac monitors, infusion pumps, and oxygen
                  therapy for critically ill patients.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  3. Expert Medical & Nursing Care
                </h3>
                <p>
                  Dedicated team of critical care doctors and trained nurses
                  providing specialized attention.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  4. Management of Medical Emergencies
                </h3>
                <p>
                  Immediate care for conditions like sepsis, respiratory failure,
                  cardiac events, and post-surgical complications.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  5. Post-Surgical High Dependency Care
                </h3>
                <p>
                  Close monitoring after major surgeries to ensure stable
                  recovery and prevent complications.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  6. Infection Control & Safety Protocols
                </h3>
                <p>
                  Strict hygiene, isolation, and infection prevention measures
                  to protect vulnerable patients.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  7. Multidisciplinary Support
                </h3>
                <p>
                  Coordination with specialists such as cardiologists,
                  pulmonologists, surgeons, and anesthetists.
                </p>
              </div>
            </div>
          </section>

          {/* SUMMARY */}
          <section className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Summary</h2>
            <p>
              Critical Care / HDU services provide intensive medical supervision
              and advanced treatment for patients who need constant monitoring,
              ensuring safety, stability, and faster recovery.
            </p>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="bg-gray-50 p-6 rounded-2xl h-fit shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Other Services
          </h3>
          <ul className="space-y-3 text-green-500 font-medium">
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

export default CriticalCareHDU;
