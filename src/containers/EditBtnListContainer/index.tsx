import React from 'react';
import { useDispatch } from 'react-redux';
import { alertActions, AlertState } from 'slices/alertSlice';
import { useHistory } from 'react-router';
import EditBtnList from '#components/ArticleView/ArticleDetail/EditBtnList';
import { deleteArticle } from '#apis/articleViewApi';

/* eslint-disable no-console */

interface Props {
  id: string;
}

const EditBtnListContainer = ({ id }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickDelete = () => {
    const result = deleteArticle(id);
    if (result) {
      history.push('/');
      const reduxData: AlertState = {
        isShow: true,
        message: '삭제가 완료되었습니다 🤣',
      };
      dispatch(alertActions.setAlert(reduxData));
    }
  };

  const onClickEdit = () => {
    console.log('edit');
  };

  return (
    <>
      <EditBtnList onClickDelete={onClickDelete} onClickEdit={onClickEdit} />
    </>
  );
};

export default EditBtnListContainer;
