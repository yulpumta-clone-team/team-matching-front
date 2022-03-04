import axios from 'axios';
import { GET_TEAM_DETAIL, GET_TEAM__ARR } from '_types/teamTypes';

export async function getTeamDetail(dataTosubmit) {
  console.log('TeamDetail ID: ', dataTosubmit);
  const { data } = await axios.get('../_mockData/team.json').then((response) => response.data);
  return {
    type: GET_TEAM_DETAIL,
    payload: data,
  };
}

export async function getTeamArr(count) {
  console.log('TeamBoard page count: ', count);
  const { data } = await axios.get('../_mockData/teams.json').then((response) => response.data);
  return {
    type: GET_TEAM__ARR,
    payload: data,
  };
}
