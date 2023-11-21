import React, { useState } from 'react';
import metroBackgroundImage from 'C:/Users/User/Desktop/RideMate/MERN-BUS-APP/frontend/src/components/metroList/metro_image.jpg';
// import metroRoutesImage from './path/to/metro-routes-image.jpg';


const MetroBooking = () => {
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [passengerCount, setPassengerCount] = useState(1); // Default to 1 passenger
  // Dummy data for metro routes and prices
  const metroRoutes = [
    { id: 1, start: 'Majestic', end: 'Indiranagar', price: 20 },
    { id: 2, start: 'Majestic', end: 'Yeshwantpur', price: 25 },
    { id: 3, start: 'Indiranagar', end: 'Yeshwantpur', price: 30 },
    { id: 4, start: 'Majestic', end: 'JP Nagar', price: 35 },
    { id: 5, start: 'Indiranagar', end: 'JP Nagar', price: 30 },
    { id: 6, start: 'Yeshwantpur', end: 'JP Nagar', price: 40 },
    { id: 7, start: 'Majestic', end: 'Banashankari', price: 45 },
    { id: 8, start: 'Indiranagar', end: 'Banashankari', price: 40 },
    { id: 9, start: 'Yeshwantpur', end: 'Banashankari', price: 50 },
    { id: 10, start: 'JP Nagar', end: 'Banashankari', price: 25 },
    { id: 11, start: 'JP Nagar', end: 'Yeshwantpur', price: 35 },
    { id: 12, start: 'Banashankari', end: 'Majestic', price: 45 },
    { id: 13, start: 'Banashankari', end: 'Indiranagar', price: 50 },
    { id: 14, start: 'Banashankari', end: 'JP Nagar', price: 30 },
    { id: 15, start: 'Majestic', end: 'Kengeri', price: 55 },
    { id: 16, start: 'Indiranagar', end: 'Kengeri', price: 60 },
    { id: 17, start: 'Yeshwantpur', end: 'Kengeri', price: 70 },
    { id: 18, start: 'JP Nagar', end: 'Kengeri', price: 40 },
    { id: 19, start: 'Banashankari', end: 'Kengeri', price: 75 },
    { id: 20, start: 'Kengeri', end: 'Majestic', price: 80 },
    { id: 21, start: 'Kengeri', end: 'Indiranagar', price: 85 },
    { id: 22, start: 'Kengeri', end: 'Yeshwantpur', price: 90 },
    { id: 23, start: 'Kengeri', end: 'JP Nagar', price: 55 },
    { id: 24, start: 'Kengeri', end: 'Banashankari', price: 95 },
    { id: 25, start: 'Majestic', end: 'Nayandahalli', price: 40 },
    { id: 26, start: 'Indiranagar', end: 'Nayandahalli', price: 45 },
    { id: 27, start: 'Yeshwantpur', end: 'Nayandahalli', price: 50 },
    { id: 28, start: 'JP Nagar', end: 'Nayandahalli', price: 35 },
    { id: 29, start: 'Banashankari', end: 'Nayandahalli', price: 55 },
    { id: 30, start: 'Kengeri', end: 'Nayandahalli', price: 60 },
    { id: 31, start: 'Nayandahalli', end: 'Majestic', price: 65 },
    { id: 32, start: 'Nayandahalli', end: 'Indiranagar', price: 70 },
    { id: 33, start: 'Nayandahalli', end: 'Yeshwantpur', price: 75 },
    { id: 34, start: 'Nayandahalli', end: 'JP Nagar', price: 80 },
    { id: 35, start: 'Nayandahalli', end: 'Banashankari', price: 85 },
    { id: 36, start: 'Nayandahalli', end: 'Kengeri', price: 90 },
    { id: 37, start: 'Majestic', end: 'K R Market', price: 20 },
    { id: 38, start: 'Indiranagar', end: 'K R Market', price: 25 },
    { id: 39, start: 'Yeshwantpur', end: 'K R Market', price: 30 },
    { id: 40, start: 'JP Nagar', end: 'K R Market', price: 35 },
    { id: 41, start: 'Banashankari', end: 'K R Market', price: 40 },
    { id: 42, start: 'Kengeri', end: 'K R Market', price: 45 },
    { id: 43, start: 'Nayandahalli', end: 'K R Market', price: 50 },
    { id: 44, start: 'K R Market', end: 'Majestic', price: 55 },
    { id: 45, start: 'K R Market', end: 'Indiranagar', price: 60 },
    { id: 46, start: 'K R Market', end: 'Yeshwantpur', price: 65 },
    { id: 47, start: 'K R Market', end: 'JP Nagar', price: 70 },
    { id: 48, start: 'K R Market', end: 'Banashankari', price: 75 },
    { id: 49, start: 'K R Market', end: 'Kengeri', price: 80 },
    { id: 50, start: 'K R Market', end: 'Nayandahalli', price: 85 },
    { id: 51, start: 'Majestic', end: 'Malleswaram', price: 25 },
    { id: 52, start: 'Indiranagar', end: 'Malleswaram', price: 30 },
    { id: 53, start: 'Yeshwantpur', end: 'Malleswaram', price: 35 },
    { id: 54, start: 'JP Nagar', end: 'Malleswaram', price: 40 },
    { id: 55, start: 'Banashankari', end: 'Malleswaram', price: 45 },
    { id: 56, start: 'Kengeri', end: 'Malleswaram', price: 50 },
    { id: 57, start: 'Nayandahalli', end: 'Malleswaram', price: 55 },
    { id: 58, start: 'K R Market', end: 'Malleswaram', price: 60 },
    { id: 59, start: 'Malleswaram', end: 'Majestic', price: 65 },
    { id: 60, start: 'Malleswaram', end: 'Indiranagar', price: 70 },
    { id: 61, start: 'Malleswaram', end: 'Yeshwantpur', price: 75 },
    { id: 62, start: 'Malleswaram', end: 'JP Nagar', price: 80 },
    { id: 63, start: 'Malleswaram', end: 'Banashankari', price: 85 },
    { id: 64, start: 'Malleswaram', end: 'Kengeri', price: 90 },
    { id: 65, start: 'Malleswaram', end: 'Nayandahalli', price: 95 },
    { id: 66, start: 'Malleswaram', end: 'K R Market', price: 100 },
    { id: 67, start: 'Majestic', end: 'Seshadripuram', price: 30 },
    { id: 68, start: 'Indiranagar', end: 'Seshadripuram', price: 35 },
    { id: 69, start: 'Yeshwantpur', end: 'Seshadripuram', price: 40 },
    { id: 70, start: 'JP Nagar', end: 'Seshadripuram', price: 45 },
    { id: 71, start: 'Banashankari', end: 'Seshadripuram', price: 50 },
    { id: 72, start: 'Kengeri', end: 'Seshadripuram', price: 55 },
    { id: 73, start: 'Nayandahalli', end: 'Seshadripuram', price: 60 },
    { id: 74, start: 'K R Market', end: 'Seshadripuram', price: 65 },
    { id: 75, start: 'Malleswaram', end: 'Seshadripuram', price: 70 },
    { id: 76, start: 'Seshadripuram', end: 'Majestic', price: 75 },
    { id: 77, start: 'Seshadripuram', end: 'Indiranagar', price: 80 },
    { id: 78, start: 'Seshadripuram', end: 'Yeshwantpur', price: 85 },
    { id: 79, start: 'Seshadripuram', end: 'JP Nagar', price: 90 },
    { id: 80, start: 'Seshadripuram', end: 'Banashankari', price: 95 },
    { id: 81, start: 'Majestic', end: 'Electronic City', price: 50 },
  { id: 82, start: 'Indiranagar', end: 'Electronic City', price: 55 },
  { id: 83, start: 'Yeshwantpur', end: 'Electronic City', price: 60 },
  { id: 84, start: 'JP Nagar', end: 'Electronic City', price: 65 },
  { id: 85, start: 'Banashankari', end: 'Electronic City', price: 70 },
  { id: 86, start: 'Kengeri', end: 'Electronic City', price: 75 },
  { id: 87, start: 'Nayandahalli', end: 'Electronic City', price: 80 },
  { id: 88, start: 'K R Market', end: 'Electronic City', price: 85 },
  { id: 89, start: 'Malleswaram', end: 'Electronic City', price: 90 },
  { id: 90, start: 'Seshadripuram', end: 'Electronic City', price: 95 },
  { id: 91, start: 'Electronic City', end: 'Majestic', price: 100 },
  { id: 92, start: 'Electronic City', end: 'Indiranagar', price: 105 },
  { id: 93, start: 'Electronic City', end: 'Yeshwantpur', price: 110 },
  { id: 94, start: 'Electronic City', end: 'JP Nagar', price: 115 },
  { id: 95, start: 'Electronic City', end: 'Banashankari', price: 120 },
  { id: 96, start: 'Electronic City', end: 'Kengeri', price: 125 },
  { id: 97, start: 'Electronic City', end: 'Nayandahalli', price: 130 },
  { id: 98, start: 'Electronic City', end: 'K R Market', price: 135 },
  { id: 99, start: 'Electronic City', end: 'Malleswaram', price: 140 },
  { id: 100, start: 'Electronic City', end: 'Seshadripuram', price: 145 }
    // Add more routes as needed
  ];
  

  const calculateFare = () => {
    const route = metroRoutes.find(
      (r) => r.start === startStation && r.end === endStation
    );
    return route ? route.price*passengerCount : 0;
  };

  const handleBookTicket = () => {
    // Open WhatsApp Web in Chrome
    const whatsappLink = `https://web.whatsapp.com/send?phone=8105556677&text=Book%20ticket%20from%20${startStation}%20to%20${endStation}%20.The number of passengers is %20${passengerCount}`;
    window.open(whatsappLink, '_blank');
  };

  const uniqueStartStations = Array.from(new Set(metroRoutes.map((route) => route.start)));
  const uniqueEndStations = Array.from(new Set(metroRoutes.map((route) => route.end)));
  const backgroundImageStyle = {
    background: `url(${metroBackgroundImage})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
  };

  const metroRoutesImageStyle = {
    maxWidth: '100%',
     height: 'auto',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Adjust the layout to stack elements vertically
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%', // Ensure the container takes up the full width
    background: `url(${metroBackgroundImage}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  };
  const headingStyle = {
    color: 'black',
    textAlign: 'center',
    marginBottom: '20px', // Add some space between the heading and the form
  };

  const formContainerStyle = {
    background: 'rgba(255, 255, 255, 0.8)', // Add a semi-transparent white background to make text readable
    padding: '20px',
    borderRadius: '10px',
  };
  return (
    <div style={containerStyle}>
       <h1 style = {headingStyle}> NAMMA METRO</h1>
       <div style={formContainerStyle}>
        <div>
      <label>
        Select Starting Station:
        <select value={startStation} onChange={(e) => setStartStation(e.target.value)}>
          <option value="">Select</option>
          {uniqueStartStations.map((station) => (
            <option key={station} value={station}>
              {station}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Select Destination Station:
        <select value={endStation} onChange={(e) => setEndStation(e.target.value)}>
          <option value="">Select</option>
          {uniqueEndStations.map((station) => (
            <option key={station} value={station}>
              {station}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Number of Passengers:
        <input
          type="number"
          min="1"
          value={passengerCount}
          onChange={(e) => setPassengerCount(Math.max(1, parseInt(e.target.value, 10)))}/>
      </label>
      <br />
      <p>Fare: {calculateFare()} INR</p>
      <button onClick={handleBookTicket} disabled={!startStation || !endStation}>
        Book Ticket
      </button>
    </div>
    <div style={{ marginLeft: '50px' }}>
          {/* Image of all Namma Metro routes */}
          <img
            src="C:/Users/User/Desktop/RideMate/MERN-BUS-APP/frontend/src/components/metroList/metro_map.png"
            alt="Namma Metro Routes"
            style={metroRoutesImageStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default MetroBooking;
