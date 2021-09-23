import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FooterLogo from './FooterLogo';

const StyledFooter = styled('footer')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 40px;
`;

const StyledReactRouterLink = styled(Link)`
  font-family: ${(props) => props.theme.fontFamilyPrimary};
  font-weight: normal;
  font-size: 14px;
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
`;

const StyledAnchor = styled('a')`
  font-family: ${(props) => props.theme.fontFamilyPrimary};
  font-weight: normal;
  font-size: 14px;
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledAnchor href="https://profy.dev/employers">profy.dev</StyledAnchor>
      <FooterLogo />
      <StyledReactRouterLink to="/terms">Terms & Privacy</StyledReactRouterLink>
    </StyledFooter>
  );
}
