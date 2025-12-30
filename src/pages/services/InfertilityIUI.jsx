import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesAndTreatments";

const InfertilityIUI = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/change-text-adobe.jpg"
          alt="Infertility Treatment & IUI"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Infertility Services
              <span className="block text-pink-400">
                IUI, IVF & Fertility Care
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Advanced fertility evaluation and treatments including IUI and
              IVF, delivered with compassion and expert medical care.
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
          {/* UNDERSTANDING */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Understanding Infertility
            </h2>
            <p>
              Infertility is defined as the inability to conceive after one year
              of regular, unprotected intercourse. It may result from hormonal
              imbalance, ovulation problems, tubal issues, or male factor
              infertility. Early diagnosis improves treatment success.
            </p>
          </section>

          {/* EVALUATION */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Fertility Evaluation & Diagnosis
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Detailed medical and menstrual history</li>
              <li>Hormonal and thyroid assessments</li>
              <li>Pelvic ultrasound for uterine & ovarian evaluation</li>
              <li>HSG to assess fallopian tube patency</li>
              <li>Semen analysis for male fertility assessment</li>
            </ul>
          </section>

          {/* IUI */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Intrauterine Insemination (IUI)
            </h2>
            <p>
              IUI is a minimally invasive fertility treatment where prepared,
              high-quality sperm are placed directly into the uterus during
              ovulation to improve the chances of conception.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              When Is IUI Recommended?
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Unexplained infertility</li>
              <li>Mild male factor infertility</li>
              <li>Ovulation or cervical mucus issues</li>
              <li>Couples unable to have regular intercourse</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Benefits of IUI
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Less invasive and cost-effective</li>
              <li>Painless outpatient procedure</li>
              <li>Higher success with ovulation induction</li>
            </ul>
          </section>

          {/* IVF */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              In-Vitro Fertilization (IVF)
            </h2>
            <p>
              IVF involves fertilizing an egg outside the body and transferring
              the embryo into the uterus. It is recommended for blocked tubes,
              severe male infertility, or failed IUI cycles.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Controlled ovarian stimulation & egg retrieval</li>
              <li>Fertilization and embryo culture</li>
              <li>Embryo transfer under ultrasound guidance</li>
            </ul>

            <p className="mt-2">
              Advanced options such as ICSI, embryo freezing, and donor programs
              are also available when required.
            </p>
          </section>

          {/* SUPPORT */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Supportive Fertility Treatments
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ovulation induction and hormonal therapy</li>
              <li>PCOS management</li>
              <li>Endometriosis and tubal blockage treatment</li>
              <li>Lifestyle & nutritional fertility counseling</li>
            </ul>
          </section>

          {/* SUMMARY */}
          <section className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Summary</h2>
            <p>
              Our infertility program combines advanced reproductive technology
              with compassionate care. Whether through IUI, IVF, or medical
              management, every treatment plan is personalized to give couples
              the best chance of achieving a healthy pregnancy.
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

export default InfertilityIUI;
