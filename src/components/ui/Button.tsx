interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "className"> {
  //nos attributs custom
  type: "reset" | "submit" | "button";
  main: boolean;
}

const Button: React.FC<ButtonProps> = ({ main, ...props }) => {
  return (
    <>
      {main ? (
        <button className="btn" {...props} />
      ) : (
        <div className="btn_secondary_container">
          <button className="btn_secondary" {...props} />
        </div>
      )}
    </>
  );
};

export default Button;
