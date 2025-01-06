import css from './Button.module.css';

const Button = ({ title, onClick = () => {}, className = '', ...props }) => {
  return (
    <button className={`${css.btn} ${className}`} onClick={onClick} {...props}>
      {title}
    </button>
  );
};

export default Button;
