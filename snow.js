// Настроим анимацию снега
document.addEventListener("DOMContentLoaded", () => {
  const snowflakesCount = 100;
  const snowflakes = [];

  for (let i = 0; i < snowflakesCount; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      document.body.appendChild(snowflake);
      snowflakes.push(snowflake);
  }

  function updateSnowflakes() {
      snowflakes.forEach(snowflake => {
          let x = Math.random() * window.innerWidth;
          let size = Math.random() * 10 + 5;
          let speed = Math.random() * 2 + 1;
          let delay = Math.random() * 5;

          snowflake.style.left = `${x}px`;
          snowflake.style.width = `${size}px`;
          snowflake.style.height = `${size}px`;
          snowflake.style.animationDuration = `${speed}s`;
          snowflake.style.animationDelay = `${delay}s`;
      });
  }

  updateSnowflakes();
  setInterval(updateSnowflakes, 1000 / 60);
});
