const clock = document.querySelector(".clock");
clock.addEventListener("DomContentLoaded", tick);

function tick() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const time = `
        <span>${hour}:</span>
        <span>${min}:</span>
        <span>${sec}</span>
    `;

    clock.innerHTML = time;
}

setInterval(tick, 1000);
