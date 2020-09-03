import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const UpperHeadingTwo = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const UpperH2 = ({ children }) => <UpperHeadingTwo>{children}</UpperHeadingTwo>;

export default UpperH2;

UpperH2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
