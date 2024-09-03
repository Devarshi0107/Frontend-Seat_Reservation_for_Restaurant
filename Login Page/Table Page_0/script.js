function signIn() {
    alert("Sign In button clicked!");
    // Add your sign-in logic here
}

  document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // You can add your booking logic here
      // For example, you can retrieve values like this:
      const partySize = document.getElementById("partySize").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      // You can then send these values to your server or perform any other actions.
      console.log("Party Size:", partySize);
      console.log("Date:", date);
      console.log("Time:", time);
    });
  });

  let currentSlide = 0;

  function showSlide(index) {
    const slides = document.querySelector('.restaurant-slider');
    const totalSlides = document.querySelectorAll('.restaurant').length;

    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }

    const translateValue = -currentSlide * 100;
    slides.style.transform = `translateX(${translateValue}%)`;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Add this to your existing JavaScript code

const imageBox = document.querySelector('.image-box');
const windowHeight = window.innerHeight;

document.addEventListener('scroll', function () {
  const boxTop = imageBox.getBoundingClientRect().top;
  if (boxTop < windowHeight - 50) {
    imageBox.style.maxHeight = '1000px'; // Adjust as needed
  } else {
    imageBox.style.maxHeight = '200px'; // Adjust as needed
  }
});
