// Scrip para el efecto "odometer effect" o contador numérico animado (Metrics.astro)

import { CountUp } from "countup.js";

const container = document.getElementById("metrics-container");
const counters = document.querySelectorAll('[id^="metric-"]');
// let hasAnimated = false; // Para que la animación se ejecute una solo vez cuando aparece

// Creamos y guardamos las instancias de CountUp para reutilizarlas
const countUpInstances = Array.from(counters).map(counter => {
  const target = counter as HTMLElement;
  const endValue = Number(target.dataset.value);
  const suffix = target.dataset.suffix || "";

  return new CountUp(target.id, endValue, {
    duration: 2.5, // Duración de la animación en segundos
    suffix: suffix, // Añade el "+" o "%" al final del conteo
    useEasing: true, // Efecto de desaceleración al llegar al final
    useGrouping: false, // Indica a la librería que no agrupe los números de tres en tres (, en miles)
  });
});

// Configuramos el observador para disparar la animación al hacer scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      // Si la sección entra en la pantalla esta visible
      if (entry.isIntersecting) {
        // if (entry.isIntersecting && !hasAnimated) {
        // hasAnimated = true;

        countUpInstances.forEach(instance => {
          if (!instance.error) {
            instance.start();
          } else {
            console.error(instance.error);
          }
        });
      } else {
        // Salió de la pantalla: Reseteamos los valores a 0
        // Esto permite que la animación pueda volver a ejecutarse al bajar/subir
        countUpInstances.forEach(instance => {
          instance.reset();
        });
      }
    });
  },
  { threshold: 0.5 } // 0.5 = 50% que se activa cuando la mitad de la sección es visible
);

if (container) {
  observer.observe(container);
}

/* La propiedad .isIntersecting es un valor booleano (true/false) que forma parte de la API IntersectionObserver en JavaScript.  Indica si un elemento observado está actualmente intersectando (superponiéndose) con su elemento raíz o el viewport.

  Funcionamiento Principal
  true: Significa que el elemento objetivo ha entrado en el área de observación (se ha vuelto visible, total o parcialmente, según el umbral definido). Indica una transición de "no visible" a "visible".
  
  false: Significa que el elemento ha dejado de intersectar con el área de observación (se ha vuelto invisible). Indica una transición de "visible" a "no visible".
  Se utiliza dentro de la función callback del observador para ejecutar código específicamente cuando un elemento aparece o desaparece de la vista.*/
