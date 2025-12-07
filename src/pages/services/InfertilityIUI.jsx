import React from "react";
import { Link } from "react-router-dom";

const InfertilityIUI = () => {
  return (
    <div className="w-full bg-white font-sans container mx-auto px-6 lg:px-40 mt-20">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 py-16">
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Infertility Services – IUI, IVF & Related Treatments
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Our fertility services are designed to help couples fulfill their dream of parenthood.  
            We offer advanced fertility assessments and treatments such as IUI and IVF under the care of expert gynecologists and fertility specialists.
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
            src="/change-text-adobe.jpg"
            alt="Infertility Treatment"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 lg:px-30 py-10 text-gray-700 leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Understanding Infertility</h2>
          <p>
            Infertility is the inability to conceive after one year of regular, unprotected intercourse.  
            It can result from hormonal imbalance, ovulation problems, or male factor infertility.  
            Early evaluation helps identify and treat underlying causes effectively.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Fertility Evaluation & Diagnosis</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Detailed medical and menstrual history.</li>
            <li>Hormonal and thyroid assessments.</li>
            <li>Pelvic ultrasound for uterine and ovarian evaluation.</li>
            <li>Hysterosalpingography (HSG) for tube patency.</li>
            <li>Semen analysis for male fertility assessment.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Intrauterine Insemination (IUI)</h2>
          <p>
            IUI is a simple and effective fertility treatment in which washed and prepared sperm are placed 
            directly into the uterus during ovulation to increase chances of conception.
          </p>

          <h3 className="text-xl font-bold mt-4">When Is IUI Recommended?</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Unexplained infertility.</li>
            <li>Mild male factor infertility.</li>
            <li>Cervical mucus issues or ovulation problems.</li>
            <li>Couples unable to have regular intercourse.</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">Benefits of IUI</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Less invasive and cost-effective.</li>
            <li>Painless and outpatient procedure.</li>
            <li>Higher success when combined with ovulation induction medicines.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. In-Vitro Fertilization (IVF)</h2>
          <p>
            IVF involves fertilizing an egg outside the body and transferring the embryo into the uterus.  
            It is ideal for blocked tubes, severe male infertility, or failed IUI cycles.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Controlled ovarian stimulation and egg retrieval.</li>
            <li>Fertilization and embryo culture in the lab.</li>
            <li>Embryo transfer into the uterus under ultrasound guidance.</li>
          </ul>

          <p className="mt-2">
            IVF success rates are high, and advanced options like ICSI, embryo freezing, and donor programs are also available.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Supportive Treatments</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Ovulation induction and hormonal therapy.</li>
            <li>Polycystic ovary management (PCOS).</li>
            <li>Endometriosis and tubal blockage treatment.</li>
            <li>Lifestyle and nutritional counseling for fertility improvement.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p>
            Our infertility treatment program combines compassionate care with advanced reproductive technology.  
            Whether through IUI, IVF, or hormonal management, we tailor every plan to each couple’s unique fertility needs, 
            offering the best chance of achieving a healthy pregnancy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default InfertilityIUI;
