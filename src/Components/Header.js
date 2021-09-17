import React from 'react';
import styled from 'styled-components';
import HeaderLinks from './HeaderLinks';
import HeaderLogo from './HeaderLogo';

const HeaderWrapper = styled.div`
font-family: ${(props) => (props.theme.fontFamilyHeading)};
font-weight: bold;
height: 100px;
/* background-color: antiquewhite; */
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 0 40px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <HeaderLinks />
    </HeaderWrapper>
  );
}
