const clock = document.getElementById("clock");
// Another way
// document.querySelector('#clock')

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocalTimeString());
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);

const clock1 = document.getElementById("clock1");
// Another way
// document.querySelector('#clock')

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocalTimeString());
    clock1.innerHTML = date.toLocaleDateString()
}, 1000);