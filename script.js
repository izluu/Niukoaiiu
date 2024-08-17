document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const gifImg = document.querySelector(".gif");

    yesBtn.addEventListener("click", () => {
        document.querySelector(".question").innerHTML = "Let’s make plans for our future together!😘";
        gifImg.src = "abc.jpg";

        // Xóa hiệu ứng của hình ảnh
        gifImg.style.animation = 'none'; // Xóa tất cả các hiệu ứng animation
        gifImg.style.transform = 'none'; // Đặt lại bất kỳ hiệu ứng transform nào

        yesBtn.style.display = "none";
        noBtn.style.display = "none";

        // Ngừng hiệu ứng di chuyển của nút "No"
        noBtn.removeEventListener("mouseover", moveNoBtn);
        noBtn.removeEventListener("click", handleNoBtnClick);

        let audio = new Audio('click-sound.mp3');
        audio.play();
    });

    noBtn.addEventListener("mouseover", moveNoBtn);
    noBtn.addEventListener("click", handleNoBtnClick);

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

    function handleNoBtnClick() {
        let audio = new Audio('click-sound.mp3');
        audio.play();
        moveNoBtn();
    }
});
