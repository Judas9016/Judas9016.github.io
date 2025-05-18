import anime from "animejs/lib/anime.es.js";

export function animateSquareOnScroll() {
  const target = document.querySelector(".img-hero img");

  if (!target) return;

  // Usamos IntersectionObserver para detectar cuando la imagen entra en pantalla
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: target,
            translateX: "15rem",
            rotate: "1turn",
            duration: 2000,
            direction: "alternate",
            loop: true,
            easing: "easeInOutQuad",
          });
          observer.unobserve(target); // Para que solo se active una vez
        }
      });
    },
    {
      threshold: 0.5, // Cuando el 50% de la imagen esté visible
    },
  );

  observer.observe(target);
}
