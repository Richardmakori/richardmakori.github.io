// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dark mode toggle (optional)
  const darkModeToggle = document.createElement('button');
  darkModeToggle.textContent = '🌙 Dark Mode';
  darkModeToggle.style.position = 'fixed';
  darkModeToggle.style.bottom = '20px';
  darkModeToggle.style.right = '20px';
  document.body.appendChild(darkModeToggle);
  
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
  
  // Add dark theme CSS dynamically (optional)
  const style = document.createElement('style');
  style.textContent = `
    .dark-theme {
      background: #121212;
      color: #f4f4f4;
    }
    .dark-theme .project-card {
      background: #1e1e1e;
      border-color: #333;
    }
  `;
  document.head.appendChild(style);