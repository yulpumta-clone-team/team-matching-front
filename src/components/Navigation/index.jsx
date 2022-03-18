import React from 'react';
import { useCookies } from 'react-cookie';

import { useSelector } from 'react-redux';
import LoginNav from './LoginNav';
import NonLoginNav from './NonLoginNav';
import { NavWrapper } from './style';

function Navigation() {
  const [cookies] = useCookies(['token']);
  const { myData } = useSelector((state) => state.user);
  const token = cookies?.token || null;
  return <NavWrapper>{myData ? <LoginNav myData={myData} /> : <NonLoginNav />}</NavWrapper>;
}

export default Navigation;
