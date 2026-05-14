 const aboutEls = document.querySelectorAll(".about")

        for (let aboutEl of aboutEls) {
            aboutEl.addEventListener("mouseover", function () {
                const info = aboutEl.querySelector(".product-info")
                info.classList.add("active")
            })

            aboutEl.addEventListener("mouseout", function () {
                const info = aboutEl.querySelector(".product-info")
                info.classList.remove("active")
            })
        }


const navEl = document.querySelector(".nav-links")
const burgerEl = document.querySelector(".burger")
const closeEl = document.querySelector(".close")
const burgerContainerEl = document.querySelector(".burger-container")

burgerContainerEl.addEventListener("click", function () {
    navEl.classList.toggle("active")
    burgerEl.classList.toggle("active")
    closeEl.classList.toggle("active")
}) 



const btnEls = document.querySelectorAll(".story-link")
const imgEls = document.querySelectorAll(".img")

for (let btnEl of btnEls) {
    btnEl.addEventListener("click", function(){

        const imgEl = btnEl.parentElement.querySelector("img")
        imgEl.classList.toggle("active")

        const pEl = btnEl.parentElement.querySelector(".more")
        pEl.classList.toggle("active")
    })
}