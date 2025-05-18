type AnimatedHeadingProps = {
  children: React.ReactNode;
  animatedWords?: string[];
};

export default function AnimatedHeading({ children, animatedWords }: AnimatedHeadingProps) {
  if (typeof children === "string") {
    const words = children.split(" ");
    return (
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
        {words.map((word, i) => (
          <span 
            key={i} 
            className={animatedWords && animatedWords.includes(word) ? "gradient-hero shimmer" : ""}
          >
            {word}
            {i !== words.length - 1 && " "}
          </span>
        ))}
      </h1>
    );
  }

  return (
    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
      {children}
    </h1>
  );
}