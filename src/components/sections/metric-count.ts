import { CountUp } from "countup.js";

/**
 * Inicializa los contadores animados de la sección Metrics.
 * Se ejecuta en cada navegación (incluyendo la inicial) gracias a `astro:page-load`.
 * Esto asegura que la animación CountUp funcione incluso al volver al Home
 * mediante View Transitions sin necesidad de recargar la página.
 */
function initMetrics() {
  const container = document.getElementById("metrics-container");
  if (!container) return;

  // Selecciona todos los spans con id="metric-{index}"
  const counters = document.querySelectorAll<HTMLElement>('[id^="metric-"]');

  // Creamos y guardamos las instancias de CountUp para cada contador
  const countUpInstances = Array.from(counters).map(counter => {
    const endValue = Number(counter.dataset.value);
    const suffix = counter.dataset.suffix || "";

    return new CountUp(counter.id, endValue, {
      duration: 2.5, // Duración de la animación en segundos
      suffix: suffix, // Añade el "+" o "%" al final del número
      useEasing: true, // Efecto de desaceleración al llegar al final
      useGrouping: false, // No agrupa los números con comas (ej. 1500 no 1,500)
    });
  });

  // Configuramos el observador para disparar la animación al hacer scroll
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        // Si la sección entra en la pantalla (visible al 50% según threshold)
        if (entry.isIntersecting) {
          countUpInstances.forEach(instance => {
            if (!instance.error) {
              instance.start();
            }
          });
        } else {
          // Salió de la pantalla: reseteamos los valores a 0
          // Esto permite que la animación pueda volver a ejecutarse al scrollear de nuevo
          countUpInstances.forEach(instance => {
            instance.reset();
          });
        }
      });
    },
    { threshold: 0.5 } // Se activa cuando el 50% de la sección es visible
  );

  observer.observe(container);
}

document.addEventListener("astro:page-load", initMetrics);
