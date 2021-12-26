import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Components/Input';
import Heatmap from '../Components/Heatmap';

const StyledTitle = styled.div`
  font-family: bitter;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

const StyledReddit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Reddit() {
  const [posts, setPosts] = useState([]);
  return (
    <StyledReddit>
      <StyledTitle>Find the best time for a subreddit</StyledTitle>
      <Input setPosts={setPosts} />
      <Heatmap posts={posts} />
    </StyledReddit>
  );
}
