const infoMessage = document.querySelector('.infoMessage')
const xMark = document.getElementById('xMark')

xMark.addEventListener('click', () => {
header.style.marginTop = `${infoMessage.clientHeight}px`
infoMessage.remove();
})

const docCardImages = document.querySelectorAll('.docCardImage')

docCardImages[1].style.backgroundImage = "url(images/doc2.jpg)";
docCardImages[2].style.backgroundImage = "url(images/doc3.jpg)";
docCardImages[3].style.backgroundImage = "url(images/doc4.jpg)";
docCardImages[4].style.backgroundImage = "url(images/doc5.jpg)";
docCardImages[5].style.backgroundImage = "url(images/doc6.jpg)";

const avatarImages = document.querySelectorAll('.avatarImage')

avatarImages[0].style.backgroundImage = "url(images/man1.jpg)";
avatarImages[1].style.backgroundImage = "url(images/woman1.jpg)";
avatarImages[2].style.backgroundImage = "url(images/woman2.jpg)";

const header = document.querySelector('header');
const upperPart = document.querySelector('.upperPart');
header.style.marginTop = `${upperPart.clientHeight}px`



const nav = document.querySelector('nav')

window.addEventListener("scroll", function(event){
    if(this.scrollY > 50) {
    nav.style.background = 'rgba( 109, 157, 229, 0.9 )'
    nav.style.boxShadow = '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'
    nav.style.backdropFilter = 'blur(5px)'
    nav.style.color = 'white'
    } else {
    nav.style.backgroundColor = 'white'
    nav.style.boxShadow = 'unset'
    nav.style.backdropFilter = 'unset'
    nav.style.color = 'black'
    }});



function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    
        );
    }


const home = document.getElementById('home')
const services = document.getElementById('services')
const ourTeam = document.getElementById('ourTeam')
const contactUs = document.getElementById('contactUs')
const faq = document.getElementById('faq')

const homeContainer = document.querySelector('.description h1')
const servicesContainer = document.querySelector('.services')
const doctorsContainer = document.querySelector('.doctorsHeader')
const contactUsContainer = document.querySelector('.text')
const faqContainer = document.querySelector('.faq h1')

const removeAllClasses = (className) => {
    const elements = document.getElementsByClassName(className)
    for (let element of elements) {
        element.classList.remove(className)
    }
}
    
document.addEventListener('scroll', function () {

    if (isInViewport(servicesContainer)) {
        removeAllClasses('focus')
        services.classList.add('focus');
    } else if (isInViewport(doctorsContainer)) {
        removeAllClasses('focus')
        ourTeam.classList.add('focus');
    } else if (isInViewport(contactUsContainer)) {
        removeAllClasses('focus')
        contactUs.classList.add('focus');
    } else if (isInViewport(faqContainer)) {
        removeAllClasses('focus')
        faq.classList.add('focus');
    } else if (isInViewport(homeContainer)) {
        removeAllClasses('focus')
        home.classList.add('focus');
    }

 }, {
        passive: true
});

const questions = [...document.querySelectorAll('.questionContainer')]
const responsesToQuestion = [...document.querySelectorAll('.faq p')]
const arrowDown = [...document.querySelectorAll('.fa-arrow-down')]

for (const question of questions) {
    question.addEventListener('click', function() {
            responsesToQuestion[questions.indexOf(this)].classList.toggle('toggler')
            arrowDown[questions.indexOf(this)].classList.toggle('togglerArrow')
    })
}



// Add some responsiveness
