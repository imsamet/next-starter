import styles from './style.module.css';
import cn from 'classnames';
const Button = ({ type, children, className, ...props }) => {
  return (
    <button className={cn(styles.button, styles[type], className)} {...props}>
      {children}
    </button>
  );
};
export default Button;
