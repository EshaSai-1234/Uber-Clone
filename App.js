import React, { useState } from "react";
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";
import BookingSummary from "./components/BookingSummary";
import "./App.css";

function App() {
  const [booking, setBooking] = useState(null);

  return (
    <div className="app">
      <Header />
      {!booking ? (
        <BookingForm onBook={(data) => setBooking(data)} />
      ) : (
        <BookingSummary booking={booking} onReset={() => setBooking(null)} />
      )}
    </div>
  );
}

export default App;
