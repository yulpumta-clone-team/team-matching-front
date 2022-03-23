/* eslint-disable camelcase */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HOME,
  LOGIN,
  My_Post,
  New_Post,
  PROFILE,
  SIGN_UP,
  TEAM_BOARD,
  USERS_LIST,
  USER_BOARD,
} from 'utils/route';
import Auth from 'hoc/auth';
import Login from 'pages/Login';
import Main from 'pages/Main';
import SignUp from 'pages/SignUp';
import UserProfile from 'pages/UserProfile';
import UserBoard from 'pages/UserBoard';
import TeamBoard from 'pages/TeamBoard';
import UserPost from 'pages/UserPost';
import TeamPost from 'pages/TeamPost';
import Callback from 'pages/Callback';
import Navigation from 'components/Navigation';
import EditUserProfile from 'pages/EditUserProfile';
import EditTeamProfile from 'pages/EditTeamPost';
import UsersList from 'pages/UsersList';
import NewPost from 'pages/NewPost';
import MyPost from 'pages/MyPost';
import AppLayout from './style';

function App() {
  console.log(process.env.REACT_APP_SERVER_API);
  return (
    <Router>
      <AppLayout>
        <Navigation />
        <Routes>
          <Route path={HOME} element={<Auth SpecificComponent={Main} option={null} />} />
          <Route path={USER_BOARD} element={<Auth SpecificComponent={UserBoard} option={null} />} />
          <Route path={TEAM_BOARD} element={<Auth SpecificComponent={TeamBoard} option={null} />} />
          <Route path={PROFILE} element={<Auth SpecificComponent={UserProfile} option={null} />} />
          <Route path={LOGIN} element={<Auth SpecificComponent={Login} option={false} />} />
          <Route path={SIGN_UP} element={<Auth SpecificComponent={SignUp} option={false} />} />
          <Route path={USERS_LIST} element={<UsersList />} />
          <Route path={New_Post} element={<NewPost />} />
          <Route path={My_Post} element={<MyPost />} />
          <Route
            path={`${USER_BOARD}/:userId`}
            element={<Auth SpecificComponent={UserPost} option={null} />}
          />
          <Route
            path={`${TEAM_BOARD}/:teamId`}
            element={<Auth SpecificComponent={TeamPost} option={null} />}
          />
          <Route
            path={`${PROFILE}`}
            element={<Auth SpecificComponent={EditUserProfile} option={null} />}
          />
          <Route
            path={`${TEAM_BOARD}/:teamId/edit`}
            element={<Auth SpecificComponent={EditTeamProfile} option={null} />}
          />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
