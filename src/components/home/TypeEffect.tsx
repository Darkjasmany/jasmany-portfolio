import Typewriter from "typewriter-effect";

const TypeEffect = () => {
  return (
    <div className="notranslate">
      <Typewriter
        options={{
          strings: [
            "Full Stack Developer",
            "Construyendo sistemas reales",
            "Soluciones web escalables",
            "Código limpio y eficiente",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default TypeEffect;
