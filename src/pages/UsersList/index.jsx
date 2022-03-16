/* eslint-disable camelcase */
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const teamElement = {
  user_id: 123123123,
  team_id: 1,
  name: '코넥트',
  session: '희망기간',
  img: 'string',
  read: 0,
  comment_cnt: 0,
  like_cnt: 0,
  allArticles: [],
  currentCategory: '읽은목록',
  currentArticles: [],

  team: [
    {
      team_id: 1,
      article: 'team1 소개글',
    },
    {
      team_id: 2,
      article: 'team2 소개글',
    },
  ],

  categories: [
    {
      id: 1,
      name: '읽은목록',
    },
    {
      id: 2,
      name: '좋아하는 목록',
    },
  ],
};
function Tabs() {
  const { categories } = teamElement;
  return (
    <ul>
      <li key={categories.id}>
        <button onClick={(event) => useChangecurrentcategory(event, categories.name)}>{categories.name}</button>
      </li>
    </ul>
  );
}
function Articles() {
  const { categories, allArticles, currentArticles } = teamElement;

  return (
    <div key={categories.id}>
      <small>team #{categories.id}</small>
      <div>{allArticles}</div>
    </div>
  );
}

function useChangecurrentcategory(name) {
  const { categories, team } = teamElement;
  const { allArticles } = teamElement;
  const [currentCategory, setCategory] = useState(teamElement);
  const [currentArticles, setArticle] = useState(teamElement);
  // currentCategory = categories.name;
  // currentArticles = team.article;
  setCategory(categories.name);
  setArticle(team.name);
}

function UsersList() {
  // const [state, setState] = useState(state);
  const [read, setRead] = useState(false);
  const [like_cnt, setLikecnt] = useState(false);
  const { currentArticles, currentCategory } = teamElement;
  const { categories } = teamElement;

  const onRead = (e) => {
    setRead(true);
    console(read);
  };
  const onLike = (e) => {
    setLikecnt(true);
    console(like_cnt);
  };
  return (
    <div className="App">
      {/* <Tabs
        categories={categories}
        currentCategory={currentCategory}
        useChangeCurrentCategory={useChangecurrentcategory}
      />
      <Articles allArticles={currentArticles} /> */}
    </div>
  );
}

export default UsersList;
