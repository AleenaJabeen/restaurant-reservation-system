import { ref, get, child } from "firebase/database";

// Function to format time to 12-hour format with AM/PM
const formatTime = (timeString) => {
  const date = new Date(`1970-01-01T${timeString}:00`);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12; // Convert to 12-hour format
  hours = hours ? hours : 12; // The hour '0' should be '12'
  const strMinutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if needed

  return `${hours}:${strMinutes} ${ampm}`; // Return formatted time
};

class ReservationHistory {
  constructor(email, db) {
    this.email = email;
    this.db = db;
  }

  // Method to fetch all reservations for the user from Firebase
  async fetchAllReservations() {
    const emailKey = this.email.replace('.', '_'); 
    const dbRef = ref(this.db);
    
    try {
      const snapshot = await get(child(dbRef, `reservations/${emailKey}`));
      if (snapshot.exists()) {
        const reservations = snapshot.val(); 
        // Format each reservation's time
        const formattedReservations = Object.keys(reservations).map(key => {
          return {
            ...reservations[key],
            time: formatTime(reservations[key].time) // Format time here
          };
        });
        return formattedReservations; // Return formatted reservations
      } else {
        throw new Error('No reservations found.');
      }
    } catch (error) {
      throw new Error('Error fetching reservations: ' + error.message);
    }
  }
}

export default ReservationHistory;
