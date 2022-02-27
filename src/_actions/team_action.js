// import axios from 'axios';
import { mockTeam, mockTeams } from 'data/mock';
import { FETCH_MORE_TEAM_ARR, GET_TEAM_DETAIL, GET_TEAM__ARR } from '_types/teamTypes';

const fakeFetch = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 100);
  });

export function getTeamDetail(dataTosubmit) {
  // const request = axios.post('../data/team.json', dataTosubmit).then((response) => response.data);
  // console.log(request);
  const request = mockTeam;
  return {
    // request변수로 받은 data를 reducer로 넘겨주기
    type: GET_TEAM_DETAIL,
    payload: request,
  };
}

export async function getTeamArr(count) {
  // const request = axios.post('../data/team.json', dataTosubmit).then((response) => response.data);
  // console.log(request);
  // let request = [];
  await fakeFetch();
  console.log('getTeamArr', count);
  return {
    type: GET_TEAM__ARR,
    payload: mockTeams,
  };
}

export async function fetchMoreTeamArr(count) {
  return {
    type: FETCH_MORE_TEAM_ARR,
    payload: mockTeams,
  };
}
