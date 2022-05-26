const infoMessage = document.querySelector('.infoMessage')
const xMark = document.getElementById('xMark')

xMark.addEventListener('click', () => {
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