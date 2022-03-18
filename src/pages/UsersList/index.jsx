/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamCard from 'components/TeamCard';

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
  currentTeam: 1,

  team: [
    {
      idx: 1,
      team_id: 1,
      name: 'team1 소개글',
    },
    {
      idx: 2,
      team_id: 2,
      name: 'team2 소개글',
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
function Tabs({ setTeam, setType, categories }) {
  // const { categories } = teamElement;
  function tempfunction(event, name, team) {
    if (name === '읽은목록') {
      setType('read');
    } else if (name === '좋아하는 목록') {
      setType('like');
    }
  }

  // console.log(categories);
  return (
    <ul>
      {categories.map((category, idx) => (
        <li key={idx}>
          <button onClick={(event) => tempfunction(event, category.name)}>{category.name}</button>
        </li>
      ))}
    </ul>
  );
}
function Articles({ setArticles, type, currentArticles, team }) {
  const { teamArray } = useSelector((state) => state.team);
  const [teamList, setTeamList] = useState(teamArray);
  const { team_id, name, idx } = teamInfo;
  const { allArticles } = teamElement;
  const category = this.categories.find(
    category => category.id === team.team_id
  );
  setArticles(team.name);

  return (
    <ul>
      {type === 'read' ? (
        <li>
        {teamList.length !== 0 &&
          teamList.map((teamElement, idx) => (
            <TeamCard key={uuid()} teamInfo={{ ...teamElement, idx }} />
          ))}
        </li>
      ) : (
        <li>???</li>
      )}
    </ul>
  );
}

function UsersList() {
  const [type, setType] = useState('read');
  // const [read, setRead] = useState(false);
  // const [like_cnt, setLikecnt] = useState(false);
  const [currentArticles, setArticles] = useState('읽은목록');
  // const { currentArticles, currentCategory } = teamElement;
  const { categories, articles } = teamElement;
  const [currentTeam, setTeam] = useState(1);
  console.log(type);
  return (
    <div className="App">
      <Tabs setType={setType} categories={categories} />
      <Articles type={type} allArticles={currentArticles} setArticles={setArticles} />
    </div>
  );
}

export default UsersList;
