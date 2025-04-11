document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon");
    this.reset();
});

//loader  animation
window.addEventListener("load",()=> {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
});

//form alert
document.getElementById("contact-form").addEventListener
("submit",function (e) {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon");
    this.reset();
});

//theme-toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click",()=> {
    document.body.classList.toggle("dark");
});