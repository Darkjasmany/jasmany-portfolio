// Script para el efecto 3D Tilt en la foto de perfil (Card.astro)
// Se ejecuta solo en desktop (lg+) porque Card está oculto en mobile

window.addEventListener("load", () => {
  const wrapper = document.getElementById("card-wrapper");
  const glow = document.getElementById("glow");
  const shine = document.getElementById("shine");

  if (!wrapper) return;

  const handleLeave = () => {
    wrapper.style.transform = "rotateX(0deg) rotateY(0deg)";
    if (glow) glow.style.opacity = "0";
    if (shine) shine.style.opacity = "0";
  };

  const handleMove = (e: MouseEvent) => {
    const rect = wrapper.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 10;
    const rotY = ((x - centerX) / centerX) * 10;

    wrapper.style.transform = `
      rotateX(${rotX}deg)
      rotateY(${rotY}deg)
      scale(1.04)
    `;

    // Glow Apple-style
    if (glow) {
      glow.style.opacity = "1";
      glow.style.background = `
        radial-gradient(
          600px circle at ${x}px ${y}px,
          rgba(255,255,255,0.18),
          rgba(0,163,255,0.10) 30%,
          transparent 65%
        )
      `;
    }

    // Shine tipo vidrio
    if (shine) {
      shine.style.opacity = "0.35";
      shine.style.background = `
        linear-gradient(
          ${115 + rotY * 1.5}deg,
          rgba(255,255,255,0.35),
          rgba(255,255,255,0.12) 25%,
          rgba(255,255,255,0.05) 40%,
          transparent 60%
        )
      `;
    }
  };

  wrapper.addEventListener("mouseleave", handleLeave);
  wrapper.addEventListener("mousemove", handleMove);
});
