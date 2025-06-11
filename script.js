function intenseSpinningDomBomb() {
  const fragment = document.createDocumentFragment();

  // Create style element for animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin3d {
      from {
        transform: rotateX(0deg) rotateY(0deg);
      }
      to {
        transform: rotateX(360deg) rotateY(360deg);
      }
    }
    .spin-circle {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: linear-gradient(45deg, #f06, #4a90e2);
      margin: 0.5px;
      display: inline-block;
      animation: spin3d 0.5s linear infinite;
      will-change: transform;
      transform-style: preserve-3d;
    }
  `;
  document.head.appendChild(style);

  for(let i = 0; i < 100000; i++) {
    const circle = document.createElement('div');
    circle.className = 'spin-circle';
    fragment.appendChild(circle);
  }

  document.body.appendChild(fragment);
}

const megaBombBtn = document.createElement('button');
megaBombBtn.textContent = '🔥 100k Spinning 3D Circles';
megaBombBtn.style.position = 'fixed';
megaBombBtn.style.bottom = '90px';
megaBombBtn.style.right = '10px';
megaBombBtn.style.zIndex = 1000;
megaBombBtn.style.padding = '12px';
megaBombBtn.style.backgroundColor = '#d22';
megaBombBtn.style.color = '#fff';
megaBombBtn.style.border = 'none';
megaBombBtn.style.borderRadius = '6px';
megaBombBtn.style.cursor = 'pointer';

megaBombBtn.addEventListener('click', intenseSpinningDomBomb);
document.body.appendChild(megaBombBtn);

function popup() {
  alert("No pls......!")
}

let var34 = document.getElementById("34")
var34.addEventListener("click", popup)