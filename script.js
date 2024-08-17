document.addEventListener("DOMContentLoaded", () => {
  const heartContainer = document.querySelector(".heart-container");
  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");
  let heartInterval;

  function createHearts() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 2}s`;
      heartContainer.appendChild(heart);

      // Xóa trái tim sau khi hoàn thành animation
      setTimeout(() => {
          heart.remove();
      }, 3000);
  }

  function startHeartEffect() {
      heartInterval = setInterval(createHearts, 300); // Tạo trái tim mỗi 300ms
  }

  function stopHeartEffect() {
      clearInterval(heartInterval);
      heartContainer.innerHTML = ''; // Xóa tất cả trái tim
  }

  yesBtn.addEventListener("click", () => {
      stopHeartEffect();
      document.querySelector(".question").innerHTML = "I love you too!😘";
      document.querySelector(".question").innerHTML = "Let’s make plans for our future together!😘";
      document.querySelector(".gif").src = "abc.jpg";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
  });

  noBtn.addEventListener("mouseover", moveNoBtn);
  noBtn.addEventListener("click", moveNoBtn);

  function moveNoBtn() {
      const groupRect = noBtn.parentElement.getBoundingClientRect();
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = groupRect.width - noBtnRect.width;
      const maxY = groupRect.height - noBtnRect.height;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      noBtn.style.position = 'absolute';
      noBtn.style.left = `${randomX}px`;
      noBtn.style.top = `${randomY}px`;
  }

  startHeartEffect(); // Bắt đầu hiệu ứng trái tim ngay khi trang web được mở
});
