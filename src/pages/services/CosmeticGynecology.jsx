import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesAndTreatments";

const CosmeticGynecology = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/cosmetic-gynecology.jpg"
          alt="Cosmetic Gynecology Services"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Cosmetic Gynecology
              <span className="block text-green-400">
                Advanced Intimate Wellness Care
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Specialized gynecological procedures focused on improving comfort,
              confidence, function, and intimate well-being with complete safety
              and confidentiality.
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
              What is Cosmetic Gynecology?
            </h2>
            <p>
              Cosmetic gynecology is a specialized branch of women’s healthcare
              that focuses on improving the appearance, comfort, and function of
              intimate areas. These procedures address physical concerns,
              restore confidence, and enhance overall quality of life while
              maintaining complete medical safety and confidentiality.
            </p>
            <p className="mt-3">
              At our centre, cosmetic gynecology services are provided with a
              respectful, ethical, and patient-centric approach using advanced
              techniques and modern technology.
            </p>
          </section>

          {/* SERVICES */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Cosmetic Gynecology Services Include
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Labiaplasty
                </h3>
                <p>
                  Surgical correction or reshaping of the labia to improve
                  comfort, appearance, and hygiene.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Vaginal Tightening
                </h3>
                <p>
                  Non-surgical or surgical procedures to improve vaginal tone
                  and elasticity, often beneficial after childbirth or due to
                  aging.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Vaginal Rejuvenation
                </h3>
                <p>
                  Advanced treatments to enhance vaginal health, lubrication,
                  sensitivity, and overall comfort.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Hymenoplasty
                </h3>
                <p>
                  A safe and confidential procedure performed for personal,
                  cultural, or emotional reasons.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Treatment for Vaginal Dryness
                </h3>
                <p>
                  Medical and non-surgical solutions to improve comfort and
                  intimate well-being.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Scar Correction & Aesthetic Procedures
                </h3>
                <p>
                  Correction of scars or cosmetic concerns related to previous
                  surgeries or childbirth.
                </p>
              </div>
            </div>
          </section>

          {/* BENEFITS */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Benefits of Cosmetic Gynecology
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Improved physical comfort and confidence</li>
              <li>Enhanced intimate health and hygiene</li>
              <li>Better sexual well-being</li>
              <li>Minimal downtime with advanced techniques</li>
              <li>Safe, discreet, and personalized care</li>
            </ul>
          </section>

          {/* SAFETY */}
          <section className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Safety & Confidentiality
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Performed by qualified and experienced gynecologists</li>
              <li>Conducted in a safe, hygienic, and private environment</li>
              <li>Planned after detailed consultation and evaluation</li>
              <li>Handled with complete confidentiality and sensitivity</li>
            </ul>
          </section>

          {/* WHY US */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Us for Cosmetic Gynecology?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>✔ Experienced specialists in cosmetic gynecology</li>
              <li>✔ Advanced and minimally invasive techniques</li>
              <li>✔ Ethical medical practice and transparent counseling</li>
              <li>✔ Personalized treatment plans</li>
              <li>✔ Complete respect for privacy and comfort</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-green-100 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Book a Confidential Consultation
            </h2>
            <p>
              If you are considering cosmetic gynecology services or would like
              expert guidance, book a private consultation with our specialist
              today. We are committed to helping you feel confident,
              comfortable, and cared for.
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

export default CosmeticGynecology;
