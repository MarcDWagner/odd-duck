'use strict';

let selections = 0;
let maxSelections = 25;
// let uniqueImageCount = 19;
// let indexArray = [];

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.selections = 0;
  catalog.push(this);
}

let catalog = [];
let lastShown = [];

// prototypes

Product.prototype.includeChosen = function (amount = 1) {
  this.selectedCount += amount;
};

Product.prototype.includeShown = function () {
  this.shownCount++;
};

new Product('bag', 'assets/bag.jpg');
new Product('banana', 'assets/banana.jpg');
new Product('bathroom', 'assets/bathroom.jpg');
new Product('boots', 'assets/boots.jpg');
new Product('breakfast', 'assets/breakfast.jpg');
new Product('bubblegum', 'assets/bubblegum.jpg');
new Product('chair', 'assets/chair.jpg');
new Product('cthulu', 'assets/cthulhu.jpg');
new Product('dog-duck', 'assets/dog-duck.jpg');
new Product('dragon', 'assets/dragon.jpg');
new Product('pen', 'assets/pen.jpg');
new Product('pet-sweep', 'assets/pet-sweep.jpg');
new Product('scissors', 'assets/scissors.jpg');
new Product('shark', 'assets/shark.jpg');
new Product('sweep', 'assets/sweep.png');
new Product('tauntaun', 'assets/tauntaun.jpg');
new Product('unicorn', 'assets/unicorn.jpg');
new Product('water-can', 'assets/water-can.jpg');
new Product('wine-glass', 'assets/wine-glass.jpg');

// Set up local storage

function getStorage() {
  let storedCatalog = localStorage.getItem('catalog');
  if (storedCatalog) {
    catalog = JSON.parse(storedCatalog);
  }
}

function updateStorage() {
  let stringForStorage = JSON.stringify(catalog);
  localStorage.setItem('catalog', stringForStorage);
}

// Disable and Enable results button

function disableBtn(){
  document.getElementById('results').disabled = true;
}
disableBtn();

function enableBtn(){
  document.getElementById('results').disabled = false;
}
// Make it random

function randomItem() {
  let randomItem = Math.floor(Math.random() * catalog.length);
  return randomItem;
}

function randomIndex(amount = 3) {
  let array = [];

  while (array.length < amount) {
    let randomProd = catalog[randomItem()];
    if (!array.includes(randomProd) && !lastShown.includes(randomProd)) {
      array.push(randomProd);
    }
  }
  lastShown = array;
  return array;
}


// Click it

function handleClick(event) {
  if (event.target === imgContainer) {
    return;
  }
  selections++;
  let selectedProd = event.target.alt;
  for (let i = 0; i < catalog.length; i++) {
    if (selectedProd === catalog[i].name) {
      catalog[i].selectedCount++;
      renderImg(randomIndex());
      break;
    }
  }
}

//Render product selection images

let imgContainer = document.getElementById('pick-product');
imgContainer.addEventListener('click', handleClick);

function renderImg(array) {
  updateStorage();
  if (selections < maxSelections) {

    while (imgContainer.firstChild) {
      imgContainer.removeChild(imgContainer.firstChild);
    }
    for (let i = 0; i < array.length; i++) {
      array[i].shownCount++;
      let productImg = document.createElement('img');
      productImg.src = array[i].src;
      productImg.alt = array[i].name;
      imgContainer.appendChild(productImg);
    }
  } else {
    imgContainer.removeEventListener('click', handleClick);
    enableBtn();
    // renderChart();
  }
}

// Results button click

let resultButton = document.getElementById('results');
resultButton.addEventListener('click', renderChart);

// Chart

function renderChart() {
  let productNames = [];
  let productClicks = [];
  let productViews = [];
  for (let i = 0; i < catalog.length; i++) {
    productNames.push(catalog[i].name);
    productClicks.push(catalog[i].selectedCount);
    productViews.push(catalog[i].shownCount);
  }

  // Create data
  const data = {
    labels: productNames,
    datasets: [{
      label: 'Clicks',
      data: productClicks,
      backgroundColor: ['rgb(255, 165, 0'],
      borderColor: ['rgb(255, 140, 0'],
      borderWidth: 1,
    },
    {
      label: 'Views',
      data: productViews,
      backgroundColor: ['rgb(138, 43, 226)'],
      borderColor: ['rgb(255, 0, 255'],
      borderWidth: 1
    }]
  };

  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

getStorage();
renderImg(randomIndex());


