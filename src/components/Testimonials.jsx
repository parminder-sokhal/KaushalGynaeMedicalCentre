import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Panchkula",
      rating: 5,
      text: "Dr. Ruchita is an amazing doctor. I had a painless delivery experience at Kaushal Gynae. The staff was very cooperative and caring throughout my pregnancy journey.",
    },
    {
      name: "Anjali Verma",
      location: "Chandigarh",
      rating: 5,
      text: "Excellent hospital with modern facilities. Dr. Ankush provided exceptional anesthesia care during my surgery. I highly recommend this hospital to everyone.",
    },
    {
      name: "Neha Kapoor",
      location: "Mohali",
      rating: 5,
      text: "Very professional and caring staff. Dr. Ruchita handled my high-risk pregnancy with great expertise. Forever grateful for the care I received here.",
    },
    {
      name: "Simran Kaur",
      location: "Zirakpur",
      rating: 5,
      text: "Best gynaecology hospital in the area. The doctors take time to explain everything and make you feel comfortable. Highly recommended for all women's health needs.",
    },
    {
      name: "Ritu Malhotra",
      location: "Panchkula",
      rating: 5,
      text: "Amazing experience! Dr. Ruchita is very knowledgeable and compassionate. The hospital has excellent facilities and the entire team is very supportive.",
    },
    {
      name: "Kavita Singh",
      location: "Chandigarh",
      rating: 5,
      text: "I traveled from abroad for my treatment and couldn't be happier with my choice. World-class care and facilities. Dr. Ruchita is truly exceptional.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read testimonials from our satisfied patients who have experienced
            our compassionate care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow relative"
            >
              <div className="absolute top-4 right-4 text-pink-200">
                <Quote size={48} />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="border-t border-pink-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Join Thousands of Satisfied Patients
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Experience compassionate care and medical excellence
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div>
              <p className="text-4xl font-bold mb-2">5000+</p>
              <p className="opacity-90">Happy Patients</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">5.0</p>
              <p className="opacity-90">Patient Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="opacity-90">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
