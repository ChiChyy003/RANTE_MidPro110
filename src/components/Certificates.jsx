import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Certificates as CertificateData } from '../constants';
import certcss from '../assets/projects/certcss.png';
import certhtml from '../assets/projects/certhtml.png';
import certjava from '../assets/projects/certjava.png';
import certjavainter from '../assets/projects/certjavainter.png';
import certjs from '../assets/projects/certjs.png';

const imageMap = {
  certcss: certcss,
  certhtml: certhtml,
  certjava: certjava,
  certjavainter: certjavainter,
  certjs: certjs,
};

const CertificatesDisplay = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    // Apply ScrollReveal with staggered effect
    ScrollReveal().reveal('.certificate-item', {
      distance: '70px',
      origin: 'top',
      opacity: 0,
      duration: 700,
      easing: 'ease-out',
      interval: 300, // Delay each item slightly
      reset:true,
    });
  }, []);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="border-b border-neutral-900 pb-24">
      {/* Title Animation */}
      <h2 className="mb-10 text-center text-4xl transition-opacity duration-700">
        Certificates
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {CertificateData.map((certificate, index) => (
          <div
            key={index}
            className="certificate-item relative transform transition-transform duration-300 ease-out hover:scale-105 cursor-pointer"
            onClick={() => openModal(certificate)}
          >
            <img
              src={imageMap[certificate.image]}
              alt={certificate.title}
              className="w-full rounded"
              width={400}
              height={300}
            />
          </div>
        ))}
      </div>

      {/* Modal for selected certificate */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <h6 className="font-semibold text-lg mb-2">
              {selectedCertificate.title} -{' '}
              <span className="text-sm text-purple-600">
                {selectedCertificate.technologies.join(', ')}
              </span>
            </h6>
            <p className="text-neutral-600 mb-4">{selectedCertificate.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesDisplay;
