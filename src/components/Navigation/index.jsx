import React from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import LoginNav from './LoginNav';
import NonLoginNav from './NonLoginNav';

function Navigation() {
  const [cookies] = useCookies(['token']);
  const { myData } = useSelector((state) => state.user);
  const token = cookies?.token || null;
  return <nav>{myData ? <LoginNav myData={myData} /> : <NonLoginNav />}</nav>;
}

export default Navigation;
