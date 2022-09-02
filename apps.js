'use strict';
console.log('isrunning');

let productContainer = document.querySelector('.productContainer');
let resultButton = document.getElementById('resultButton');
let product1 = document.getElementById('.pick-product:first-child');
let product2 = document.getElementById('.pick-product:nth-child(2)');
let product3 = document.getElementById('.pick-product:nth-child(3)');
let allProductsArray = [];

let selections = 0;
let maxSelectionsAllowed = 25;
let uniqueImageCount = 19;
let indexArray = [];

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.selections = 0;
  Product.allProductsArray.push(this);
}

Product.allProductsArray = [];


// console.log(Product.allProductsArray);

function getRandomNumber() {
  return Math.floor(Math.random() * Product.allProductsArray.length);
}

function renderProducts() {

  while (indexArray.length < uniqueImageCount) {
    let randomNumber = getRandomNumber();
    if (!indexArray.includes(randomNumber)) {
      indexArray.push(randomNumber);
    } else { break; }
  }

  console.log(indexArray);
  console.log(renderProducts());

  let image1 = indexArray[0];
  let image2 = indexArray[1];
  let image3 = indexArray[2];
  product1.alt = Product.allProductsArray[image1].name;
  product2.alt = Product.allProductsArray[image2].name;
  product3.alt = Product.allProductsArray[image3].name;
  product1.src = Product.allProductsArray[image1].src;
  product2.src = Product.allProductsArray[image2].src;
  product3.src = Product.allProductsArray[image3].src;
  Product.allProductsArray[image1].views++;
  Product.allProductsArray[image2].views++;
  Product.allProductsArray[image3].views++;
  productContainer.appendChild(product1);
  productContainer.appendChild(product2);
  productContainer.appendChild(product3);
}
console.log(renderProducts());


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

renderProducts();


