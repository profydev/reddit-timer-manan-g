import React from 'react';
import styled from 'styled-components';
import HeaderLinks from './HeaderLinks';
import HeaderLogo from './HeaderLogo';

const HeaderWrapper = styled.div`
font-family: ${(props) => (props.theme.fontFamilySecondary)};
font-weight: bold;
height: 45px;
display: flex;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <HeaderLinks>
        Search
      </HeaderLinks>
      <HeaderLinks>
        How it works
      </HeaderLinks>
      <HeaderLinks>
        About
      </HeaderLinks>
    </HeaderWrapper>
  );
}
