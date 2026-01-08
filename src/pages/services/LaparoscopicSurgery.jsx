import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesAndTreatments";

const LaparoscopicSurgery = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/laparoscopic-surgery.jpg"
          alt="Laparoscopic Surgery"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Laparoscopic Surgery
              <span className="block text-green-400">
                Advanced Minimally Invasive Care
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Modern surgical techniques using small incisions to ensure
              precision, faster recovery, minimal pain, and better cosmetic
              outcomes.
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
          {/* WHAT IS */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What is Laparoscopic Surgery?
            </h2>
            <p>
              Laparoscopic surgery, also known as minimally invasive or keyhole
              surgery, is an advanced surgical technique performed using small
              incisions instead of large cuts. A thin instrument called a
              laparoscope, equipped with a high-definition camera, allows the
              surgeon to view internal organs on a monitor and perform the
              procedure with high precision.
            </p>
            <p className="mt-3">
              This modern approach significantly reduces pain, minimizes
              scarring, and enables faster recovery compared to traditional open
              surgery.
            </p>
          </section>

          {/* COMMON PROCEDURES */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Common Laparoscopic Procedures
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Laparoscopic hysterectomy</li>
              <li>Laparoscopic myomectomy (fibroid removal)</li>
              <li>Laparoscopic ovarian cyst removal</li>
              <li>Laparoscopic treatment of endometriosis</li>
              <li>Laparoscopic appendectomy</li>
              <li>Laparoscopic gallbladder removal (cholecystectomy)</li>
              <li>Diagnostic laparoscopy for infertility evaluation</li>
            </ul>
          </section>

          {/* BENEFITS */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Benefits of Laparoscopic Surgery
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Smaller incisions and minimal scarring</li>
              <li>Less postoperative pain</li>
              <li>Reduced risk of infection</li>
              <li>Shorter hospital stay</li>
              <li>Faster recovery and return to daily activities</li>
              <li>Minimal blood loss</li>
              <li>Better cosmetic results</li>
            </ul>
          </section>

          {/* PROCEDURE */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How the Procedure is Performed
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Small incisions (usually 0.5–1 cm) are made in the abdomen
              </li>
              <li>
                Carbon dioxide gas is introduced to expand the area for better
                visibility
              </li>
              <li>
                A laparoscope and specialized surgical instruments are inserted
              </li>
              <li>
                The surgeon performs the procedure using magnified images on a
                screen
              </li>
              <li>
                Instruments are removed and incisions are closed with sutures or
                surgical glue
              </li>
            </ul>
          </section>

          {/* RECOVERY */}
          <section className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Recovery After Laparoscopic Surgery
            </h2>
            <p>
              Most patients recover quickly after laparoscopic surgery. Mild
              discomfort, bloating, or shoulder pain may occur temporarily due
              to the gas used during the procedure.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Discharge within 24–48 hours in most cases</li>
              <li>Return to daily activities within a few days</li>
              <li>Recovery time varies depending on the procedure performed</li>
            </ul>
          </section>

          {/* SAFETY */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Is Laparoscopic Surgery Safe?
            </h2>
            <p>
              Yes. Laparoscopic surgery is safe and effective when performed by
              experienced surgeons using advanced equipment. Like any surgical
              procedure, it carries minimal risks such as bleeding or infection,
              which are carefully managed by our expert surgical team.
            </p>
          </section>

          {/* WHY US */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Us for Laparoscopic Surgery?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>✔ Experienced and skilled laparoscopic surgeons</li>
              <li>✔ Advanced surgical technology</li>
              <li>✔ Personalized patient-centric care</li>
              <li>✔ High standards of safety and hygiene</li>
              <li>✔ Comprehensive pre- and post-operative support</li>
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

export default LaparoscopicSurgery;
