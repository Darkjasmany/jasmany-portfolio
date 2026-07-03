import Typewriter from "typewriter-effect";
import { copyWriting } from "../../data/copyWriting";

const TypeEffect = () => {
  const typewriterStrings = copyWriting.map(item => item.description);

  return (
    <div className="notranslate">
      <Typewriter
        options={{
          strings: typewriterStrings,
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default TypeEffect;
