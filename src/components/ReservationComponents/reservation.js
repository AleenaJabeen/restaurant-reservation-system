import { ref,push,set} from "firebase/database";
// Function to format time to 12-hour format with AM/PM
const formatTime = (timeString) => {
  const date = new Date(`1970-01-01T${timeString}:00`);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12; 
  hours = hours ? hours : 12; 
  const strMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${strMinutes} ${ampm}`; // Return formatted time
};
class Reservation {
    constructor(name, email, date, time, guests) {
      this.name = name;
      this.email = email;
      this.date = date;
      this.time = time;
      this.guests = guests;
    }
  
    // Method to validate reservation data
    validate() {
      return this.name && this.email && this.date && this.time && this.guests > 0 && this.isValidReservationTime();
    }
  
    isValidReservationTime() {
      const openingTime = new Date(`1970-01-01T09:30:00`); // Restaurant opens at 9:30 AM
      const reservationTime = new Date(`1970-01-01T${this.time}:00`); 

      return reservationTime >= openingTime; 
  }
    format() {
      const formattedTime = formatTime(this.time); 
      return `${this.guests} guests at ${formattedTime} on ${this.date}`;
    }
  
    async saveToFirebase(db) {
      const { email, name, date, time, guests } = this;
      const reservationRef = ref(db, `reservations/${email.replace('.', '_')}`);
      const newReservationRef = push(reservationRef);
  
      await set(newReservationRef, {
        name,
        date,
        time,
        guests,
      });
    }
  }
  
  export default Reservation;
  