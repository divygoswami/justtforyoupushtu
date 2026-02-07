const noBtn = document.getElementById(“no”);
const yesBtn = document.getElementById(“yes”);

noBtn.addEventListener(“mouseover”, () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener(“click”, () => {
  document.body.innerHTML = `
    <div style=“
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:#ffe6eb;
      font-family:Arial;
      text-align:center;
    “>
      <h1>Hehehe 😍</h1>
      <p style=“font-size:20px;”>Mujhe pata tha tum maan jaogi 💖</p>
    </div>
  `;
});
