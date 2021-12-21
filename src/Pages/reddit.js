import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Reddit() {
  const params = useParams();
  const [query, setQuery] = useState(params ? params.query : 'javascript');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(
        'https://www.reddit.com/r/javascript/new.json',
      );
      console.log(result.data.data.children[0].data.title);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const controller = new AbortController();
    const runAsync = async () => {
      try {
        const result = await axios.get(
          'https://www.reddit.com/r/javascript/new.json',
          {
            signal: controller.signal,
          },
        );
        console.log(result.data.data.children[0].data.title);
      } catch (e) {
        console.log(e);
      }
    };
    runAsync();
    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div>
      reddit
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} />
      </form>
    </div>
  );
}

/*
"data": {
  "author_fullname": "t2_wjv56",
  "title": "Ember 4.0 released",
  "score": 4,
  "author": "ahmad_musaffa",
  "num_comments": 0,
  "permalink": "/r/javascript/comments/rl7hxx/ember_40_released/",
  "created_utc": 1640065506.0,
} */
