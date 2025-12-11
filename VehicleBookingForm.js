import React, { useState } from "react";

function BookingForm({ onBook }) {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicle, setVehicle] = useState("Car");

  const handleSubmit = (e) => {
    e.preventDefault();
    const fare = vehicle === "Car" ? 200 : vehicle === "Bike" ? 100 : 150;
    onBook({ pickup, drop, vehicle, fare });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Pickup Location</label>
      <input
        type="text"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
        required
      />

      <label>Drop Location</label>
      <input
        type="text"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
        required
      />

      <label>Vehicle Type</label>
      <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
        <option>Car</option>
        <option>Bike</option>
        <option>Auto</option>
      </select>

      <button type="submit">Book Ride</button>
    </form>
  );
}

export default BookingForm;

