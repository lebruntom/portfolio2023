interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "className"> {
  //nos attributs custom
  type: "reset" | "submit" | "button";
  main: boolean;
}

const Button: React.FC<ButtonProps> = ({ main, ...props }) => {
  return <button className={main ? "btn" : "btn_secondary"} {...props} />;
};

export default Button;
