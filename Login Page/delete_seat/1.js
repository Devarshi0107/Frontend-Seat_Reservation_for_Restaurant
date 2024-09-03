// Function to fetch reservations from the backend and update seat colors
async function fetchReservations() {
  try {
    // Replace the URL with your actual endpoint for fetching reservations
    const response = await axios.get('/reservations');
    const reservations = response.data;

    reservations.forEach(reservation => {
      const seatNumber = reservation.seat_number; // Adjust according to your data structure
      const seatElement = document.querySelector(`[data-seat-name="Seat ${seatNumber}"]`);
      seatElement.style.backgroundColor = 'red';
      seatElement.classList.add('booked');
    });
  } catch (error) {
    console.error('Error fetching reservations:', error);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Select the book table button
  const bookTableBtn = document.getElementById("bookTableBtn");

  // Add click event listener to the book table button
  bookTableBtn.addEventListener("click", async function() {
    // Check if party size and date fields are filled out properly
    const partySize = document.getElementById("partySize").value;
    const date = document.getElementById("date").value;
    
    // Validate if party size and date are not empty
    if (partySize && date) {
      // If valid, allow the user to book the table
      alert("Table booked!");
      // Optionally reload the page after the message is popped up
      // location.reload();
    } else {
      // If invalid, show an alert message to fill out the required fields
      alert("Please fill out the party size and date fields.");
    }
  });
});
