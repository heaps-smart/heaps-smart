type AnimatedHeadingProps = {
  children: React.ReactNode;
};

export default function AnimatedHeading({ children }: AnimatedHeadingProps) {
  return (
    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 mb-4 gradient-hero">
      {children}
    </h1>
  );
}