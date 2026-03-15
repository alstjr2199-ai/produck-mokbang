document.addEventListener('DOMContentLoaded', () => {
  const showHamsterBtn = document.getElementById('show-hamster');
  const imageContainer = document.getElementById('image-container');

  const HAMSTER_API_URL = 'https://api.api-ninjas.com/v1/randomimage?category=hamster'; 
  // Note: API Ninjas might require a key, so I'll use a more direct placeholder or Unsplash for reliability.
  const UNSPLASH_HAMSTER_URL = 'https://source.unsplash.com/featured/?hamster';
  
  // Update: source.unsplash.com is being deprecated, using images.unsplash.com pattern or a static high-quality one if needed.
  // For simplicity and immediate visual feedback, I'll use a direct high-quality hamster image search link that redirects.
  const RANDOM_HAMSTER_URL = 'https://loremflickr.com/600/400/hamster';

  showHamsterBtn.addEventListener('click', async () => {
    // Show container and loading state
    imageContainer.classList.add('visible');
    
    // 1/5 probability of failure
    if (Math.random() < 0.2) {
      imageContainer.innerHTML = '<p class="error-text">햄스터 생성 실패! 🐹🚫</p>';
      return;
    }

    imageContainer.innerHTML = '<p>햄스터 소환 중...</p>';

    try {
      const img = new Image();
      // Add a timestamp to prevent caching if multiple clicks occur
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
    } catch (error) {
      console.error('Error loading hamster image:', error);
      imageContainer.innerHTML = '<p>오류가 발생했습니다.</p>';
    }
  });
});
