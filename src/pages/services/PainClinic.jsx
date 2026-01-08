import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesAndTreatments";

const PainClinic = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/pain-clinic-treatment-doctor-patient.jpg"
          alt="Pain Clinic"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Pain Clinic
              <span className="block text-green-400">
                Advanced Pain Management
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Specialized care focused on diagnosing, treating, and managing
              acute and chronic pain to improve quality of life.
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
              Why Pain Clinic Care Is Important
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Helps manage chronic and long-standing pain conditions</li>
              <li>Reduces dependency on long-term pain medications</li>
              <li>Improves mobility, sleep, and daily functioning</li>
              <li>Addresses the root cause of pain, not just symptoms</li>
              <li>Enhances overall physical and emotional wellbeing</li>
            </ul>
          </section>

          {/* INCLUDED */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What Is Included in Pain Clinic Services?
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  1. Comprehensive Pain Assessment
                </h3>
                <p>
                  Detailed evaluation to identify the source, severity, and
                  impact of pain on daily life.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  2. Chronic Pain Management
                </h3>
                <p>
                  Treatment for back pain, neck pain, arthritis, joint pain,
                  fibromyalgia, and nerve-related pain.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  3. Interventional Pain Procedures
                </h3>
                <p>
                  Nerve blocks, epidural injections, trigger point injections,
                  and other minimally invasive pain-relief techniques.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  4. Post-Surgical & Injury Pain Care
                </h3>
                <p>
                  Specialized pain control following surgery, trauma, or
                  orthopedic injuries.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  5. Neuropathic Pain Treatment
                </h3>
                <p>
                  Care for conditions such as sciatica, diabetic neuropathy,
                  and nerve compression syndromes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  6. Medication & Non-Drug Therapies
                </h3>
                <p>
                  Balanced approach using medications, physiotherapy
                  guidance, and lifestyle modification.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  7. Multidisciplinary Pain Management
                </h3>
                <p>
                  Coordinated care involving pain specialists, physiotherapists,
                  and rehabilitation experts.
                </p>
              </div>
            </div>
          </section>

          {/* SUMMARY */}
          <section className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Summary</h2>
            <p>
              Pain Clinic services focus on long-term relief and functional
              improvement through personalized, evidence-based pain management
              strategies, helping patients regain control of their lives.
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

export default PainClinic;
