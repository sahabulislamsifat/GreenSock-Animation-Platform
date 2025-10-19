gsap.registerPlugin(ScrollTrigger);

// 🟢 Hero Animation
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

tl.from("nav .logo, nav .navItem a, nav button", {
  y: -30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
});

tl.from(".heroTitle", { x: -100, opacity: 0, duration: 0.8 }, "-=0.3");
tl.from("#heroDescription", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4");
tl.from(
  ".hero-left button",
  { scale: 0.8, opacity: 0, duration: 0.5 },
  "-=0.4"
);
tl.from(".hero-right img", { x: 150, opacity: 0, duration: 0.8 }, "-=0.5");
tl.from(
  "#hero-section-bottom img",
  { y: 30, opacity: 0, stagger: 0.1, duration: 0.4 },
  "-=0.3"
);

// 🟣 Services Section Animation
gsap.from(".services h2, .services p", {
  scrollTrigger: {
    trigger: ".sectionTwo",
    start: "top 85%",
    end: "top 65%",
    scrub: 1,
  },
  y: 50,
  opacity: 0,
  stagger: 0.15,
});

// 🟠 Smooth Card Scroll Animation (desktop + mobile)
const animateCards = () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // Mobile: all cards animate from bottom
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  } else {
    // Desktop: left/right animation
    const rows = [1, 2, 3, 4];
    rows.forEach((row) => {
      gsap.fromTo(
        `.card.line${row}.left`,
        { x: -300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.card.line${row}.left`,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        `.card.line${row}.right`,
        { x: 300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.card.line${row}.right`,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }
};

// Initial animation
animateCards();

// Optional: re-run animation on window resize
window.addEventListener("resize", () => {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  animateCards();
});

// 🟢 SectionThree Fade In
gsap.from(".sectionThree h2, .sectionThree p", {
  scrollTrigger: {
    trigger: ".sectionThree",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
  y: 50,
  opacity: 0,
  stagger: 0.2,
});
