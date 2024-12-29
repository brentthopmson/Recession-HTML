// Show loading screen
function showLoadingScreen() {
    document.getElementById("loading-screen").style.display = "flex";  // Show loading screen
  }
  
  // Hide loading screen once the page is loaded
  function hideLoadingScreen() {
    document.getElementById("loading-screen").style.display = "none";
  }
  
  // Attach event listeners to all links to show loading screen before navigating
  function setupNavigation() {
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();  // Prevent the default link behavior
        showLoadingScreen(); // Show the loading screen
        const url = this.getAttribute('href'); // Get the link's destination
        window.location.href = url; // Navigate to the new page
      });
    });
  }
  
  // Ensure loading screen is hidden once page content is fully loaded
  window.addEventListener('load', function () {
    hideLoadingScreen();
  });
  
  // Initialize loading screen functionality
  function initializeLoadingScreen() {
    setupNavigation(); // Setup navigation event listeners
    hideLoadingScreen(); // Initially hide the loading screen in case the page is already loaded
  }
  
  // Call the initialization function when the script loads
  initializeLoadingScreen();
  


  
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('overlay');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    overlay.style.display = mobileMenu.classList.contains('open') ? 'block' : 'none';
  });

  overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    overlay.style.display = 'none';
  });