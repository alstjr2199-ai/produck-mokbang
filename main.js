document.addEventListener('DOMContentLoaded', () => {
  const showHamsterBtn = document.getElementById('show-hamster');
  const imageContainer = document.getElementById('image-container');
  const themeToggle = document.getElementById('theme-toggle');
  
  // Theme Handling
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });

  // Hamster Summoning
  const RANDOM_HAMSTER_URL = 'https://loremflickr.com/600/400/hamster';

  showHamsterBtn.addEventListener('click', () => {
    imageContainer.classList.add('visible');
    
    // 1/5 probability of failure
    if (Math.random() < 0.2) {
      imageContainer.innerHTML = '<p class="error-text">햄스터 생성 실패! 🐹🚫</p>';
      return;
    }

    imageContainer.innerHTML = '<p>햄스터 소환 중...</p>';

    const img = new Image();
    const timestamp = new Date().getTime();
    img.src = `${RANDOM_HAMSTER_URL}?t=${timestamp}`;
    img.alt = 'Cute Hamster';
    
    img.onload = () => {
      imageContainer.innerHTML = '';
      imageContainer.appendChild(img);
    };

    img.onerror = () => {
      imageContainer.innerHTML = '<p>햄스터 소환 실패... 다시 시도해주세요!</p>';
    };
  });
});
