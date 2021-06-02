import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { alertActions, AlertState } from 'slices/alertSlice';
import { useHistory } from 'react-router';
import EditBtnList from '#components/ArticleView/ArticleDetail/EditBtnList';
import { deleteArticle } from '#apis/articleViewApi';
import ConfirmModalContainer from '#containers/ConfirmModalContainer';

/* eslint-disable no-console */

interface Props {
  id: string;
}

const EditBtnListContainer = ({ id }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const callApi = async () => {
    const result = await deleteArticle(id);
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
    // 여기서 말고 edit 페이지에서 확인하기, 값 없으면 정상적이지 않은 접근
    // const { category, title, contents, index } = useAppSelector((state) => state.articleViewReducer);
    history.push('/articleUpdate');
  };

  return (
    <>
      <EditBtnList onClickDelete={toggle} onClickEdit={onClickEdit} />
      {modal && <ConfirmModalContainer type="delete" callApi={callApi} toggle={toggle} />}
    </>
  );
};

export default EditBtnListContainer;
