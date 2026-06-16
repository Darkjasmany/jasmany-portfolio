interface Props {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export default function CarouselDots({ total, current, onChange }: Props) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`
            h-2.5
            rounded-full
            transition-all
            duration-300

            ${i === current ? "bg-[var(--accent)] w-8" : "bg-[var(--border)] w-2.5"}
          `}
        />
      ))}
    </div>
  );
}
