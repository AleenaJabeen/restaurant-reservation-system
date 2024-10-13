import React, { useState } from "react";
import { getDatabase } from "firebase/database";
import { app } from "../../firebase";
import Reservation from "./reservation";
import img from "../../images/reserve-table.avif";
import styles from "../../styles/Reservations/Reservation.module.css"; 

const db = getDatabase(app);

const Reserve = () => {
  
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservation = new Reservation(
      reservationData.name,
      reservationData.email,
      reservationData.date,
      reservationData.time,
      reservationData.guests
    );

    if (reservation.validate()) {
      try {
        await reservation.saveToFirebase(db);
        alert("Reservation saved successfully!");
      } catch (error) {
        alert("Error saving reservation:", error.message);
      }
    } else {
      alert(
        "Invalid reservation data or time is too early. Restaurant opens at 9:30 AM."
      );
    }
  };

  return (
    <section id="reservations" className={styles.reserveSection}>
      <h2>RESERVE</h2>
      <div className={styles.reservationForm}>
        <div className={styles.formInputs}>
          <form onSubmit={handleSubmit}>
            <h2>Book a Table</h2>
            <div>
              <input
                type="text"
                name="name"
                value={reservationData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={reservationData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="date"
                name="date"
                value={reservationData.date}
                onChange={handleChange}
                placeholder="Date"
                required
              />
            </div>
            <div>
              <input
                type="time"
                name="time"
                value={reservationData.time}
                onChange={handleChange}
                placeholder="Time"
                required
              />
            </div>
            <div>
              <input
                type="number"
                name="guests"
                value={reservationData.guests}
                placeholder="1 person"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.reserveBtn}>
              <button type="submit">Book Now</button>
            </div>
          </form>
        </div>
        <div className={styles.reserveImg}>
          <img src={img} alt="sideImg" />
        </div>
      </div>
    </section>
  );
};

export default Reserve;
