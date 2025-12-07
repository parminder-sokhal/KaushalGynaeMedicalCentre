import React from "react";
import { Link } from "react-router-dom";

const Ultrasonography = () => {
  return (
    <div className="w-full bg-white font-sans container mx-auto px-6 lg:px-40 mt-20">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 py-16">
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Ultrasonography (Pelvic / Obstetric / Follicular Monitoring)
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Our clinic provides high-resolution ultrasound services for accurate diagnosis 
            and pregnancy monitoring. We offer Pelvic, Obstetric, and Follicular scans 
            to ensure early detection and precise reproductive health evaluation.
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
            src="/pregnant-woman-receiving-ultrasound-scan-stomach.jpg"
            alt="Ultrasonography"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 lg:px-30 py-10 text-gray-700 leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Pelvic Ultrasonography</h2>
          <p>
            Pelvic ultrasound helps visualize the uterus, ovaries, and fallopian tubes.  
            It is commonly used to detect fibroids, cysts, endometrial thickness, or 
            any structural abnormalities in the female reproductive system.
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Evaluation of uterine fibroids or cysts.</li>
            <li>Endometrial thickness measurement.</li>
            <li>Ovarian cyst detection and monitoring.</li>
            <li>Assessment of pelvic pain or irregular bleeding.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Obstetric Ultrasonography</h2>
          <p>
            Obstetric ultrasound is essential for monitoring pregnancy from conception to delivery.  
            It helps assess fetal development, heartbeat, and detect any complications early.
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Early pregnancy viability and dating scan.</li>
            <li>NT (Nuchal Translucency) scan for genetic screening.</li>
            <li>Anomaly scan for fetal development and organ check.</li>
            <li>Growth and well-being scan in the third trimester.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Follicular Monitoring</h2>
          <p>
            Follicular monitoring is a series of ultrasound scans that track follicle growth 
            and ovulation timing — essential for couples undergoing fertility treatments like IUI or IVF.
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Monitors ovarian follicle size and endometrial thickness.</li>
            <li>Determines ovulation timing for conception.</li>
            <li>Assists in planning IUI or IVF cycles accurately.</li>
          </ul>

          <p className="mt-2">
            This non-invasive and painless test provides valuable insights into fertility potential.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Our Diagnostic Approach</h2>
          <p>
            We use state-of-the-art ultrasound equipment operated by experienced sonologists and 
            gynecologists to ensure precise imaging and accurate results.
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Latest high-resolution ultrasound machines.</li>
            <li>Safe, radiation-free imaging for mother and baby.</li>
            <li>Comprehensive reporting and patient counseling.</li>
            <li>Available for routine and emergency scans.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p>
            Ultrasonography plays a vital role in women’s healthcare — 
            from early fertility evaluation to pregnancy monitoring.  
            Our diagnostic services provide accurate, safe, and reliable imaging 
            for better clinical outcomes and patient confidence.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Ultrasonography;
