const toggleBtn = document.querySelector('.nav-toggle');
const leftNav = document.querySelector('.left-nav');

/* Make the navigation bar disappear when clicking elsewhere on the page */
document.addEventListener('click', function(event) {
  if (!event.target.closest('.left-nav') && !event.target.closest('.nav-toggle') && leftNav.classList.contains('show-nav')) {
    leftNav.classList.remove('show-nav');
    toggleBtn.style.display = 'block';
  }
});

toggleBtn.addEventListener('click', function() {
  leftNav.classList.toggle('show-nav');
  
  /* Make the toggle button disappear when the navigation bar is out */
  if (leftNav.classList.contains('show-nav')) {
    toggleBtn.style.display = 'none';
  } else {
    toggleBtn.style.display = 'block';
  }
});

