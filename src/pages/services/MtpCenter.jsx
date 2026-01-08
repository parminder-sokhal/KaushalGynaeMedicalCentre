import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesAndTreatments";

const MtpCenter = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/mtp-center.jpg"
          alt="Government Approved MTP Center"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Government-Approved MTP Center
              <span className="block text-green-400">
                Safe, Legal & Confidential Care
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              We provide ethical, confidential, and government-authorized
              Medical Termination of Pregnancy services in full compliance with
              legal and medical guidelines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="https://u.tatvacare.in/r/SPtEZB"
                className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Consultation
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
          {/* INTRO */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Government-Approved MTP Services
            </h2>
            <p>
              At our hospital, we are a Government-Approved MTP (Medical
              Termination of Pregnancy) Center, legally recognized and
              authorized to provide safe and ethical abortion care in accordance
              with national health regulations.
            </p>
            <p className="mt-3">
              All procedures are carried out with complete confidentiality,
              medical safety, and respect for patient dignity.
            </p>
          </section>

          {/* WHAT DOES GOVERNMENT APPROVED MEAN */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Does “Government Approved” Mean?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Our facility meets all legal and medical standards set by
                government authorities
              </li>
              <li>
                Procedures are performed only by registered and trained medical
                professionals
              </li>
              <li>
                Full compliance with the Medical Termination of Pregnancy (MTP)
                Act and guidelines
              </li>
              <li>
                Strict standards of hygiene, safety, and ethical medical care
              </li>
              <li>Complete confidentiality at every stage</li>
            </ul>
          </section>

          {/* SERVICES */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Services We Provide
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Medical (Non-Surgical) Abortion for early pregnancies under
                doctor supervision
              </li>
              <li>
                Surgical abortion procedures when medically indicated and within
                legal gestational limits
              </li>
              <li>
                Pre-procedure counseling to explain options, risks, and patient
                rights
              </li>
              <li>
                Post-procedure care and follow-up to ensure complete recovery
              </li>
              <li>
                Family planning and contraception counseling for future care
              </li>
            </ul>
          </section>

          {/* SAFETY & CONFIDENTIALITY */}
          <section className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Safe & Confidential Care
            </h2>
            <p>
              Your privacy, comfort, and safety are our highest priorities. All
              consultations and procedures are conducted in a secure,
              respectful, and judgment-free environment.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Strict patient confidentiality</li>
              <li>Compassionate and non-judgmental care</li>
              <li>Clear medical guidance at every step</li>
            </ul>
          </section>

          {/* KNOW YOUR RIGHTS */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Know Your Rights
            </h2>
            <p>We ensure that every patient is fully informed about:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Legal rights related to MTP</li>
              <li>Available procedure options</li>
              <li>Potential risks and benefits</li>
              <li>Post-procedure care and follow-up requirements</li>
            </ul>
            <p className="mt-3">
              Our medical team is always available to answer your questions
              honestly and respectfully.
            </p>
          </section>

          {/* WHY CHOOSE US */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our MTP Center?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>✔ Government-authorized and legally compliant facility</li>
              <li>✔ Experienced gynecologists and trained medical staff</li>
              <li>✔ Safe, evidence-based medical practices</li>
              <li>✔ Private, compassionate, and respectful care</li>
              <li>✔ Transparent and affordable treatment approach</li>
            </ul>
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

export default MtpCenter;
