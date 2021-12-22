import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Info from '../Components/Info';
import { defaultQuery } from '../Util';

const listitems = [
  'We find the 500 top posts from the past year for a subreddit.',
  'The data is visualized in a heatmap grouped by weekday and hour of the day.',
  'See immediately when to submit your reddit post.',
];

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
      <Link
        style={{ margin: '40px 0px' }}
        to={`/search/javascript${defaultQuery}`}
      >
        <StyledButton>SHOW ME THE BEST TIME</StyledButton>
      </Link>
      <SubStyledTitle>r/javascript</SubStyledTitle>
      <Link
        style={{ width: '70%', margin: '30px 0px 40px' }}
        to={`/search/javascript${defaultQuery}`}
      >
        <StyledIMG src="/table.png" alt="table" />
      </Link>
      <Info heading="About" id="About">
        {listitems.map((item) => (
          <li key={uuidv4()}>{item}</li>
        ))}
      </Info>
      <Info heading="How it works" id="How-it-works">
        This app was created during a course on profy.dev with the goal to
        implement a pixel-perfect real-world application with professional
        workflows and tools like Kanban, Asana, Zeplin, GitHub, pull requests
        and code reviews.
        {' '}
        <a href="https://profy.dev/employers">
          Click here for more information.
        </a>
      </Info>
    </StyledHome>
  );
}
