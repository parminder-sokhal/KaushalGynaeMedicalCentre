import { useParams, useNavigate } from 'react-router-dom';
import { servicesData, treatmentData } from '../data/servicesAndTreatments';
import { ArrowLeft } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const allData = [...servicesData, ...treatmentData];
  const item = allData.find(s => s.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8 font-medium transition"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {item.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {item.shortDescription}
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            {item.content.split('\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith('•')) {
                return (
                  <div key={index} className="flex gap-4 mb-3">
                    <span className="text-pink-600 font-bold flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-700 m-0">{trimmed.substring(1).trim()}</p>
                  </div>
                );
              }

              if (trimmed.match(/^\d+\./)) {
                return (
                  <div key={index} className="flex gap-4 mb-4 mt-6">
                    <span className="text-pink-600 font-bold flex-shrink-0">{trimmed.match(/^\d+\./)}</span>
                    <div>
                      <p className="text-gray-900 font-semibold m-0">{trimmed.replace(/^\d+\.\s*/, '')}</p>
                    </div>
                  </div>
                );
              }

              if (trimmed.startsWith('✔')) {
                return (
                  <div key={index} className="flex gap-4 mb-3 bg-pink-50 p-3 rounded-lg">
                    <span className="text-pink-600 font-bold flex-shrink-0">✔</span>
                    <p className="text-gray-700 m-0">{trimmed.substring(1).trim()}</p>
                  </div>
                );
              }

              if (trimmed.match(/^[a-z]\)/)) {
                return (
                  <div key={index} className="flex gap-4 mb-3 ml-6">
                    <span className="text-pink-600 font-bold flex-shrink-0">{trimmed.match(/^[a-z]\)/)}</span>
                    <p className="text-gray-700 m-0">{trimmed.replace(/^[a-z]\)\s*/, '')}</p>
                  </div>
                );
              }

              if (
                trimmed.includes(':') &&
                !trimmed.match(/^(.*?):\s*\n/) &&
                trimmed.length < 100 &&
                !trimmed.includes('http')
              ) {
                return (
                  <p key={index} className="text-gray-900 font-semibold mt-6 mb-3 text-lg">
                    {trimmed}
                  </p>
                );
              }

              if (trimmed === 'Summary') {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    {trimmed}
                  </h2>
                );
              }

              return (
                <p key={index} className="text-gray-700 mb-4">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition font-medium"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
