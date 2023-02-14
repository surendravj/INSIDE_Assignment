const text = 'Experience the future of education today'
let index = 0

function typeWriter () {
  const typingEffect = document.getElementById('typing-effect')
  if (index < text.length) {
    typingEffect.innerHTML += text.charAt(index)
    index++
    setTimeout(typeWriter, 50) // Adjust the time interval as desired
  }
}

typeWriter()

const welcomeText = document.querySelector('#text-container h1')
let opacity = 0

function fadeIn () {
  welcomeText.style.opacity = opacity
  opacity += 0.1
  if (opacity > 1) {
    clearInterval(timer)
  }
}

const timer = setInterval(fadeIn, 100)

function scrollToDiv () {
  const div = document.querySelector('#scroll-to-div')
  div.scrollIntoView({
    behavior: 'smooth'
  })
}

const scrollToTopBtn = document.getElementById('scroll-to-top-btn')

window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block'
  } else {
    scrollToTopBtn.style.display = 'none'
  }
})

scrollToTopBtn.addEventListener('click', function () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})


const d3text = document.getElementById("3d-text");
const textContent = d3text.textContent;
d3text.textContent = "Welcome to INSIDE EdTech !";
d3text.setAttribute("data-text", textContent);

document.addEventListener("mousemove", function(event) {
  const x = (window.innerWidth / 2 - event.clientX) / 10;
  const y = (window.innerHeight / 2 - event.clientY) / 10;
  text.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});

document.addEventListener("mouseleave", function() {
  text.style.transform = "none";
});


let testimonialsCarousel = document.querySelector('#testimonials');

let carousel = new bootstrap.Carousel(testimonialsCarousel, {
  interval: 5000
});
