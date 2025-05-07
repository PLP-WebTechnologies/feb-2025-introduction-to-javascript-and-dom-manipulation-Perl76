function changeText() {
  document.getElementById('main-title').textContent = 'Text Changed with JavaScript!';
}

function changeStyle() {
  document.getElementById('description').style.color = 'tomato';
  document.getElementById('description').style.fontWeight = 'bold';
}

function toggleElement() {
  const container = document.getElementById('box-container');
  const existingBox = document.getElementById('dynamic-box');

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const box = document.createElement('div');
    box.id = 'dynamic-box';
    box.textContent = 'I am a dynamically added box!';
    box.style.border = '2px solid green';
    box.style.padding = '10px';
    box.style.marginTop = '10px';
    container.appendChild(box);
  }
}
