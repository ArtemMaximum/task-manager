import React from 'react';
import PropTypes from 'prop-types'

import classNames from 'classnames';
import except from 'except';

const baseClass = 'btn';

export const Button = ({ children, className, type, size }) => {
  const omit = Object.keys(Button.propTypes);
  const other = except(this.props, omit.push('className'));
  
  let buttonClassNames = classNames(className, baseClass, {
    [`${baseClass}--size-${size}`]: size
  });
  
  if (type === 'link') {
    return (
      <a className={buttonClassNames} {...other}>{children}</a>
    );
  }
  
  return (
    <button type={type} className={buttonClassNames} {...other}>{children}</button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['link', 'button', 'submit', 'reset']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'default']),
  children: PropTypes.node.isRequired
}