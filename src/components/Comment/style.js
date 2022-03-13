/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CommentLi = styled.li`
  margin-bottom: 10px;
  display: flex;
  img {
    width: 30px;
    height: 30px;
  }
  div {
    display: flex;
    flex-direction: column;
    > h3 {
      font-weight: bolder;
      margin-bottom: 5px;
    }
    > span {
      padding-bottom: 5px;
    }
    > span:last-child {
      color: #606060;
      font-size: 12px;
    }
  }
`;

export const ButtonContainer = styled.div``;
