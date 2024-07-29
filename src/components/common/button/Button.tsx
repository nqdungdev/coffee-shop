import { ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: string | ReactNode;
}

const Button = ({ ...props }: Props) => {
  const { className, children, ...rest } = props;
  return (
    <button
      className={`relative overflow-hidden font-bold leading-[30px] cursor-pointer py-1 px-7 text-white border border-solid border-black rounded-[5px] bg-black uppercase font-xs flex justify-center items-center w-max tracking-[1px] transition-all duration-300 
              before:transition-all before:duration-300 before:absolute before:-left-full before:top-0 before:bottom-0 before:w-full before:bg-white hover:text-black hover:before:left-0 ${className}`}
      {...rest}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
