import instance from '#apis/common';

export const getLists = () => {
  return instance.get('/lists');
};
