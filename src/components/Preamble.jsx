import React from 'react';
import PropTypes from 'prop-types';

const Preamble = ({ children }) => {
  return (
    <p
      css={{
        marginBottom: '0',
      }}
    >
      {children}
    </p>
  );
};

export default Preamble;

Preamble.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
