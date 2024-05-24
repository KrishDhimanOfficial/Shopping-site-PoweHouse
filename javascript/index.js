const product_action_btn = document.querySelectorAll('.action-btn button i');

product_action_btn.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.classList.add('fa-beat');
    });
    btn.addEventListener('mouseout', () => {
        btn.classList.remove('fa-beat');
    });
});

// banner

var slide = document.querySelectorAll('#banner .carousel-item');
var count = 0;

slide.forEach((slide,index)=>{
    slide.style.position = 'absolute';
    slide.style.left = `${index * 100}%`;
});
const carousel = () => {
    slide.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`;

    });
}
setInterval(() => {
    carousel();
    count == slide.length - 1 ? count = 0 : ++count;

}, 3000);

// product - box

var target = document.querySelector('#product-box');
var close_btn = document.querySelector('#product-box .btn');

let display = 0;
setInterval(() => {
    if (display == 0) {
        target.style.visibility = 'hidden';
        display = 1;
    }
    else if (display == 1) {
        target.style.visibility = 'visible';
        display = 0;
    }
}, 4000);

close_btn.addEventListener('click', () => {
    target.style.visibility = 'hidden';
});

// navbar
var navbar = document.querySelector('#nav');

let prevscrollpos = window.scrollY;
window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;

    if (prevscrollpos > scrollValue) {
        navbar.classList.add('sticky');
    }
    else {
        navbar.classList.remove('sticky');
    }
    prevscrollpos = scrollValue;
});

// product page ̰ ̰ ̰ ̰
const product_page = document.querySelectorAll('.product-grid');

document.querySelectorAll('.cart-btn').forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.stopPropagation();
        location.href = 'addtocart.html';
    })
});

product_page.forEach((product) => {
    product.addEventListener('click', () => {
        window.open('product.html','_blank');
    });
});

// product - slide
var pro_carousel = document.querySelector(".product-slide");
var carousel_inner = document.querySelectorAll(".product-slide .col");

