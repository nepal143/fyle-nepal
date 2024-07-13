window.onload = function() {
    document.getElementById('checkbox').checked = false;
};


// const track = document.querySelector('.gallery-track');
// const items = document.querySelectorAll('.gallery-item');
// let index = 0;

// function startAutoScroll() {
//     setInterval(() => {
//         index = (index + 1) % items.length;
//         track.style.transform = `translateX(${-index * 100}%)`;
//     }, 3000); // Change slide every 3 seconds
// }

// startAutoScroll();

let currentIndex = 0;
const totalItems = document.querySelectorAll('.gallery-item').length;
const itemsPerSlide = Math.ceil(totalItems / 3); // Change this to fit the number of items per slide

function currentSlide(index) {
    const track = document.querySelector('.gallery-track');
    const itemWidth = document.querySelector('.gallery-item').offsetWidth;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(${-index * itemsPerSlide * itemWidth}px)`;
    updateDots(index);
    currentIndex = index;
}

function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
    });
}

// Optional: auto-scroll functionality
setInterval(() => {
    currentIndex = (currentIndex + 1) % 3;
    currentSlide(currentIndex);
}, 5000);

document.addEventListener('DOMContentLoaded', () => {
    updateDots(currentIndex);
});
// const track = document.getElementById("image-track");
// const dots = [
//     document.getElementById('dot1'),
//     document.getElementById('dot2'),
//     document.getElementById('dot3'),
//     document.getElementById('dot4')
// ];

// window.onmousedown = e => {
//     track.dataset.mouseDownAt = e.clientX;
// };

// window.onmousemove = e => {
//     if (track.dataset.mouseDownAt === "0") return;

//     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
//     const maxDelta = window.innerWidth;
//     const percentage = (mouseDelta / maxDelta) * -100;
//     let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

//     if (nextPercentage > 0) {
//         nextPercentage = 0;
//     }
//     if (nextPercentage < -100) {
//         nextPercentage = -100;
//     }

//     track.dataset.percentage = nextPercentage;

//     track.animate({
//         transform: "translate(" + nextPercentage + "%, 0%)"
//     }, { duration: 1200, fill: "forwards" });

//     for (const image of track.getElementsByClassName("image")) {
//         image.animate({ objectPosition: nextPercentage + 100 + "% 50%" }, { duration: 1200, fill: "forwards" });
//     }

//     updateActiveDot(nextPercentage);
// };

// window.onmouseup = e => {
//     track.dataset.mouseDownAt = "0";
//     if (track.dataset.percentage === undefined) {
//         track.dataset.percentage = 0;
//     }

//     track.dataset.prevPercentage = track.dataset.percentage;
// };

// function updateActiveDot(percentage) {
//     const totalDots = dots.length;
//     const index = Math.min(Math.floor((Math.abs(percentage) / 100) * totalDots), totalDots - 1);

//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[index].classList.add('active');
// }

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    const sendDataButton = document.getElementById('sendDataButton');

    checkbox.addEventListener('change', function() {
        sendDataButton.disabled = !checkbox.checked;
    });
});

document.getElementById('contactus').addEventListener('click', function() {
    var formContainer = document.getElementById('form-container');
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'flex';
    } else {
        formContainer.style.display = 'none';
    }
});

function showDiv(divId) {
    document.getElementById(divId).style.visibility = 'visible';
}

// function hideDiv(divId) {
//     document.getElementById(divId).style.visibility = 'hidden';
// }

// document.getElementById('img1').addEventListener('mouseover', function() {
//     showDiv('1');
// });
// document.getElementById('img1').addEventListener('mouseout', function() {
//     hideDiv('1');
// });

// document.getElementById('img2').addEventListener('mouseover', function() {
//     showDiv('2');
// });
// document.getElementById('img2').addEventListener('mouseout', function() {
//     hideDiv('2');
// });

// document.getElementById('img3').addEventListener('mouseover', function() {
//     showDiv('3');
// });
// document.getElementById('img3').addEventListener('mouseout', function() {
//     hideDiv('3');
// });

// document.getElementById('img4').addEventListener('mouseover', function() {
//     showDiv('4');
// });
// document.getElementById('img4').addEventListener('mouseout', function() {
//     hideDiv('4');
// });

// document.getElementById('1').addEventListener('mouseover', function() {
//     showDiv('1');
// });
// document.getElementById('1').addEventListener('mouseout', function() {
//     hideDiv('1');
// });

// document.getElementById('2').addEventListener('mouseover', function() {
//     showDiv('2');
// });
// document.getElementById('2').addEventListener('mouseout', function() {
//     hideDiv('2');
// });

// document.getElementById('3').addEventListener('mouseover', function() {
//     showDiv('3');
// });
// document.getElementById('3').addEventListener('mouseout', function() {
//     hideDiv('3');
// });

// document.getElementById('4').addEventListener('mouseover', function() {
//     showDiv('4');
// });
// document.getElementById('4').addEventListener('mouseout', function() {
//     hideDiv('4');
// });

function changeImageSrc(newSrc) {
    var imageId = "image-to-change";
    var imgElement = document.getElementById(imageId);
    if (imgElement) {
        imgElement.src = newSrc;
    } else {
        console.error("Image with id " + imageId + " not found.");
    }
}

class SlideInFromLeftObserver {
    constructor() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-left');
                } else {
                    entry.target.classList.remove('slide-in-left');
                }
            });
        });
    }

    observe(element) {
        this.observer.observe(element);
    }
}

class SlideInFromRightObserver {
    constructor() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-right');
                } else {
                    entry.target.classList.remove('slide-in-right');
                }
            });
        });
    }

    observe(element) {
        this.observer.observe(element);
    }
}

class FadeInObserver {
    constructor() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                } else {
                    entry.target.classList.remove('fade-in');
                }
            });
        }, {
            threshold: 0.75 // Trigger when 75% of the element is in view
        });
    }

    observe(element) {
        this.observer.observe(element);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const slideInLeftObserver = new SlideInFromLeftObserver();
    const slideInRightObserver = new SlideInFromRightObserver();
    const fadeInObserver = new FadeInObserver();

    document.querySelectorAll('.slide-left').forEach(element => {
        slideInLeftObserver.observe(element);
    });

    document.querySelectorAll('.slide-right').forEach(element => {
        slideInRightObserver.observe(element);
    });

    document.querySelectorAll('.fade').forEach(element => {
        fadeInObserver.observe(element);
    });
});








function toggleNavbar() {
    var navbarMenu = document.getElementById('navbarMenu');
    if (navbarMenu.style.display === 'block') {
        navbarMenu.style.display = 'none';
    } else {
        navbarMenu.style.display = 'block';
    }
}
