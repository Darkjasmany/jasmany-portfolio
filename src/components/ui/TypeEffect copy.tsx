import { useState, useEffect, useCallback } from "react";
import { copyWriting } from "../../data/copyWriting";

const strings = copyWriting.map(item => item.description);
const TYPING_SPEED = 60;
const DELETING_SPEED = 20;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 500;

const TypeEffect = () => {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentString = strings[stringIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      if (charIndex < currentString.length) {
        setDisplayText(currentString.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else {
        setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
        return;
      }
    } else {
      if (charIndex > 0) {
        setDisplayText(currentString.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else {
        setIsDeleting(false);
        setStringIndex(i => (i + 1) % strings.length);
        return;
      }
    }
  }, [charIndex, currentString, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <span className="notranslate">{displayText}</span>
  );
};

export default TypeEffect;
