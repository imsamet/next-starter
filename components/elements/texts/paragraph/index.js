import cn from 'classnames';
import Style from './style.module.css';
import PropTypes from 'prop-types';
const Paragraph = ({ type = 'p1', className, children }) => {
  return <p className={cn(Style.paragraph, Style[type], className)}>{children}</p>;
};
Paragraph.propTypes = {
  type: PropTypes.oneOf(['p1', 'p2', 'p3']),
};
Paragraph.defaultProps = {
  type: 'p1',
};
export default Paragraph;
