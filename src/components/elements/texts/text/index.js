import cn from 'classnames';
import styles from './style.module.css';
import PropTypes from 'prop-types';
const Text = ({ tag, color, size, weight, className, children }) => {
  const Tag = tag || 'span';
  return (
    <Tag className={cn(styles.text, styles?.[color], styles?.[size], styles?.[weight], className)}>{children}</Tag>
  );
};
Text.propType = {
  tag: PropTypes.oneOf(['span', 'label']),
  color: PropTypes.oneOf(['white', 'black', 'grey', 'soft-grey', 'blue', 'dark-blue']),
  size: PropTypes.oneOf(['xs', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']),
  weight: PropTypes.oneOf([
    'thin',
    'extralight',
    'light',
    'normal',
    'medium',
    'semibold',
    'bold',
    'extrabold',
    'black',
  ]),
};
Text.defaultProps = {
  type: 'span',
  color: 'white',
  size: 'xs',
  weight: 'normal',
};
export default Text;
