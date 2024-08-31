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

    let scrollAmount = 0;

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

