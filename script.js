const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const images = document.querySelectorAll('#imgs img')
let idx = 0;
let interval = setInterval(run, 2000)

function run() {
    idx++

    changeImage()
}

function changeImage() {
    if(idx > images.length-1) {
        idx = 0
    } else if (idx < 0) {
        idx = images.length - 1;
    }

    imgs.style.transform = `translateX(${-idx *500}px)`;

}


function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000)
}

leftBtn.addEventListener('click', (e) => {
    idx--
    changeImage()
    resetInterval()
})

rightBtn.addEventListener('click', (e) => {
    idx++
    changeImage()
    resetInterval()
})