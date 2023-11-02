import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './style.module.css';

const Heading = ({ colored, type, className, children }) => {
  const Tag = type || 'h2';
  const ColoredItem = ({ text }) => <span className={styles.colored}>{text}</span>;
  const text = colored
    ? children
        .replace(colored, `${colored}xxx${colored}`)
        .split(colored)
        .map(i => (i === 'xxx' ? <ColoredItem text={colored} /> : i))
    : children;
  return <Tag className={cn(styles.heading, styles[type], className)}>{text}</Tag>;
};

Heading.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node,
  colored: PropTypes.string,
};

export default Heading;
