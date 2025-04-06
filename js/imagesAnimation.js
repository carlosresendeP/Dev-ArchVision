const background = document.querySelector('.hero-bg');

const imagens = [
    './assets/thumbs-projects/Modern-house-sustainability.jpg',
    './assets/thumbs-projects/modern-restaurant.jpg',
    './assets/Comercial-project.jpg',
    './assets/Residential-project.jpg',
];

let currentIndex = 0;

const slide = () => {
    //vai mudar a imagem de fundo
    background.style.backgroundImage = `url(${imagens[currentIndex]})`;
    currentIndex = (currentIndex + 1) % imagens.length; 

    // Define a posição de fundo para o elemento
    background.style.backgroundSize = 'cover';

    //desfine a transição da imagem de fundo
    background.style.transition = 'background-image 1s ease-in-out'; 


    setTimeout(slide, 5000); // Change image every 5 seconds

};

slide();
