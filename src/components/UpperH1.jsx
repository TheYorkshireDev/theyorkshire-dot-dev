import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const UpperHeadingOne = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
`;

const UpperH1 = ({ children }) => <UpperHeadingOne>{children}</UpperHeadingOne>;

export default UpperH1;

UpperH1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
