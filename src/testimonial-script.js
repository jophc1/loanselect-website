var cath = document.getElementById("catherine");
var tilly = document.getElementById("tilly");
var ryan = document.getElementById("ryan");

function appearCath () {
    cath.classList.remove("hide")
    cath.classList.remove("show")
    cath.classList.toggle("show")
}

function disapperCath() {
    cath.classList.remove("hide")
    cath.classList.remove("show")
    cath.classList.toggle("hide")
}

function appearTilly () {
    tilly.classList.remove("hide")
    tilly.classList.remove("show")
    tilly.classList.toggle("show")
}

function disapperTilly() {
    tilly.classList.remove("hide")
    tilly.classList.remove("show")
    tilly.classList.toggle("hide")
}

function appearRyan () {
    ryan.classList.remove("hide")
    ryan.classList.remove("show")
    ryan.classList.toggle("show")
}

function disapperRyan() {
    ryan.classList.remove("hide")
    ryan.classList.remove("show")
    ryan.classList.toggle("hide")
}

function appearHugh () {
    hugh.classList.remove("hide")
    hugh.classList.remove("show")
    hugh.classList.toggle("show")
}

function disapperHugh () {
    hugh.classList.remove("hide")
    hugh.classList.remove("show")
    hugh.classList.toggle("hide")
}


function cycleFn() {
    setTimeout(appearCath, 1000)
    setTimeout(disapperCath, 6000)
    setTimeout(appearTilly, 7000)
    setTimeout(disapperTilly, 12000)
    setTimeout(appearRyan, 13000)
    setTimeout(disapperRyan, 18000)
    setTimeout(appearHugh, 19000)
    setTimeout(disapperHugh, 24000)
}

// Innitial cycle
setTimeout(appearCath, 1000)
setTimeout(disapperCath, 6000)
setTimeout(appearTilly, 7000)
setTimeout(disapperTilly, 12000)
setTimeout(appearRyan, 13000)
setTimeout(disapperRyan, 18000)
setTimeout(appearHugh, 19000)
setTimeout(disapperHugh, 24000)

window.setInterval(() => {
    cycleFn();
}, 25000);