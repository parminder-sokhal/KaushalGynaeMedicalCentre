import React from "react";
import { Link } from "react-router-dom";

const HighRiskPregnancy = () => {
  return (
    <div className="w-full bg-white font-sans container mx-auto px-6 lg:px-40 mt-20">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 py-16">
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            High-Risk Pregnancy Management
          </h1>
          <p className="text-gray-600 leading-relaxed">
            A high-risk pregnancy requires specialized care to ensure the health and safety of both mother and baby. 
            Our clinic provides advanced monitoring, expert guidance, and compassionate support for expecting mothers 
            with pre-existing conditions, pregnancy complications, or special medical needs.
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              to="/contact"
              className="bg-pink-600 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-700 transition-all duration-300 shadow"
            >
              Book Appointment
            </Link>
            <Link
              to="/treatments"
              className="border border-pink-600 text-pink-600 px-6 py-3 rounded-md font-medium hover:bg-pink-50 transition-all duration-300"
            >
              Our Treatments
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src="/high-risk-pregnancy.jpeg"
            alt="High-Risk Pregnancy Care"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 lg:px-30 py-10 text-gray-700 leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            What Is a High-Risk Pregnancy?
          </h2>
          <p>
            A pregnancy is considered high-risk when there is a greater likelihood of health complications for 
            the mother, baby, or both. These cases require more frequent checkups, advanced testing, and 
            personalized care plans to ensure the safest possible outcome.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Common Conditions That Require High-Risk Management
          </h2>

          <h3 className="text-xl font-bold mt-4">1. Gestational Diabetes</h3>
          <p>
            High blood sugar developed during pregnancy can affect the baby’s growth. We manage it through 
            blood sugar monitoring, diet plans, and medication when necessary.
          </p>

          <h3 className="text-xl font-bold mt-4">
            2. Pregnancy-Induced Hypertension & Preeclampsia
          </h3>
          <p>
            Elevated blood pressure during pregnancy increases risks for both mother and baby. 
            Our team provides regular BP monitoring, urine testing, and medication management.
          </p>

          <h3 className="text-xl font-bold mt-4">3. Thyroid Disorders</h3>
          <p>
            Hormonal imbalances can affect pregnancy outcomes. Regular thyroid testing and dose adjustments 
            help maintain healthy levels.
          </p>

          <h3 className="text-xl font-bold mt-4">
            4. Previous Miscarriages or Preterm Deliveries
          </h3>
          <p>
            Extra monitoring and preventive treatments are provided to support a full-term, healthy pregnancy.
          </p>

          <h3 className="text-xl font-bold mt-4">5. Multiple Pregnancy</h3>
          <p>
            Twins or triplets increase risks of preterm birth or growth issues. Specialized ultrasound scans and 
            nutrition plans help manage such cases safely.
          </p>

          <h3 className="text-xl font-bold mt-4">6. Fetal Growth Restriction (FGR / IUGR)</h3>
          <p>
            When the baby is smaller than expected, we perform regular Doppler scans and fetal monitoring to 
            track growth and ensure timely delivery.
          </p>

          <h3 className="text-xl font-bold mt-4">7. Maternal Age Above 35</h3>
          <p>
            Advanced maternal age carries higher risks of diabetes, hypertension, and chromosomal abnormalities. 
            Specialized screenings and genetic counseling are provided.
          </p>

          <h3 className="text-xl font-bold mt-4">8. Placenta-Related Issues</h3>
          <p>
            Conditions like placenta previa or placental insufficiency require careful delivery planning and 
            close observation for maternal safety.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Our High-Risk Pregnancy Care Includes
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Frequent Antenatal Visits:</strong> Regular checkups to monitor blood pressure, sugar, and fetal growth.
            </li>
            <li>
              <strong>Advanced Ultrasonography:</strong> Growth scans, Doppler studies, and biophysical profiles.
            </li>
            <li>
              <strong>Personalized Treatment Plans:</strong> Tailored to the mother’s specific medical condition.
            </li>
            <li>
              <strong>Nutrition & Lifestyle Counselling:</strong> Specialized diets and exercise guidance.
            </li>
            <li>
              <strong>Medication Management:</strong> Safe treatment for diabetes, thyroid, or hypertension.
            </li>
            <li>
              <strong>Labour & Delivery Planning:</strong> Pre-decided mode of delivery based on medical condition.
            </li>
            <li>
              <strong>24/7 Emergency Support:</strong> Immediate medical attention for any sudden symptoms.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Experienced obstetricians & gynecologists.</li>
            <li>Modern monitoring technology.</li>
            <li>Comprehensive neonatal support.</li>
            <li>Compassionate and personalized care.</li>
            <li>Safe, comfortable birthing experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p>
            High-Risk Pregnancy Management focuses on protecting the health and well-being of both mother 
            and baby. With advanced diagnostics, expert supervision, and round-the-clock support, 
            we ensure a safe, confident, and healthy pregnancy journey.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HighRiskPregnancy;
