const nav = document.querySelector(".navbar");
const search = document.querySelector(".search-container");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden", "black");
        search.classList.add("search-container");

    } else if (lastScrollY < 400 || lastScrollY === 0) {
        nav.classList.remove("black");

    } else if (lastScrollY > window.scrollY) {
        nav.classList.remove("nav--hidden");
        search.classList.remove("search-container");
        search.classList.add("search-container");
        
    }
    lastScrollY = window.scrollY;
    console.log(lastScrollY);
});