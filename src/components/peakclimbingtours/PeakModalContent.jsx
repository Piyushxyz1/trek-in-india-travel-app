import React, { useState,useRef,useEffect } from 'react';

const PeakModalContent = ({ peaks }) => {
  const [peakModalOpen, setPeakModalOpen] = useState(false);
    const modalRef = useRef();

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setPeakModalOpen(false);
      }
    };

    if (peakModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [peakModalOpen]);


  return (
    <>
      {/* Button to open modal - added this since your original was missing it */}
      <button
        onClick={() => setPeakModalOpen(true)}
        className="px-4 py-2 bg-[#f47a2a] text-white rounded hover:bg-white hover:text-[#f47a2a] border-2 hover:border-[#f47a2a]  transition- cursor-pointer"
      >
      {peaks[0].label}
      </button>

      {peakModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden"  ref={modalRef}
>
            {/* Modal header */}
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-bold text-gray-800">{}</h2>
              <button 
                onClick={() => setPeakModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>

            {/* Modal content */}
            <div className="overflow-auto max-h-[70vh]">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peak Name</th>
                    <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latitude</th>
                    <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Longitude</th>
                    <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {peaks.map((peak, index) => (
                    <tr key={index}>
                      <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{peak.name}</td>
                      <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">{peak.latitude}</td>
                      <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">{peak.longitude}</td>
                      <td className="px-6 py-2 text-sm text-gray-500">{peak.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PeakModalContent;