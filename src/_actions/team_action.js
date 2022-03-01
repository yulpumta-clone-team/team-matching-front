// import axios from 'axios';
import { mockTeam, mockTeams } from 'data/mock';
import { GET_TEAM_DETAIL, GET_TEAM__ARR } from '_types/teamTypes';

export function getTeamDetail(dataTosubmit) {
  // const request = axios.post('../data/team.json', dataTosubmit).then((response) => response.data);
  // console.log(request);
  const request = mockTeam;
  console.log(request, 'a');
  return {
    // request변수로 받은 data를 reducer로 넘겨주기
    type: GET_TEAM_DETAIL,
    payload: request,
  };
}

export function getTeamArr(dataTosubmit) {
  // const request = axios.post('../data/team.json', dataTosubmit).then((response) => response.data);
  // console.log(request);
  const request = mockTeams;
  return {
    type: GET_TEAM__ARR,
    payload: request,
  };
}
