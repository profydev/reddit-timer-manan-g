import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledTitle = styled.div`
  font-family: bitter;
  font-weight: bold;
  font-size: 38px;
  text-align: center;
`;
const SubStyledTitle = styled.div`
  margin-top: 8px;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.color.text};
`;
const StyledButton = styled.button`
  background-color: ${(props) => props.theme.color.orange};
  color: ${(props) => props.theme.color.light};
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;

const StyledIMG = styled.img`
  width: 100%;
`;

export default function Home() {
  return (
    <StyledHome>
      <StyledTitle>No reactions to your reddit posts?</StyledTitle>
      <SubStyledTitle>
        Great timing, great results! Find the best time to post on your
        subreddit.
      </SubStyledTitle>
      <Link style={{ margin: '30px 0px' }} to="/search/javascript">
        <StyledButton>SHOW ME THE BEST TIME</StyledButton>
      </Link>
      <SubStyledTitle>r/javascript</SubStyledTitle>
      <Link
        style={{ width: '70%', margin: '30px 0px' }}
        to="/search/javascript"
      >
        <StyledIMG src="/table.png" alt="table" />
      </Link>
    </StyledHome>
  );
}
