/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function AuthHOC({ SpecificComponent, option = true, adminRoute = null }) {
  // option: null => 아무나 출입 가능
  // option: true => 로그인 유저만
  // option: false => 로그인 하면 출입 불가능한 곳(회원가입 등...)
  function AuthenticationCheck() {
    const [cookies] = useCookies(['Authorization']);
    console.log(cookies);
    const token = cookies?.token || null;
    const navigate = useNavigate();
    useEffect(() => {
      if (!token) {
        if (option) {
          navigate('/login');
        }
      } else {
        // 로그인 한 상태
        navigate('/');
        if (option === false) {
          navigate('/');
        }
      }
    }, [navigate, token]);
    return <SpecificComponent />;
  }

  return AuthenticationCheck();
}
