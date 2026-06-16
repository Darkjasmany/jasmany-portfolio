interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function CarouselControls({ onPrev, onNext }: Props) {
  return (
    <>
      <button onClick={onPrev}>←</button>

      <button onClick={onNext}>→</button>
    </>
  );
}
