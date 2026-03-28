// GALLERY LIGHTBOX
const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

galleryItems.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if(e.target !== lightboxImg){
        lightbox.style.display = "none";
    }
});



// Example JS (you can expand later)

// Smooth scroll enhancement (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.querySelector(".contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    const name = this.querySelector("input[type='text']").value;
    const phone = this.querySelector("input[type='tel']").value;
    const message = this.querySelector("textarea").value;

    const whatsappMessage = `Hello, my name is ${name}%0APhone: ${phone}%0AProject: ${message}`;

    window.open(`https://wa.me/27703004230?text=${whatsappMessage}`, "_blank");
});

// Close with ESC key
document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
        lightbox.style.display = "none";
    }
});
