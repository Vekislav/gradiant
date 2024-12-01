function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  return `#${randomColor}`;
}

function blendColors(color1, color2, color3) {
  const c1 = parseInt(color1.slice(1), 16);
  const c2 = parseInt(color2.slice(1), 16);
  const c3 = parseInt(color3.slice(1), 16);

  const r = ((c1 >> 16) + (c2 >> 16) + (c3 >> 16)) / 3;
  const g = (((c1 >> 8) & 0xff) + ((c2 >> 8) & 0xff) + (c3 >> 8) & 0xff) / 3;
  const b = ((c1 & 0xff) + (c2 & 0xff) + (c3 & 0xff)) / 3;

  return `#${((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1).toUpperCase()}`;
}

function animateLever() {
  const lever = document.getElementById('lever');
  lever.classList.add('active');
  setTimeout(() => {
    lever.classList.remove('active');
  }, 300);
}

function spinSlots() {
  animateLever();

  setTimeout(() => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();

    document.getElementById('slot1').style.backgroundColor = color1;
    document.getElementById('slot1').innerText = color1;

    document.getElementById('slot2').style.backgroundColor = color2;
    document.getElementById('slot2').innerText = color2;

    document.getElementById('slot3').style.backgroundColor = color3;
    document.getElementById('slot3').innerText = color3;

    const mergedColor = blendColors(color1, color2, color3);
    document.getElementById('mergedColor').style.backgroundColor = mergedColor;
    document.getElementById('mergedColor').innerText = mergedColor;
  }, 300);
}

document.getElementById('lever').addEventListener('click', spinSlots);
