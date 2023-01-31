interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "className"> {
  //nos attributs custom
  type: "reset" | "submit" | "button";
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <button className="btn" {...props} />;
};

export default Button;
