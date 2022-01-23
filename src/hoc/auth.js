import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

export default function AuthHOC({
  SpecificComponent,
  option,
  adminRoute = null,
}) {
  // option: null => 아무나 출입 가능
  // option: true => 로그인 유저만
  // option: false => 로그인 하면 출입 불가능한 곳(회원가입 등...)
  // adminRoute
  // 1.default: null
  // 2.
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        const { isAdmin, isAuth } = response.payload;
        // 로그인 하지 않은 상태
        // console.log(user_id, isAdmin, isAuth, role);
        if (!isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !isAdmin) {
            props.history.push("/");
          } else {
            // 로그인한 유저가 출입불가능한 곳으로 들어갈때
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }

  return AuthenticationCheck();
}
