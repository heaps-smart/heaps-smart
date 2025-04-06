type Props = {
  children?: React.ReactNode;
  className?: string;
  flex?: boolean;
};

const Container = ({ children, className = "", flex = false }: Props) => {
  return (
    <div className={`container mx-auto px-5 ${flex ? "flex flex-col gap-4" : ""} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
export type Post