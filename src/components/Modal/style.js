import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 1022;
`;

export const ModalContainer = styled.div`
  margin-top: 200px;
  display: inline-block;
  width: 440px;
  background: white;
  border: 1px solid black;
  z-index: 1012;
  position: relative;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  right: 10px;
  top: 6px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;
