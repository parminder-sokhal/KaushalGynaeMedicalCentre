import { Link } from "react-router-dom";
import { treatmentData } from "../../data/servicesAndTreatments";

const NormalVaginalDeliveryAndCSection = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/delivery-care.jpeg"
          alt="Normal Vaginal Delivery & Caesarean Section"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Normal Delivery
              <span className="block text-pink-400">& Caesarean Section</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Safe, comfortable, and well-supported childbirth care with expert
              medical guidance for both normal vaginal delivery and C-section.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="https://u.tatvacare.in/r/SPtEZB"
                className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Consultation
              </Link>

              <Link
                to="/treatments"
                className="bg-white/90 text-pink-500 hover:bg-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Other Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-6 py-16 grid lg:grid-cols-4 gap-12">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-14">
          {/* INTRO */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Complete Delivery Care
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Childbirth is a life-changing experience. We provide expert care
              for both Normal Vaginal Delivery (NVD) and Caesarean Section
              (C-Section), ensuring safety, comfort, and emotional support for
              both mother and baby at every stage of delivery.
            </p>
          </div>

          {/* NORMAL DELIVERY */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              1. Normal Vaginal Delivery (NVD)
            </h2>

            <p className="text-gray-700 mb-4">
              Normal Vaginal Delivery is the natural method of childbirth where
              the baby is delivered through the birth canal without major
              surgical intervention.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Benefits of Normal Vaginal Delivery
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Faster recovery and shorter hospital stay</li>
              <li>Less post-delivery discomfort</li>
              <li>Lower risk of infections</li>
              <li>Early bonding and breastfeeding</li>
              <li>Better outcomes in future pregnancies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              How We Support Normal Delivery
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Continuous monitoring of labor and fetal heartbeat</li>
              <li>
                Pain relief options (epidural, breathing techniques, etc.)
              </li>
              <li>Experienced obstetricians and skilled nursing staff</li>
              <li>Mobility and comfortable labor positions</li>
              <li>Emergency backup support when required</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              What Happens During Normal Delivery
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Onset of labor with contractions and cervical dilation</li>
              <li>Active labor with stronger contractions</li>
              <li>Pushing stage and baby’s birth</li>
              <li>Delivery of placenta</li>
              <li>Immediate post-delivery care for mother and baby</li>
            </ul>
          </div>

          {/* C-SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              2. Caesarean Section (C-Section)
            </h2>

            <p className="text-gray-700 mb-4">
              A Caesarean Section is a surgical procedure in which the baby is
              delivered through an incision in the mother’s abdomen and uterus.
              It is performed when normal delivery may not be safe.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              When C-Section May Be Recommended
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Fetal distress</li>
              <li>Breech or abnormal baby position</li>
              <li>Placenta previa</li>
              <li>Failure of labor to progress</li>
              <li>Multiple pregnancy (twins or triplets)</li>
              <li>Large baby</li>
              <li>Previous C-section or maternal health issues</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              How the Procedure Is Done
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Spinal or epidural anesthesia is given</li>
              <li>A small horizontal incision is made</li>
              <li>Baby and placenta are safely delivered</li>
              <li>Incision is closed with sutures</li>
              <li>Procedure usually lasts 40–60 minutes</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Recovery After C-Section
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Hospital stay of 2–4 days</li>
              <li>Pain management and wound care</li>
              <li>Gradual return to daily activities</li>
              <li>Regular post-surgical follow-ups</li>
            </ul>
          </div>

          {/* APPROACH */}
          <div className="bg-gradient-to-br from-pink-50 to-white p-10 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Delivery Care Approach
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li>✔ Safety of both mother and baby</li>
              <li>✔ Comfortable and respectful birthing experience</li>
              <li>✔ Skilled obstetricians and nursing team</li>
              <li>✔ Modern facilities with emergency readiness</li>
              <li>✔ Support for mother’s birthing preferences</li>
            </ul>
          </div>

          {/* SUMMARY */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Summary</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We offer complete maternity support for both Normal Vaginal
              Delivery and Caesarean Section. With advanced facilities,
              experienced doctors, and compassionate care, we ensure that every
              mother and newborn receive the safest and best possible start.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="bg-gray-50 p-6 rounded-2xl h-fit shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Other Treatments
          </h3>
          <ul className="space-y-3 text-pink-500 font-medium">
            {treatmentData.map((item) => (
              <li key={item.id}>
                <Link to={`/treatments/${item.id}`}>› {item.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
};

export default NormalVaginalDeliveryAndCSection;
