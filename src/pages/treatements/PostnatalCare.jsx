import React from "react";
import { Link } from "react-router-dom";

const PostnatalCare = () => {
  return (
    <div className="w-full bg-white font-sans container mx-auto px-6 lg:px-40 mt-20">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 py-16">
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Post-natal Care & Lactation Counselling
          </h1>
          <p className="text-gray-600 leading-relaxed">
            The post-natal period is a crucial phase for both mother and baby. 
            Our clinic offers complete post-natal and breastfeeding support — 
            ensuring physical recovery, emotional wellbeing, and successful 
            lactation for a healthy start to motherhood.
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
            src="/postnatal-care.jpeg"
            alt="Postnatal Care & Lactation Counselling"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 lg:px-30 py-10 text-gray-700 leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Why Post-natal Care Is Important</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Supports the mother’s physical healing and emotional recovery.</li>
            <li>Ensures proper breastfeeding and nutrition for the baby.</li>
            <li>Prevents complications like infections or excessive bleeding.</li>
            <li>Monitors the baby’s growth and feeding patterns.</li>
            <li>Guides new parents through postpartum challenges.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Our Post-natal Care & Lactation Counselling Services
          </h2>

          <h3 className="text-xl font-bold mt-4">1. Physical Recovery Support for Mothers</h3>
          <p>
            We provide complete medical and emotional care after both 
            normal and C-section deliveries. This includes wound care, 
            pain management, pelvic recovery, and advice on safe physical activity.
          </p>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Monitoring postpartum bleeding (lochia)</li>
            <li>Managing stitches or incision care</li>
            <li>Pelvic floor strengthening exercises</li>
            <li>Rest and nutritional guidance for faster recovery</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">2. Breastfeeding & Lactation Counselling</h3>
          <p>
            Breastfeeding is essential for your baby’s nutrition and immunity. 
            Our lactation consultants help new mothers overcome challenges with 
            personalized guidance and practical techniques.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Correct breastfeeding positions and latch techniques</li>
            <li>Solutions for sore nipples, engorgement, or mastitis</li>
            <li>Advice for maintaining or increasing milk supply</li>
            <li>Pumping and milk storage guidance</li>
            <li>Support for exclusive breastfeeding in the first 6 months</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">3. Newborn Care Guidance</h3>
          <p>
            New parents receive hands-on guidance for safe and confident baby care, including:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Bathing, hygiene, and umbilical cord care</li>
            <li>Recognizing feeding cues</li>
            <li>Understanding baby sleep patterns</li>
            <li>Soothing techniques for crying or colic</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">4. Post-natal Mental & Emotional Wellbeing</h3>
          <p>
            Emotional changes are common after childbirth. 
            Our team supports mothers in managing postpartum mood swings, anxiety, 
            or depression, offering counselling and referrals when necessary.
          </p>

          <h3 className="text-xl font-bold mt-4">5. Nutrition & Lifestyle Support</h3>
          <p>
            Nutrition plays a key role in postpartum recovery and breastfeeding. 
            We provide diet plans rich in vitamins, iron, and calcium to rebuild strength 
            and support milk production.
          </p>

          <h3 className="text-xl font-bold mt-4">6. Postpartum Checkups</h3>
          <p>
            Regular follow-ups help ensure proper uterine healing, 
            stable blood pressure, healthy weight, and overall wellbeing.
          </p>

          <h3 className="text-xl font-bold mt-4">7. Family Counselling & Partner Support</h3>
          <p>
            Family involvement is vital in postpartum care. 
            We educate family members on how to provide emotional support, 
            assist in baby care, and create a nurturing environment for the mother.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Experienced gynaecologists, paediatricians, and lactation experts.</li>
            <li>Holistic care covering physical, emotional, and nutritional needs.</li>
            <li>Supportive and compassionate postpartum environment.</li>
            <li>Personalized care plans for mother and baby.</li>
            <li>Evidence-based guidance and continuous follow-up.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p>
            Our Post-natal Care & Lactation Counselling services ensure a smooth transition 
            into motherhood. From recovery and breastfeeding support to emotional wellbeing, 
            we provide complete, compassionate care for both mother and baby.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PostnatalCare;
