import React from 'react';
import styled from 'styled-components';
import HeaderLinks from './HeaderLinks';
import HeaderLogo from './HeaderLogo';

const HeaderWrapper = styled.header`
  font-family: ${(props) => props.theme.fontFamilyHeading};
  font-weight: bold;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 40px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <HeaderLinks />
    </HeaderWrapper>
  );
}
