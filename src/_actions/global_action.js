import { CATCH_ERR, CLOSE_MODAL, OPEN_MODAL, RESET_ERR } from '_types/globalTypes';

export const openModal = (content) => {
  return {
    type: OPEN_MODAL,
    payload: content,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const catchError = (error) => {
  console.log(error);
  return {
    type: CATCH_ERR,
    payload: error.message,
  };
};

export const resetError = () => {
  return {
    type: RESET_ERR,
  };
};
