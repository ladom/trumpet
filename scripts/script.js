'use strict';

var about = document.querySelector('.about');
var news1 = document.querySelector('.news--sm');
var news2 = document.querySelector('.news--big');
var rules = document.querySelector('.rules');
var winners1 = document.querySelector('.winners--sm');
var winners2 = document.querySelector('.winners--big');
var gallery = document.querySelector('.gallery');
var contact = document.querySelector('.contact');
var modal = document.querySelector('.content__modal');
var close = document.querySelector('.content__close');
var menu = document.querySelector('.content__menu');

function displayAbout() {
    document.querySelector('.content__title').textContent = 'O Konkursie';
    document.querySelector('.content__container').innerHTML = 'Międzyszkolne Konfrontacje Trębaczy<br>Powstały w roku 2017 z inicjatywy Pawła Tulińskiego - nauczyciela w klasie trąbki Szkoły Muzycznej w Jeleniej Górze. Dotychczas odbyły się trzy edycje:<br><ul><li>Pierwsza</li><li>Druga</li><li>Trzecia</li></ul><br>Nam eget tortor. Vivamus hendrerit sollicitudin. Nulla facilisi. Phasellus lacinia lacus. Aenean feugiat in, dapibus tellus. Fusce ullamcorper. Mauris euismod. Donec nec massa. Curabitur imperdiet, urna semper erat, ut diam vestibulum varius. Ut facilisis. Nulla ipsum primis in faucibus non, tristique senectus et magnis dis parturient montes, nascetur ridiculus mus. Praesent magna ante, sagittis lorem. Phasellus posuere cubilia Curae, Nulla tincidunt mi, nec ipsum. Fusce eu sodales nibh justo, posuere sit amet nisl. Aenean gravida massa vel molestie vitae, faucibus ligula. Praesent est sem, posuere cubilia Curae, Mauris mattis faucibus. Ut sit amet, mattis a, massa. Maecenas mi libero, pharetra.';
    modal.style.display = 'flex';
}

about.addEventListener('click', displayAbout);

function displayNews() {
    document.querySelector('.content__title').textContent = 'Aktualności';
    document.querySelector('.content__container').innerHTML = 'Najbliższy konkurs odbędzie się w najbliższej pszyszłości.<br>Za 100 lat!!!';
    modal.style.display = 'flex';
}

news1.addEventListener('click', displayNews);
news2.addEventListener('click', displayNews);

function displayWinners() {
    document.querySelector('.content__title').textContent = 'Laureaci';
    document.querySelector('.content__container').innerHTML = 'Laureaci edycji 2017<br><ul><li>Jan Nowak</li><li>Jan Kowalski</li><li>Donald Trump</li></ul>';
    modal.style.display = 'flex';
}

winners1.addEventListener('click', displayWinners);
winners2.addEventListener('click', displayWinners);

function displayRules() {
    document.querySelector('.content__title').textContent = 'Regulamin';
    document.querySelector('.content__container').innerHTML = 'Najważniejsza zasada:<br>Kompletny brak zasad!!!';
    modal.style.display = 'flex';
}

rules.addEventListener('click', displayRules);

function displayContact() {
    document.querySelector('.content__title').textContent = 'Kontakt';
    document.querySelector('.content__container').innerHTML = '<a href="tel:+48123455557"><i class="fa fa-phone"></i> Zadzwoń</a><br><a href="mailto:konfrontacje@trebacze.pl"><i class="fa fa-envelope"> Napisz do nas</a>';
    modal.style.display = 'flex';
}

contact.addEventListener('click', displayContact);

function displayGallery() {
    document.querySelector('.content__title').textContent = 'Galeria zdjęć';
    document.querySelector('.content__container').innerHTML = 'Galerię dopiszę jak będę mieć wenę<br><img src="pictures/gallery/pic01.jpg" alt="pic01.jpg">';
    modal.style.display = 'flex';
}

gallery.addEventListener('click', displayGallery);

function closeModal() {
    modal.style.display = 'none';
}

close.addEventListener('click', closeModal);
menu.addEventListener('click', closeModal);