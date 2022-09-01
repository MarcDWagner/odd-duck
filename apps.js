'use strict';
// console.log('isrunning');

let productContainer = document.getElementById('productContainer');
let resultButton = document.getElementById('resultButton');
let product1 = document.querySelector('section img:first-child');
let product2 = document.querySelector('section img:nth-child(2)');
let product3 = document.querySelector('section img:nth-child(3)');
let allProductsArray = [];

let selections = 0;
let maxSelectionsAllowed = 25;
// let uniqueImageCount = 19;
// let indexArray = [];

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.selections = 0;
  Product.allProductsArray.push(this);
}
Product.allProductsArray = [];

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

// console.log(Product.allProductsArray);

function getRandomNumber() {
  return Math.floor(Math.random() * allProductsArray.length);
}

function renderProducts() {
  let image1 = getRandomNumber();
  let image2 = getRandomNumber();
  let image3 = getRandomNumber();

  // while (image1 === image2 || image3) {
  //   image2 = getRandomNumber();
  // while (image2 === image3) {
  //   image3 = getRandomNumber();
  //   while (image1 === image3) {
  //     image3 = getRandomNumber();
  //   }
  // }

  product1.src = Product.allProductsArray[image1].src;
  product2.src = Product.allProductsArray[image2].src;
  product3.src = Product.allProductsArray[image3].src;
  product1.alt = Product.allProductsArray[image1].name;
  product2.alt = Product.allProductsArray[image2].name;
  product3.alt = Product.allProductsArray[image3].name;
  Product.allProductsArray[image1].views++;
  Product.allProductsArray[image2].views++;
  Product.allProductsArray[image3].views++;
  productContainer.appendChild(product1);
  productContainer.appendChild(product2);
  productContainer.appendChild(product3);
}
// }
function handleProductClick(event) {
  // if (event.target === productContainer) {
  //   alert('Please click on an image.');
  // }
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
    resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks-allowed';
    productContainer.className = 'no-voting';
    // renderChart();
  } else {
    renderProducts();
  }
}
function renderResults() {
  let ul = document.queryselector('ul');
  for (let i = 0; i < Product.allProductsArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${Product.allProductsArray[i].name} had ${Product.allProductsArray[i].views} view and was clicked ${Product.allProductsArray[i].clicks} times.`;
    ul.appendChild(li);
  }
}


// function renderChart() {
//   let ctx = document.getElementById('results-chart').getContext('2d');
//   let productNames = [];
//   let productLikes = [];
//   let productViews = [];
//   for (let i = 0; i < Product.allProductsArray.length; i++) {
//     productNames.push(Product.allProductsArray[i].name);
//     productLikes.push(Product.allProductsArray[i].selections);
//     productViews.push(Product.allProductsArray[i].views);
//   }
//   const data = {
//     labels: productNames,
//     datasets: [{
//       label: 'Likes',
//       data: productLikes,
//       backgroundColor: [
//         'rgb(173, 216, 230)'
//       ],
//       borderColor: [
//         'rgb(0, 0, 255)'
//       ],
//       borderWidth: 1
//     },
//     {
//       label: 'Views',
//       data: productViews,
//       backgroundColor: [
//         'rgb(255, 160, 122)'
//       ],
//       borderColor: [
//         'rgb(205, 92, 92)'
//       ],
//       borderWidth: 1
//     }]
//   };

//   const config = {
//     type: 'bar',
//     data: data,
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   };
//   // let canvasChart = document.getElementById('myChart');
//   const myChart = new results - chart(canvasChart, config);
// }


renderProducts();

productContainer.addEventListener('click', handleProductClick);

