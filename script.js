

function performSearch() {
  let query = document.getElementById("searchInput").value.trim();
  if (query !== "") {
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
  } else {
    alert("Please enter a search term.");
  }
}

document.getElementById("searchInput").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

const testimonials = [
  {
    text: "Erin was a wonderful teacher. She was personable, kind, organized, and great with facilitating group discussion.",
    author: "Katy L."
  },
  {
    text: "John is an outstanding mentor! His guidance and support helped me grow both professionally and personally.",
    author: "Emma W."
  },
  {
    text: "Sophia's ability to engage students and make learning fun is truly remarkable. She is an inspiration!",
    author: "Michael T."
  },
  {
    text: "David's leadership and vision have transformed our team. His insights are invaluable!",
    author: "Sarah J."
  }
];

let currentIndex = 0;

const testimonialText = document.querySelector('.testimonial-text');
const authorText = document.querySelector('.author');

function updateTestimonial(index) {
  testimonialText.innerHTML = `<em>${testimonials[index].text}</em>`;
  authorText.textContent = testimonials[index].author;
}

document.querySelector('.prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});

document.querySelector('.next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});

// Initialize with the first testimonial
updateTestimonial(currentIndex);


document.addEventListener("DOMContentLoaded", function () {
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {
menu.classList.toggle("open");
if (menu.classList.contains("open")) {
  menuToggle.style.backgroundColor ="rgba(220, 54, 54, 0.5F)";
} else {
  menuToggle.style.backgroundColor = "transparent";
}
});


});
function Subscribe(){
alert("Thank you for subscribing!");
document.getElementById("subscribers-email").value='';
}
