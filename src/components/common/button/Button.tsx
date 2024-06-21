import { CSSProperties, ReactNode } from "react";

type Props = {
  children: string | ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
  onClick?: () => void;
};

const Button = ({
  children,
  className,
  type = "button",
  style,
  onClick,
}: Props) => {
  return (
    <button
      className={`relative inline-block overflow-hidden font-bold leading-[30px] cursor-pointer py-1 px-7 text-white border border-solid border-black rounded-[5px] bg-black uppercase font-xs flex justify-center items-center w-max tracking-[1px] transition-all duration-300 
              before:transition-all before:duration-300 before:absolute before:-left-full before:top-0 before:bottom-0 before:w-full before:bg-white hover:text-black hover:before:left-0 ${
                className && className
              }`}
      type={type}
      style={style}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
