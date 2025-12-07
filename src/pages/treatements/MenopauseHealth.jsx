import React from "react";
import { Link } from "react-router-dom";

const MenopauseHealth = () => {
  return (
    <div className="w-full bg-white font-sans container mx-auto px-6 lg:px-40 mt-20">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 py-16">
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Menopause & Women’s Health Support
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Menopause is a natural transition in a woman’s life that brings hormonal, 
            physical, and emotional changes. Our clinic provides comprehensive menopause 
            management, focusing on symptom relief, hormonal balance, bone health, 
            and overall wellbeing — helping women feel confident and healthy during this phase.
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
            src="/menopause-health.jpeg"
            alt="Menopause Care Consultation"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 lg:px-30 py-10 text-gray-700 leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Understanding Menopause</h2>
          <p>
            Menopause marks the end of a woman’s reproductive years, typically occurring between 
            ages 45 and 55. It is diagnosed after 12 consecutive months without a menstrual period. 
            Hormonal changes during this phase can affect physical health, mood, and quality of life.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Perimenopause:</strong> The transitional phase before menopause with irregular cycles.</li>
            <li><strong>Menopause:</strong> The point when menstrual periods permanently stop.</li>
            <li><strong>Postmenopause:</strong> The years following menopause where long-term care is crucial.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Common Symptoms of Menopause</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Hot flashes and night sweats</li>
            <li>Mood swings and anxiety</li>
            <li>Sleep disturbances</li>
            <li>Weight gain</li>
            <li>Vaginal dryness or discomfort</li>
            <li>Reduced libido</li>
            <li>Joint pain and fatigue</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Menopause & Women’s Health Services</h2>

          <h3 className="text-xl font-bold mt-4">1. Hormonal Health Evaluation</h3>
          <p>
            We assess hormone levels, thyroid function, vitamin D, calcium, and bone density 
            to understand the impact of menopause on your body.
          </p>

          <h3 className="text-xl font-bold mt-4">2. Symptom Management</h3>
          <p>
            Personalized treatment plans help relieve hot flashes, mood changes, and sleep issues 
            using lifestyle modifications, natural remedies, or hormone therapy when appropriate.
          </p>

          <h3 className="text-xl font-bold mt-4">3. Hormone Replacement Therapy (HRT) Counselling</h3>
          <p>
            We provide expert counselling on HRT, explaining benefits, risks, and alternatives 
            to help you make an informed choice about managing menopause symptoms safely.
          </p>

          <h3 className="text-xl font-bold mt-4">4. Bone & Joint Health Support</h3>
          <p>
            Menopause increases the risk of osteoporosis. We offer bone scans, calcium supplementation, 
            and exercise plans to maintain strong bones and mobility.
          </p>

          <h3 className="text-xl font-bold mt-4">5. Heart & Metabolic Health Monitoring</h3>
          <p>
            Hormonal changes can affect metabolism and cardiovascular health. 
            We monitor cholesterol, blood pressure, and provide diet and fitness guidance.
          </p>

          <h3 className="text-xl font-bold mt-4">6. Sexual Health & Intimacy Support</h3>
          <p>
            Menopause can affect sexual comfort and confidence. We offer discreet, empathetic 
            counselling and treatments such as estrogen creams and lubricants.
          </p>

          <h3 className="text-xl font-bold mt-4">7. Mental & Emotional Wellbeing</h3>
          <p>
            Emotional support is an essential part of menopause care. 
            Our specialists help with mood regulation, anxiety management, and stress relief strategies.
          </p>

          <h3 className="text-xl font-bold mt-4">8. General Women’s Health Beyond Menopause</h3>
          <p>
            We continue to support your long-term wellness by addressing conditions like PCOS, 
            thyroid issues, urinary incontinence, and weight management.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Experienced specialists in women’s hormonal health.</li>
            <li>Personalized treatment and counselling.</li>
            <li>Comprehensive bone and heart health programs.</li>
            <li>Confidential, compassionate care for every woman.</li>
            <li>Holistic support for physical and emotional wellbeing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p>
            Our Menopause & Women’s Health Support service helps women transition through menopause 
            with confidence and comfort. From hormonal care to emotional guidance, we focus on 
            maintaining balance, vitality, and long-term health at every stage of life.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MenopauseHealth;
