// navbar vixed
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var header = document.getElementById("header");
    if (window.scrollY >= 90) {
        header.classList.add("fix");
        navbar.classList.add("fixed");
        console.log('ok')
    } else {
        navbar.classList.remove("fixed");
        header.classList.remove("fix");
    }
});

//animasi scroll
document.getElementById("aboutlink").addEventListener("click", function (event) {
    event.preventDefault();
    var targetPosition = document.getElementById("about").offsetTop - 95;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});
document.getElementById("skillink").addEventListener("click", function (event) {
    event.preventDefault();
    var targetPosition = document.getElementById("skill").offsetTop - 83;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});
document.getElementById("projectlink").addEventListener("click", function (event) {
    event.preventDefault();
    var targetPosition = document.getElementById("project").offsetTop - 83;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});
document.getElementById("certifficatelink").addEventListener("click", function (event) {
    event.preventDefault();
    var targetPosition = document.getElementById("certifficate").offsetTop - 83;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});


// Fungsi untuk menghitung jumlah pixel saat scroll
function countPixelsScrolled() {
    var scrolledPixels = window.scrollY || window.pageYOffset;
    console.log("Jumlah pixel yang telah di-scroll:", scrolledPixels);
}

// Mendaftarkan event listener untuk scroll
window.addEventListener("scroll", countPixelsScrolled);

//reponsive navbar
let hamburger = document.querySelector('.hamburger');
let navlinks = document.getElementById('nav-links');
let links = document.querySelectorAll('links');

//display link on click
hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('hide');
    hamburger.classList.toggle('lines-rotate');
});

//show serti
(document.querySelector('.show1')).addEventListener('click', () => {
    (document.getElementById('showserti')).classList.toggle('show');
    (document.getElementById('showserti')).classList.toggle('hideserti');
    (document.querySelector('.hal1')).classList.toggle('hideserti');
});
(document.querySelector('.show2')).addEventListener('click', () => {
    (document.getElementById('showserti')).classList.toggle('show');
    (document.getElementById('showserti')).classList.toggle('hideserti');
    (document.querySelector('.hal2')).classList.toggle('hideserti');
});
(document.querySelector('.show3')).addEventListener('click', () => {
    (document.getElementById('showserti')).classList.toggle('show');
    (document.getElementById('showserti')).classList.toggle('hideserti');
    (document.querySelector('.hal3')).classList.toggle('hideserti');
});
(document.querySelector('.close1')).addEventListener('click', () => {
    (document.getElementById('showserti')).classList.toggle('show');
    (document.getElementById('showserti')).classList.toggle('hideserti');
    (document.querySelector('.hal1')).classList.toggle('hideserti');
});
(document.querySelector('.close2')).addEventListener('click', () => {
    (document.getElementById('showserti')).classList.toggle('show');
    (document.getElementById('showserti')).classList.toggle('hideserti');
    (document.querySelector('.hal2')).classList.toggle('hideserti');
});
(document.querySelector('.close3')).addEventListener('click', () => {
    (document.getElementById('showserti')).classList.toggle('show');
    (document.getElementById('showserti')).classList.toggle('hideserti');
    (document.querySelector('.hal3')).classList.toggle('hideserti');
});
(document.querySelector('.kiri1')).addEventListener('click', () => {
    (document.querySelector('.hal1')).classList.toggle('hideserti');
    (document.querySelector('.hal3')).classList.toggle('hideserti');
});
(document.querySelector('.kanan1')).addEventListener('click', () => {
    (document.querySelector('.hal1')).classList.toggle('hideserti');
    (document.querySelector('.hal2')).classList.toggle('hideserti');
});
(document.querySelector('.kiri2')).addEventListener('click', () => {
    (document.querySelector('.hal2')).classList.toggle('hideserti');
    (document.querySelector('.hal1')).classList.toggle('hideserti');
});
(document.querySelector('.kanan2')).addEventListener('click', () => {
    (document.querySelector('.hal3')).classList.toggle('hideserti');
    (document.querySelector('.hal2')).classList.toggle('hideserti');
});
(document.querySelector('.kiri3')).addEventListener('click', () => {
    (document.querySelector('.hal2')).classList.toggle('hideserti');
    (document.querySelector('.hal3')).classList.toggle('hideserti');
});
(document.querySelector('.kanan3')).addEventListener('click', () => {
    (document.querySelector('.hal3')).classList.toggle('hideserti');
    (document.querySelector('.hal1')).classList.toggle('hideserti');
});

// Slider
var slideIndex = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
var slideIndex4 = 0;
var slideIndex5 = 0;
var slideIndex6 = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("slide");
    var slides2 = document.getElementsByClassName("slide2");
    var slides3 = document.getElementsByClassName("slide3");
    var slides4 = document.getElementsByClassName("slide4");
    var slides5 = document.getElementsByClassName("slide5");
    var slides6 = document.getElementsByClassName("slide6");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    for (var i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {
        slideIndex2 = 1;
    }
    slides2[slideIndex2 - 1].style.display = "block";

    for (var i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    slideIndex3++;
    if (slideIndex3 > slides3.length) {
        slideIndex3 = 1;
    }
    slides3[slideIndex3 - 1].style.display = "block";

    for (var i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }
    slideIndex4++;
    if (slideIndex4 > slides4.length) {
        slideIndex4 = 1;
    }
    slides4[slideIndex4 - 1].style.display = "block";

    for (var i = 0; i < slides5.length; i++) {
        slides5[i].style.display = "none";
    }
    slideIndex5++;
    if (slideIndex5 > slides5.length) {
        slideIndex5 = 1;
    }
    slides5[slideIndex5 - 1].style.display = "block";

    for (var i = 0; i < slides6.length; i++) {
        slides6[i].style.display = "none";
    }
    slideIndex6++;
    if (slideIndex6 > slides6.length) {
        slideIndex6 = 1;
    }
    slides6[slideIndex6 - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Ganti gambar setiap 2 detik
}