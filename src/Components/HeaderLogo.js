import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeaderLogo = styled.img`
  height: 36px;
  width: 150px;
  @media only screen and (max-width: 768px) {
    margin: 15px auto;
  }
`;

const HeaderLogo = () => (
  <Link to="/">
    <StyledHeaderLogo src="/logo.svg" alt="header-logo" />
  </Link>
);

export default HeaderLogo;
