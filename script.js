document.addEventListener("DOMContentLoaded", function() {
    
    // Sticky Navbar Logic
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function() {
        if (this.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    // Toggle Menu/Navbar Script for Mobile
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".navbar .menu");
    const menuLinks = document.querySelectorAll(".navbar .menu li a");

    // Open/Close menu when burger icon is clicked
    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("active");
        
        // Toggle icon between bars and times (X)
        const icon = menuBtn.querySelector("i");
        if(menu.classList.contains("active")){
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            const icon = menuBtn.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        });
    });

    // Typing Animation Script (Simple version)
    const typedTextSpan = document.querySelector(".typing");
    const textArray = ["Frontend Developer", "Web Designer", "Student", "Coder"];
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, 1000);
        }
    }

    // Start typing animation
    type();
});