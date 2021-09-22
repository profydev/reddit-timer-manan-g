import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeaderLogo = styled.img`
height: 36px;
width: 150px;
`;

const HeaderLogo = () => (
  <Link to="/">
    <StyledHeaderLogo src="/logo.svg" alt="logo" />
  </Link>
);

export default HeaderLogo;
