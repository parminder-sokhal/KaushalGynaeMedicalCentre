import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today to schedule an appointment or for any inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    SCF 14 , PEERMUCHALA,
                    <br />
                    PEER MUCHALLA, ZIRAKPUR,
                    <br />
                    Punjab 160104
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <a
                    href="tel:9316194659"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    +91 9316194659
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a
                    href="mailto:drkaushalruchita@gmail.com"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    drkaushalruchita@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white p-3 rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Working Hours
                  </h4>
                  <p className="text-gray-600">
                    Mon - Sat: 9:00 AM - 8:00 PM
                    <br />
                    Sunday: 10:00 AM - 2:00 PM
                    <br />
                    24/7 Emergency Services
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <Youtube size={24} />
                </a>
                
                <a
                  href="#"
                  className="bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Book an Appointment
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Tell us about your concerns or questions"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors shadow-lg"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0!2d76.8!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzAwLjAiTiA3NsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
