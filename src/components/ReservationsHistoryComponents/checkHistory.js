import React, { useState } from "react";
import { getDatabase } from "firebase/database";
import { app } from "../../firebase.js";
import ReservationHistory from "./ReservationHistory.js";
import styles from "../../styles/Reservations/CheckHistory.module.css";

const db = getDatabase(app);

const CheckHistory = () => {
  const [email, setEmail] = useState("");
  const [reservations, setReservations] = useState([]); // Corrected to 'reservations' for consistency
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFetchReservations = async (e) => {
    e.preventDefault();

    const history = new ReservationHistory(email, db);

    try {
      const data = await history.fetchAllReservations();
      setReservations(Object.values(data || {}));
      setError(null);
    } catch (err) {
      setError(err.message);
      setReservations([]);
    }
  };

  return (
    <section id="checkHistory" className={styles.historySection}>
      <h2>Reservation History</h2>
      <div className={styles.emailCheck}>
        <form onSubmit={handleFetchReservations}>
          <label>Enter your Email to check your reservation history</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
          <div className={styles.chkReserveBtn}>
            <button type="submit">Check Your Reservations</button>
          </div>
        </form>
      </div>

      {/* Display error message if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display reservations if available */}
      {reservations.length > 0 && (
        <div className={styles.chkReserveDetails}>
          <h3>Reservation Details</h3>
          {reservations.map((reservation, index) => (
            <div key={index}>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Guests</th>
                </tr>
                <tr>
                  <td>{reservation.name}</td>
                  <td>{reservation.date}</td>
                  <td>{reservation.time}</td>
                  <td>{reservation.guests}</td>
                </tr>
              </table>
              <hr />
            </div>
          ))}
          <p className={styles.totalReserves}>
            Total Reservations:{reservations.length}
          </p>
        </div>
      )}
    </section>
  );
};

export default CheckHistory;
