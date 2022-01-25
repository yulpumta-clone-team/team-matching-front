import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HOME, LOGIN, PROFILE, SIGN_UP, TEAM_BOARD, USER_BOARD } from 'utils/route';
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

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path={HOME} element={<Auth SpecificComponent={Main} option />} />
        <Route path={PROFILE} element={<Auth SpecificComponent={UserProfile} option />} />
        <Route path={USER_BOARD} element={<Auth SpecificComponent={UserBoard} option />} />
        <Route path={TEAM_BOARD} element={<Auth SpecificComponent={TeamBoard} option />} />
        <Route path={LOGIN} element={<Auth SpecificComponent={Login} option />} />
        <Route path={SIGN_UP} element={<Auth SpecificComponent={SignUp} option />} />
        <Route
          path={`${USER_BOARD}/:userId`}
          element={<Auth SpecificComponent={UserPost} option />}
        />
        <Route
          path={`${TEAM_BOARD}/:teamId`}
          element={<Auth SpecificComponent={TeamPost} option />}
        />
        <Route path="/callback" component={Callback} />
      </Routes>
    </Router>
  );
}

export default App;
