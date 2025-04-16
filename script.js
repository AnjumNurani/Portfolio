
    // Scroll Animations
    const lazyloadImages = document.querySelectorAll('.lazyload');
    const windowHeight = window.innerHeight;

    const loadLazyImages = () => {
        lazyloadImages.forEach(image => {
            const rect = image.getBoundingClientRect();
            if (rect.top < windowHeight) {
                image.classList.add('loaded');
                image.src = image.dataset.src;
            }
        });
    };

   window.addEventListener('scroll', loadLazyImages);
    loadLazyImages();

    //Parallax effect for hero
     function loadLazyImages() {
        const lazyImages = 
        document.querySelectorAll(`img[data-src]`);
        lazyImages.forEach(img =>{
            if (img.getBoundingClientRect().top<
        window.innerHeight) {
            img.src = img.dataset.src;
            img.removeAttribute(`data-src`);
        }
        });
     }

    const hero = document.querySelector('.hero');
    if (hero) {
    window.addEventListener(`scroll`,(loadLazyImages,
    loadLazyImage) => {
        const scrollPos = window.pageYOffset;
        hero.style.transform = `translateY(${scrollPos* 0.3 } px)`;
    });
    }
