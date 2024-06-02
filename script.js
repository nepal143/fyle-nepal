window.onload = function() {
    document.getElementById('checkbox').checked = false;
};

const track = document.getElementById("image-track");
const dots = [
    document.getElementById('dot1'),
    document.getElementById('dot2'),
    document.getElementById('dot3'),
    document.getElementById('dot4')
];

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
};

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth;
    const percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    if (nextPercentage > 0) {
        nextPercentage = 0;
    }
    if (nextPercentage < -100) {
        nextPercentage = -100;
    }

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: "translate(" + nextPercentage + "%, 0%)"
    }, { duration: 1200, fill: "forwards" });

    for (const image of track.getElementsByClassName("image")) {
        image.animate({ objectPosition: nextPercentage + 100 + "% 50%" }, { duration: 1200, fill: "forwards" });
    }

    updateActiveDot(nextPercentage);
};

window.onmouseup = e => {
    track.dataset.mouseDownAt = "0";
    if (track.dataset.percentage === undefined) {
        track.dataset.percentage = 0;
    }

    track.dataset.prevPercentage = track.dataset.percentage;
};

function updateActiveDot(percentage) {
    const totalDots = dots.length;
    const index = Math.min(Math.floor((Math.abs(percentage) / 100) * totalDots), totalDots - 1);

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

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

function hideDiv(divId) {
    document.getElementById(divId).style.visibility = 'hidden';
}

document.getElementById('img1').addEventListener('mouseover', function() {
    showDiv('1');
});
document.getElementById('img1').addEventListener('mouseout', function() {
    hideDiv('1');
});

document.getElementById('img2').addEventListener('mouseover', function() {
    showDiv('2');
});
document.getElementById('img2').addEventListener('mouseout', function() {
    hideDiv('2');
});

document.getElementById('img3').addEventListener('mouseover', function() {
    showDiv('3');
});
document.getElementById('img3').addEventListener('mouseout', function() {
    hideDiv('3');
});

document.getElementById('img4').addEventListener('mouseover', function() {
    showDiv('4');
});
document.getElementById('img4').addEventListener('mouseout', function() {
    hideDiv('4');
});

document.getElementById('1').addEventListener('mouseover', function() {
    showDiv('1');
});
document.getElementById('1').addEventListener('mouseout', function() {
    hideDiv('1');
});

document.getElementById('2').addEventListener('mouseover', function() {
    showDiv('2');
});
document.getElementById('2').addEventListener('mouseout', function() {
    hideDiv('2');
});

document.getElementById('3').addEventListener('mouseover', function() {
    showDiv('3');
});
document.getElementById('3').addEventListener('mouseout', function() {
    hideDiv('3');
});

document.getElementById('4').addEventListener('mouseover', function() {
    showDiv('4');
});
document.getElementById('4').addEventListener('mouseout', function() {
    hideDiv('4');
});

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
