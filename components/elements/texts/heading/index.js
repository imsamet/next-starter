import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Style from './style.module.css';

const Heading = ({ type, className, children }) => {
  const Tag = type || 'h2';
  return <Tag className={cn(Style.heading, Style[type], className)}>{children}</Tag>;
};

Heading.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node,
};

export default Heading;
