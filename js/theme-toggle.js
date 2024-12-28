// Set dark mode as the default theme
document.documentElement.setAttribute('data-bs-theme', 'dark');

// Add a theme toggle button
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Theme';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '1rem';
themeToggle.style.right = '1rem';
themeToggle.style.padding = '0.5rem 1rem';
themeToggle.style.background = '#007bff';
themeToggle.style.color = 'white';
themeToggle.style.border = 'none';
themeToggle.style.borderRadius = '5px';
themeToggle.style.cursor = 'pointer';
themeToggle.style.zIndex = '1000';

themeToggle.onclick = () => {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-bs-theme', newTheme);
};

document.body.appendChild(themeToggle);

