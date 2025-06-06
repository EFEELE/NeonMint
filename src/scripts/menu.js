document.querySelector('.hamburger').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  // Toggle the 'expanded' class to show or hide the menu
  navLinks.classList.toggle('expanded');
  
  // Toggle the 'active' class for the hamburger icon
  hamburger.classList.toggle('active');
});


