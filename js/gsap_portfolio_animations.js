// Регистрация плагина ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Функции для проверки размера экрана
const isMobile = () => window.innerWidth <= 768;
const isTablet = () => window.innerWidth <= 1024 && window.innerWidth > 768;
const isDesktop = () => window.innerWidth > 1024;

// ========================================
// HEADER ANIMATIONS
// ========================================
gsap.from(".header_logo", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
});

// Анимация навигации только для десктопа
if (isDesktop()) {
    gsap.from(".header_nav li", {
        duration: 0.8,
        y: -30,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3
    });
}

// ========================================
// PROMO SECTION ANIMATIONS
// ========================================
const promoTimeline = gsap.timeline({ delay: 0.5 });

promoTimeline
    .from(".promo_title h3", {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power3.out"
    })
    .from(".promo_title h1", {
        duration: 1.2,
        y: 40,
        opacity: 0,
        ease: "power3.out"
    }, "-=0.6")
    .from(".promo_title h2", {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power3.out"
    }, "-=0.6")
    .from(".promo_descr", {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power2.out"
    }, "-=0.4")
    .from(".promo_buttons", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "back.out(1.7)"
    }, "-=0.3")
    .from(".promo_links", {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: "power2.out"
    }, "-=0.3")
    .from(".scroll_down", {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: "power2.out"
    }, "-=0.2");

// ========================================
// ABOUT SECTION ANIMATIONS
// ========================================
const aboutTriggerStart = isMobile() ? "top 85%" : "top 80%";

gsap.from(".about_title h3", {
    scrollTrigger: {
        trigger: ".About",
        start: aboutTriggerStart,
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".about_title h2", {
    scrollTrigger: {
        trigger: ".About",
        start: aboutTriggerStart,
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 0.2
});

gsap.from(".about_title p", {
    scrollTrigger: {
        trigger: ".About",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    delay: 0.4
});

gsap.from(".box", {
    scrollTrigger: {
        trigger: ".about_right",
        start: isMobile() ? "top 85%" : "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.15,
    ease: "power2.out"
});

// ========================================
// SKILLS SECTION ANIMATIONS
// ========================================
gsap.from(".skills_title h3", {
    scrollTrigger: {
        trigger: ".skills",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".skills_title h2", {
    scrollTrigger: {
        trigger: ".skills",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 0.2
});

// Skills Level Animation
gsap.from(".skills_Level h4", {
    scrollTrigger: {
        trigger: ".skills_Level",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power2.out"
});

gsap.from(".level_wrapper", {
    scrollTrigger: {
        trigger: ".skills_Level",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out"
});

// Progress bars fill animation
const progressBars = document.querySelectorAll(".line");
progressBars.forEach((bar, index) => {
    gsap.from(bar, {
        scrollTrigger: {
            trigger: bar,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        width: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: index * 0.2
    });
});


// ========================================
// WORK SECTION ANIMATIONS
// ========================================
gsap.from(".work_title h2", {
    scrollTrigger: {
        trigger: ".work",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".work_title h2", {
    scrollTrigger: {
        trigger: ".work",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 0.2
});

gsap.from(".work_title p", {
    scrollTrigger: {
        trigger: ".work",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.4
});

// Projects animation
gsap.from(".work_projects a", {
    scrollTrigger: {
        trigger: ".work_projects",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.15,
    ease: "power2.out"
});

// GitHub button animation
gsap.from(".work_btn-github", {
    scrollTrigger: {
        trigger: ".work_btn-github",
        start: "top 85%",
        toggleActions: "play none none reverse"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "back.out(1.7)"
});

// ========================================
// CERTIFICATES SECTION ANIMATIONS
// ========================================
// Инициализация Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// GSAP анимации для секции certificates
gsap.from(".certificates_title h2", {
    scrollTrigger: {
        trigger: ".certificates",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".swiper", {
    scrollTrigger: {
        trigger: ".certificates",
        start: "top 70%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    scale: 0.9,
    opacity: 0,
    ease: "back.out(1.5)",
    delay: 0.3
});

// ========================================
// CONTACTS SECTION ANIMATIONS
// ========================================
gsap.from(".contacts_title h3", {
    scrollTrigger: {
        trigger: ".Contacts",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".contacts_title h1", {
    scrollTrigger: {
        trigger: ".Contacts",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 0.2
});

gsap.from(".contacts_title p", {
    scrollTrigger: {
        trigger: ".Contacts",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.4
});

// Contacts subtitle animation
gsap.from(".contacts_subtitle h2", {
    scrollTrigger: {
        trigger: ".contacts_wrapper",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".contacts_info", {
    scrollTrigger: {
        trigger: ".contacts_subtitle",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.15,
    ease: "power2.out"
});

gsap.from(".links_media", {
    scrollTrigger: {
        trigger: ".links_media",
        start: "top 85%",
        toggleActions: "play none none reverse"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out"
});

// Contact form animation
gsap.from(".contact_social", {
    scrollTrigger: {
        trigger: ".contacts_wrapper",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 0.3
});

// ========================================
// FOOTER ANIMATIONS
// ========================================
gsap.from(".footer_logo", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
        toggleActions: "play none none reverse"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out"
});

gsap.from(".footer_text", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
        toggleActions: "play none none reverse"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.15
});

gsap.from(".footer_link", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
        toggleActions: "play none none reverse"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.3
});

// ========================================
// PARALLAX EFFECT (Desktop only)
// ========================================
if (isDesktop()) {
    gsap.to(".scroll_down", {
        scrollTrigger: {
            trigger: ".promo",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        y: 100,
        opacity: 0
    });
}

// ========================================
// MOBILE MENU ANIMATION
// ========================================
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuBlock = document.querySelector('.menu_block');

if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');

        if (hamburger.classList.contains('active')) {
            menu.classList.add('active');

            gsap.to(menu, {
                duration: 0.6,
                ease: "power2.out"
            });

            gsap.from(".menu_link", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "power2.out",
                delay: 0.2
            });
        } else {
            gsap.to(menu, {
                duration: 0.1,
                ease: "power2.in",
                onComplete: () => {
                    menu.classList.remove('active');
                }
            });
        }

        menu.addEventListener('click', (e) => {
            if (!menuBlock.contains(e.target)) {
                menu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Закрытие меню при клике на ссылку
    const menuLinks = document.querySelectorAll('.menu_link a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            gsap.to(menu, {
                duration: 0.1,
                ease: "power4.in",
                onComplete: () => {
                    menu.classList.remove('active');
                }
            });
        });
    });
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('.header');

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// REFRESH ON RESIZE
// ========================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});