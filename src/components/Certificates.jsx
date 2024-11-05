import React, { useState } from "react";
import { motion } from "framer-motion";
import { Certificates as CertificateData } from "../constants"; 
import certcss from '../assets/projects/certcss.png';
import certhtml from '../assets/projects/certhtml.png';
import certjava from '../assets/projects/certjava.png';
import certjavainter from '../assets/projects/certjavainter.png';
import certjs from '../assets/projects/certjs.png';

// Map images to certificate data
const imageMap = {
  certcss: certcss,
  certhtml: certhtml,
  certjava: certjava,
  certjavainter: certjavainter,
  certjs: certjs,
};

const CertificatesDisplay = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="border-b border-neutral-900 pb-24"
    >
      <h2 className="my-20 text-center text-4xl">Certificates</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {CertificateData.map((certificate, index) => ( 
          <motion.div
            key={index}
            className="relative"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(certificate)}
          >
            <img
              src={imageMap[certificate.image]} 
              alt={certificate.title} 
              className="cursor-pointer"
              width={400}
              height={300}
            />
          </motion.div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <h6 className="font-semibold text-lg mb-2">
              {selectedCertificate.title} -{' '}
              <span className="text-sm text-purple-600">{selectedCertificate.technologies.join(', ')}</span>
            </h6>
            <p className="text-neutral-600 mb-4">{selectedCertificate.description}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CertificatesDisplay;
