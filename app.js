const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close1 = document.getElementById('close');
const prodPrice = document.querySelectorAll('.p_price');
const totalsum = document.querySelector('.sumP');
const price2 = document.querySelectorAll('.Price');
const sumPrice = document.querySelector('.tPrice');

console.log(prodPrice);

let arryPrice = [];
prodPrice.forEach((price) => {
    let price1 = price.textContent;
    arryPrice.push(price1);
})

let allPrice = arryPrice.map(Number);
//calculate total price
let sum = 0;
for (let i = 0; i < allPrice.length; i++) {
  sum += allPrice[i];
}
console.log(sum);
totalsum.textContent = sum;


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close1) {
    close1.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

let arryPrice2 = [];
price2.forEach((price) => {
    let pprice = price.textContent;
    console.log(pprice);
    arryPrice2.push(pprice);
});

let allPrice2 = arryPrice2.map(Number);
//calculate total price
let sum2 = 0;
for (let i = 0; i < allPrice2.length; i++) {
    console.log(allPrice2[i]);
  sum2 += allPrice2[i];
}
console.log(sum2);
sumPrice.textContent = sum2;