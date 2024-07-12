import 'bootstrap'; // bootstrap js
import $ from 'jquery';

import './css/styles.css'; // bootstrap css and custom css

const contactForm = $('#contact-form');

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

$(function () {
  $('.what-we-do-title').addClass('fw-bold text-center');
  toggleWhatWeDo();

  contactForm.on('submit', function (event) {
    event.preventDefault();
    let formValid = validateForm();
    if (formValid) {
      const name = $('input.name').val();
      alert(`Hi ${name}, thank you for contacting us. We'll respond shortly`);
      clearFormInputData();
    }
  });
});

//  function to toggle what we do
function toggleWhatWeDo() {
  $('.service').on('click', function () {
    if ($('.service-details', this).is(':visible')) {
      $('.service-details', this).hide();
      $('.service-card', this).fadeIn('slow');
    } else {
      $('.service-details', this).fadeIn('slow');
      $('.service-card', this).hide();
    }
  });
}

function validateForm() {
  let isFormValid = true;
  const formInputs = contactForm.find('input, textarea');

  formInputs.each(function () {
    if (!$(this).val()) {
      $(this).addClass('is-invalid');
      isFormValid = false;
    }
  });
  return isFormValid;
}

function clearFormInputData() {
  contactForm.find('input,textarea').each(function () {
    $(this).val('');
  });
}

function clearFormErrors() {
  contactForm.find('input,textarea').on('keydown', function () {
    if ($(this).hasClass('is-invalid')) {
      $(this).removeClass('is-invalid');
    }
  });
}

clearFormErrors();
