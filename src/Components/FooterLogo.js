import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogo = styled('img')``;

export default function FooterLogo() {
  return (
    <Link to="/">
      <StyledLogo src="/sign.svg" alt="footer-logo" />
    </Link>
  );
}
