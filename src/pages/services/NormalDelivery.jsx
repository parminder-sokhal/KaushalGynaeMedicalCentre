import React from "react";
import { Link } from "react-router-dom";

const NormalDelivery = () => {
  return (
    <div className="w-full bg-white font-sans container mx-auto px-6 lg:px-40 mt-20">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 py-16">
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Normal Delivery & Caesarean Section
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Childbirth is a life-changing experience, and every mother deserves 
            safe, comfortable, and well-supported care during delivery. 
            We provide expert support for both Normal Vaginal Delivery and 
            Caesarean Section, ensuring that both mother and baby receive the 
            highest standard of care.
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
            src="/medical-team-examining-pregnant-woman-delivery-while-man-holding-her-hand.jpg"
            alt="Normal Delivery"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 lg:px-30 py-10 text-gray-700 leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Normal Vaginal Delivery (NVD)</h2>
          <p>
            Normal Vaginal Delivery is the natural method of childbirth, where the 
            baby is delivered through the birth canal without major surgical intervention. 
            It offers faster recovery, less discomfort, and promotes early bonding 
            and breastfeeding.
          </p>

          <h3 className="text-xl font-bold mt-4">Benefits of Normal Vaginal Delivery</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Faster recovery and shorter hospital stay.</li>
            <li>Lower risk of infections and complications.</li>
            <li>Immediate bonding and breastfeeding support.</li>
            <li>Better outcomes for future pregnancies.</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">Our Support for Normal Delivery</h3>
          <p>
            We encourage natural birthing while ensuring complete safety with:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Continuous monitoring of labor progress and fetal heartbeat.</li>
            <li>Various pain relief options (epidural, breathing techniques, warm compress, etc.).</li>
            <li>Experienced obstetricians and skilled nursing support.</li>
            <li>Comfortable birthing positions and mobility during labor.</li>
            <li>Emergency backup for any complications.</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">Stages of Normal Delivery</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Labor onset with contractions and cervical dilation.</li>
            <li>Active labor phase with stronger contractions.</li>
            <li>Pushing stage for baby’s delivery through birth canal.</li>
            <li>Delivery of placenta and post-delivery care.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Caesarean Section (C-Section)</h2>
          <p>
            A Caesarean Section is a surgical procedure used to deliver a baby through 
            an incision made in the abdomen and uterus. It is performed when normal 
            delivery may pose risks to the mother or baby.
          </p>

          <h3 className="text-xl font-bold mt-4">When C-Section May Be Recommended</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fetal distress or low oxygen supply to baby.</li>
            <li>Breech or abnormal baby position.</li>
            <li>Placenta previa (placenta covering cervix).</li>
            <li>Failure of labor to progress.</li>
            <li>Multiple pregnancy (twins/triplets).</li>
            <li>Large baby not fitting through birth canal.</li>
            <li>Previous C-section with complications.</li>
            <li>Maternal health issues (high blood pressure, diabetes).</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">How the Procedure Is Done</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Mother receives spinal or epidural anesthesia.</li>
            <li>A horizontal incision (Pfannenstiel cut) is made above the pubic line.</li>
            <li>Baby is gently delivered through the incision.</li>
            <li>Placenta is removed, and incision is closed with sutures.</li>
            <li>The surgery usually takes 40–60 minutes.</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">Recovery After C-Section</h3>
          <p>
            Recovery takes slightly longer than a vaginal delivery. Pain management, wound care, 
            and gradual physical activity are recommended. Most mothers return to normal 
            routines within 4–6 weeks.
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>2–4 day hospital stay with post-surgery observation.</li>
            <li>Pain management and wound healing support.</li>
            <li>Guided return to normal daily activities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Our Delivery Care Approach</h2>
          <p>
            Whether it’s a normal delivery or C-section, our team ensures a safe, 
            comfortable, and respectful birthing experience with modern facilities, 
            compassionate care, and expert support at every step.
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Round-the-clock obstetric and neonatal support.</li>
            <li>Safe and hygienic birthing environment.</li>
            <li>Comprehensive postnatal monitoring.</li>
            <li>Emotional and breastfeeding support after delivery.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p>
            We provide comprehensive maternity support for both Normal and Caesarean deliveries. 
            Our mission is to ensure safety, comfort, and a positive birthing experience for 
            every mother and baby — combining advanced medical technology with compassionate care.
          </p>
        </section>
      </div>
    </div>
  );
};

export default NormalDelivery;
