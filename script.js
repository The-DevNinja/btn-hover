let btn = document.querySelectorAll('.btn');

let xPos = 0;
let yPos = 0;

btn.forEach((item) => {
    item.addEventListener('mousemove', (e) => {
        xPos = e.offsetX;
        yPos = e.offsetY;

        item.style.setProperty('--xPos', xPos + 'px');
        item.style.setProperty('--yPos', yPos + 'px');
    });
});