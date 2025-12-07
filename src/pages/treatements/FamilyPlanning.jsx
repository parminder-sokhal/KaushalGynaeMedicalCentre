import React from "react";
import { Link } from "react-router-dom";

const FamilyPlanning = () => {
  return (
    <div className="w-full bg-white font-sans container mx-auto px-6 lg:px-40 mt-20">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 py-16">
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Family Planning & Contraceptive Services
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Family planning empowers individuals and couples to make informed decisions 
            about when and how many children to have. Our clinic provides safe, effective, 
            and confidential contraceptive options — tailored to your health needs and lifestyle.
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
            src="/family-planning.jpeg"
            alt="Family Planning Consultation"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 lg:px-30 py-10 text-gray-700 leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Why Family Planning Is Important</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Prevents unplanned or unwanted pregnancies.</li>
            <li>Protects maternal and child health.</li>
            <li>Allows proper spacing between children.</li>
            <li>Supports emotional and financial preparedness.</li>
            <li>Reduces pregnancy complications.</li>
            <li>Empowers women with control over reproductive choices.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Family Planning Services</h2>

          <h3 className="text-xl font-bold mt-4">1. Contraceptive Counselling</h3>
          <p>
            Personalized one-on-one counselling helps you choose the best contraceptive method 
            for your body, medical history, and goals. We explain effectiveness, side effects, 
            and usage to ensure informed decisions.
          </p>

          <h3 className="text-xl font-bold mt-4">2. Temporary (Reversible) Methods</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Oral Contraceptive Pills:</strong> Daily pills that prevent ovulation.</li>
            <li><strong>Condoms (Male & Female):</strong> Protect against pregnancy and STIs.</li>
            <li><strong>Injectable Contraceptives:</strong> Hormonal shots effective for 1–3 months.</li>
            <li><strong>Intrauterine Device (IUD / Copper-T / Hormonal IUD):</strong> 
              Small device inserted in the uterus, lasting 3–10 years.</li>
            <li><strong>Emergency Contraception:</strong> Pills taken within 72 hours after 
              unprotected intercourse.</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">3. Long-term & Permanent Methods</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Tubal Ligation:</strong> A minor surgical procedure to permanently prevent pregnancy.</li>
            <li><strong>Vasectomy Counselling:</strong> Safe, simple option for male sterilization.</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">4. Pre-Conception Counselling</h3>
          <p>
            For couples planning a pregnancy, we provide guidance on health screenings, 
            nutrition, supplements, and genetic risk assessments to ensure a safe start.
          </p>

          <h3 className="text-xl font-bold mt-4">5. Fertility Awareness & Natural Methods</h3>
          <p>
            We educate couples on natural fertility tracking, ovulation timing, and cycle 
            awareness for non-hormonal family planning options.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Who Should Consider Family Planning?</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Couples wanting to delay or space pregnancies.</li>
            <li>Women seeking temporary or permanent contraception.</li>
            <li>Individuals with health conditions needing pregnancy planning.</li>
            <li>Couples who have completed their families.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Experienced gynecologists and counsellors.</li>
            <li>Comprehensive contraceptive options.</li>
            <li>Confidential and respectful consultations.</li>
            <li>Personalized care based on health history.</li>
            <li>Holistic reproductive health support.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p>
            Our Family Planning & Contraceptive Services provide safe, reliable, 
            and confidential reproductive healthcare. Whether you wish to delay pregnancy, 
            space births, or choose permanent solutions, our experts ensure 
            informed, supportive, and empowering care.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FamilyPlanning;
