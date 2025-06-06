import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`text-white font-semibold ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
