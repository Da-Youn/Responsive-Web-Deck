const listItems = document.querySelectorAll('.chart-list li');

listItems.forEach((item, index) => {
  const listNumElement = item.querySelector('.list-num');
  listNumElement.textContent = (index + 1).toString() + '';
});

document.addEventListener('DOMContentLoaded', function () {
  const cardBoxes = document.querySelectorAll('.card-box');
  const imageNames = [
    'post-image1',
    'post-image2',
    'post-image3',
    'post-image4',
    'post-image5',
    'post-image6',
  ];

  cardBoxes.forEach((cardBox, index) => {
    cardBox.style.backgroundImage = `url('./img/${imageNames[index]}.png')`;
  });
});
