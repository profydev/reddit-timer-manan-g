import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { defaultQuery } from '../Util';

const StyledHeaderLinks = styled(Link)`
  font-family: ${(props) => props.theme.fontFamilyPrimary};
  font-weight: normal;
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
  margin: 0 15px;
  font-size: 16px;
`;

const HeaderLinks = () => (
  <div>
    <StyledHeaderLinks to={`/search/${defaultQuery}`}>
      Search
    </StyledHeaderLinks>
    <StyledHeaderLinks as="a" href="/#how-it-works">
      How it works
    </StyledHeaderLinks>
    <StyledHeaderLinks as="a" href="/#about">
      About
    </StyledHeaderLinks>
  </div>
);

export default HeaderLinks;
