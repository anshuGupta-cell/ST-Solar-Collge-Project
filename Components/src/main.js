const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.querySelectorAll(".nav-toggle")

Array.from(navToggle).forEach(btn => btn.addEventListener('click', () => {
    console.log(primaryNav.style.left);

    if (primaryNav.hasAttribute("data-visible")) {
        btn.setAttribute("aria-expanded", false)
    } else {
        btn.setAttribute("aria-expanded", true);
    }
    primaryNav.toggleAttribute("data-visible")
}))


Array.from(document.querySelectorAll(".dropdown-btn")).forEach(btn => btn.addEventListener('click', () => {
    btn.classList.toggle("rotated")
    btn.nextElementSibling.classList.toggle("show")
}))

// Array.from(document.querySelectorAll(".dropdown-btn")).forEach((btn)=>{
//     btn.addEventListener("click", ()=>{
//         btn.classList.toggle("rotated")
//         console.log(btn);
        
//     })
// })

function toggleSubMenu(btn) {
}