'use strict';

let productContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let product1 = document.querySelector('section img:first-child');
let product2 = document.querySelector('section img:nth-child(2)');
let product3 = document.querySelector('section img:nth-childa(3)');

let selections = 0;
let maxSelectionsAllowed = 25;
let uniqueImageCount = 19;
let indexArray = [];

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.seclections = 0;
  Product.allProductsArray.push(this);
}

Product.allProductsArray = [];

function getRandomNumber() {
  return Math.floor(Math.random() * allProductsArray.length);
}

function showProducts() {
  while (indexArray.length < uniqueImageCount) {
    let randomNumber = getRandomNumber();
    if (!indexArray.includes(randomNumber)) {
      indexArray.push(randomNumber);
    }
  }
  console.log(indexArray);

  let image1 = indexArray.shift();
  let image2 = indexArray.shift();
  let image3 = indexArray.shift();
  product1.src = Product.allProductsArray[image1].src;
  product2.src = Product.allProductsArray[image2].src;
  product3.src = Product.allProductsArray[image3].src;
  product1.alt = Product.allProductsArray[image1].name;
  product2.alt = Product.allProductsArray[image2].name;
  product3.alt = Product.allProductsArray[image3].name;
}

function handleProductClick(event) {
  if (event.target === productContainer) {
    alert('Please click on an image.');
  }
  selections++;
  let clickProduct = event.target.alt;
  for (let i = 0; i < Product.allProductsArray.length; i++) {
    if (clickProduct === Product.allProductsArray[i].name) {
      Product.allProductsArray[i].selections++;
      break;
    }
  }

  if (selections === maxSelectionsAllowed) {
    productContainer.removeEventListener('click', handleProductClick);
    productContainer.className = 'no-voting';
    renderChart();
  } else {
    showProducts();
  }
}

function renderChart() {
  let productNames = [];
  let productLikes = [];
  let productViews = [];
  for (let i = 0; i < Product.allProductsArray.length; i++) {
    productNames.push(Product.allProductsArray[i].name);
    productLikes.push(Product.allProductsArry[i].selections);
    productViews.push(Product.allProductsArray[i].views);
  }
  const data = {
    labels: productNames,
    datasets: [{
      label: 'Likes',
      data: productLikes,
      backgroundColor: [

      ],
      borderColor: [

      ],
      borderWidth: 1
    },
    {
      label: 'Views',
      data: productViews,
      backgroundColor: [

      ],
      borderColor: [

      ],
      borderWidth: 1
    }]
  };
  let canvasChart = document.getElementById('myChart');
  const myChart = new CharacterData(canvasChart, config);
}

new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');
new Product('name', 'location');

renderProduct();

productContainer.addEventListener('click', handleProductClick);

