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
