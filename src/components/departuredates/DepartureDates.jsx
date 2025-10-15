import { useState } from 'react';
import "./departure.css";

const DepartureDates = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [activeTab, setActiveTab] = useState('group');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const departures = [
    {
      startDate: '2025-05-29',
      endDate: '2025-06-05',
      status: 'available',
      groupPrice: 650,
      privatePrice: 850
    },
    {
      startDate: '2025-05-30',
      endDate: '2025-06-06',
      status: 'guaranteed',
      groupPrice: 650,
      privatePrice: 850
    },
    {
      startDate: '2025-06-05',
      endDate: '2025-06-12',
      status: 'available',
      groupPrice: 690,
      privatePrice: 900
    },
    {
      startDate: '2025-07-10',
      endDate: '2025-07-17',
      status: 'available',
      groupPrice: 720,
      privatePrice: 920
    },
    {
      startDate: '2025-08-15',
      endDate: '2025-08-22',
      status: 'limited',
      groupPrice: 750,
      privatePrice: 950
    }
  ];

  // Get unique months from departures
  const months = ['all', ...new Set(
    departures.map(dep => new Date(dep.startDate).toLocaleString('default', { month: 'long' }))
  )];

  // Filter departures by selected month
  const filteredDepartures = selectedMonth === 'all'
    ? departures
    : departures.filter(dep =>
      new Date(dep.startDate).toLocaleString('default', { month: 'long' }) === selectedMonth
    );

  const selectedDeparture = departures.find(dep => dep.startDate === selectedDate);

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-blue-100 text-blue-800';
      case 'guaranteed': return 'bg-green-100 text-green-800';
      case 'limited': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-[#313137]';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (

    <section className='departure-details-section'>

      <div className='departure-container max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8'>
        <span>Departure Details</span>
        <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 md:mt-1 mb-0 md:mb-2 xl:mb-4">
          Available Departures
        </h2>


        {filteredDepartures.length > 0 ? (
          <>
            <div className="dates-flex-container">
              {filteredDepartures.map((departure) => (
                <div
                  key={departure.startDate}
                  className={`date-card ${selectedDate === departure.startDate ? 'selected' : ''}`}
                  onClick={() => setSelectedDate(departure.startDate)}
                >
                  <div className="date-range">
                    <div className="date-item">
                      <span className="date-label">Start</span>
                      <span className="date-value">{formatDate(departure.startDate)}</span>
                    </div>
                    <div className="date-separator">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="date-item">
                      <span className="date-label">End</span>
                      <span className="date-value">{formatDate(departure.endDate)}</span>
                    </div>
                  </div>

                  <div className="departure-meta">
                    <span className={`status-badge ${getStatusColor(departure.status)}`}>
                      {departure.status.charAt(0).toUpperCase() + departure.status.slice(1)}
                    </span>
                    <div className="price-action-container">
                      <span className="price-tag">
                        ${activeTab === 'group' ? departure.groupPrice : departure.privatePrice}
                      </span>
                      <button
                        className="book-now-button"
                        disabled={departure.status === 'soldout'}
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Booking for ${formatDate(departure.startDate)}`);
                        }}
                      >
                        {departure.status === 'soldout' ? 'Sold Out' : 'Book Now'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedDeparture && (
              <div className="booking-panel">
                <div className="booking-summary">
                  <h3>Trip Summary</h3>
                  <div className="summary-grid">
                    <div className="summary-item">
                      <span className="summary-label">Dates:</span>
                      <span className="summary-value">
                        {formatDate(selectedDeparture.startDate)} - {formatDate(selectedDeparture.endDate)}
                      </span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Status:</span>
                      <span className={`summary-value ${getStatusColor(selectedDeparture.status)}`}>
                        {selectedDeparture.status.charAt(0).toUpperCase() + selectedDeparture.status.slice(1)}
                      </span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Price:</span>
                      <span className="summary-value price-highlight">
                        ${activeTab === 'group' ? selectedDeparture.groupPrice : selectedDeparture.privatePrice} per person
                      </span>
                    </div>
                  </div>
                </div>

                <button className="cta-button">
                  {activeTab === 'group' ? 'Join Group Trip' : 'Book Private Trip'}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-results">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <p>No departures available for {selectedMonth}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DepartureDates;






