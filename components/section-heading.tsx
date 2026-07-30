type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="font-sans text-xs uppercase tracking-proposal text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
        {description}
      </p>
    </div>
  );
}
