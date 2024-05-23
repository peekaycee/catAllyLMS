// Form details and constants...
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const courseInput = document.querySelector('#course');
const feedbackInput = document.querySelector('#feedback');
const contactForm = document.querySelector('#contactForm');

// Drop down button
const dropdown = document.querySelector('.dropdown');
const menuIcon = document.querySelector('#menu__icon');
const menuNav = document.querySelector('#menu__nav');

// Dropdown Control functions...
const showDropdown = () => {
  dropdown.classList.add('show');
};

const hideDropdown = () => {
  dropdown.classList.remove('show');
};

const toggleMenuNavs = () => {
  menuNav.classList.toggle('show');
};

menuIcon.addEventListener('click', toggleMenuNavs);

menuNav.addEventListener('click', (event) => {
  if (!event.target.matches('.menu__nav__link')) {
    toggleMenuNavs(); 
  }
});

// Initialize EmailJS with your user ID...
emailjs.init('ZeMrPSUtCIPgvEGxP');

// Function to send email
const sendEmail = (formData) => {
  emailjs.send('service_djemavu', 'template_unzipmt', formData).then(
    function (response) {
      console.log('Email sent successfully!', response);
      alert('Thank you for your feedback! We will get back to you soon.');
    },
    function (error) {
      console.error('Error sending email:', error);
      alert('Oops! Something went wrong. Please try again later.');
    }
  );
}

// Event listener for form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    course: courseInput.value,
    feedback: feedbackInput.value,
  };

  // Set recipient email address
  formData.to_email = 'ekaymarketplace@gmail.com'; 

  // Send email
  sendEmail(formData);
});
