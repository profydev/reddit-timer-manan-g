import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeaderLinks = styled(Link)`
  font-family: ${(props) => props.theme.fontFamilyPrimary};
  font-weight: normal;
  text-decoration: none;
  color: #636363;
  margin: 0 15px;
`;

const HeaderLinks = () => (
  <div>
    <StyledHeaderLinks to="/app">Search</StyledHeaderLinks>
    <StyledHeaderLinks to="/howitworks">How it works</StyledHeaderLinks>
    <StyledHeaderLinks to="/about">About</StyledHeaderLinks>
  </div>
);

export default HeaderLinks;
