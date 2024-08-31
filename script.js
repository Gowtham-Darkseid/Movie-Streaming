document.addEventListener('DOMContentLoaded', function () {
    const featuredMovie = document.querySelector('.featured-movie');
    const kravenVideo = document.getElementById('kraven-video');

    featuredMovie.addEventListener('mouseover', () => {
        kravenVideo.style.display = 'block';
        kravenVideo.muted = false; // Ensure the video is not muted
        kravenVideo.play().catch(error => {
            console.error("Autoplay failed:", error);
            // You can prompt the user to click to play with sound if autoplay fails
        });
    });

    featuredMovie.addEventListener('mouseout', () => {
        kravenVideo.pause();
        kravenVideo.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('button.prev');
    const nextButton = document.querySelector('button.next');
    const carousel = document.querySelector('.movie-carousel');

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({
            top: 0,
            left: 300, // Adjust this value to scroll more or less
            behavior: 'smooth'
        });
    });

    prevButton.addEventListener('click', () => {
        carousel.scrollBy({
            top: 0,
            left: -300, // Adjust this value to scroll more or less
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const prevButton1 = document.querySelector('button.prev1');
    const nextButton1 = document.querySelector('button.next1'); // Ensure this is next1, not next2
    const carousel1 = document.querySelector('.movie-carousel1');

    if (prevButton1 && nextButton1 && carousel1) {
        nextButton1.addEventListener('click', () => {
            carousel1.scrollBy({
                top: 0,
                left: 300,
                behavior: 'smooth'
            });
        });

        prevButton1.addEventListener('click', () => {
            carousel1.scrollBy({
                top: 0,
                left: -300,
                behavior: 'smooth'
            });
        });
    } else {
        console.error('Carousel1 buttons or carousel1 not found!');
    }
});
