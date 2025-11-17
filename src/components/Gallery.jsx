const Gallery = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Modern Facilities",
    },
    {
      url: "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Advanced Equipment",
    },
    {
      url: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Surgical Suite",
    },
    {
      url: "https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Patient Care",
    },
    {
      url: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Consultation Room",
    },
    {
      url: "https://images.pexels.com/photos/7108367/pexels-photo-7108367.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Medical Team",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Facility Gallery
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art medical facility
            equipped with the latest technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-bold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">Latest</div>
            <p className="text-gray-700 font-semibold">Medical Equipment</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">
              Advanced
            </div>
            <p className="text-gray-700 font-semibold">Surgical Instruments</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">24/7</div>
            <p className="text-gray-700 font-semibold">Emergency Services</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
