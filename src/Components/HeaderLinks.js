import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeaderLinks = styled.div`

`;

const HeaderLinks = ({ children }) => (
  <StyledHeaderLinks>
    {children}
  </StyledHeaderLinks>
);

HeaderLinks.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderLinks;
