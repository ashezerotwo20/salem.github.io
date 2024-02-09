const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const jpg = document.querySelector('.jpg');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener("click", () => {
    question.innerHTML = "oki";
    jpg.src = "https://scontent.fmnl33-2.fna.fbcdn.net/v/t1.15752-9/405271468_269711572813251_4035941282842810640_n.jpg?stp=dst-jpg_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFoDWk5lO415wv1ABDOeNyw77iAH8bbyfLvuIAfxtvJ8tlNVfYtmq68T8YCzuGMQvQYNlx7WATcMF-1ghZoZirC&_nc_ohc=rGld-w37hdQAX8W1n9K&_nc_ht=scontent.fmnl33-2.fna&oh=03_AdQ8miPhgbzBd67IWSQFV9aUFTpA8Wj1pjnLenBCbuFhAg&oe=65ED4521";
});

noBtn.addEventListener('mouseover', () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});
