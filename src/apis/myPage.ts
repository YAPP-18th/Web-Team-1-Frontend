import { tokenInstance } from '#apis/common';

export const getLists = () => {
  return tokenInstance.get('/lists');
};
