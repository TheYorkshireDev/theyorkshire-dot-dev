import React from 'react';
import PropTypes from 'prop-types';

const Callout = ({ variant = 'info', excludePrefix, children }) => {
  const variantStyles = {
    info: {
      borderLeft: '5px solid #2980b9',
      backgroundColor: '#daeaf3',
    },
    warning: {
      borderLeft: '5px solid #f1c40f',
      backgroundColor: '#fdf5d4',
    },
    important: {
      borderLeft: '5px solid #c0392b',
      backgroundColor: '#f4dddb',
    },
  };
  return (
    <aside
      css={{
        padding: '1rem',
        margin: '1.5rem auto',
        ...variantStyles[variant],
      }}
    >
      <strong>{excludePrefix ? '' : `${variant.toUpperCase()}: `}</strong>
      {children}
    </aside>
  );
};

export default Callout;

Callout.propTypes = {
  variant: PropTypes.string,
  excludePrefix: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
