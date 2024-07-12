import 'bootstrap'; // bootstrap js
import $ from 'jquery';

import './css/styles.css'; // bootstrap css and custom css

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
