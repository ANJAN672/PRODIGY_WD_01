window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar").style.backgroundColor = "#f8f8f8";
  } else {
    document.querySelector(".navbar").style.backgroundColor = "#333";
  }
}

// Add click event listeners to the navigation links
document.querySelectorAll('.navbar a').forEach(function(element) {
  element.addEventListener('click', function() {
    // Remove the 'active' class from all navigation links
    document.querySelectorAll('.navbar a').forEach(function(element) {
      element.classList.remove('active');
    });

    // Add the 'active' class to the clicked navigation link
    this.classList.add('active');

    // Change the background color of the page
    document.body.style.backgroundColor = this.href.split('#')[1];
  });
});