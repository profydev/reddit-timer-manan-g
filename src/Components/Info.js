import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-family: bitter;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 15px;
`;

const StyledSection = styled.div`
  margin-bottom: 30px;
  width: 60%;
`;
const StyledPara = styled.p`
  color: ${(props) => props.theme.color.text};
`;

function Info({ children, heading, id }) {
  return (
    <StyledSection>
      <StyledHeading id={id}>{heading}</StyledHeading>
      <StyledPara>{children}</StyledPara>
    </StyledSection>
  );
}

Info.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Info;
