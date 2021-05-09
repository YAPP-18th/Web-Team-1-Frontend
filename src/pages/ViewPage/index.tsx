import React, { useEffect, useRef, useState } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import './Style/style.css';

const StyledViewPage = styled.div`
  width: 1000px;
  background-color: white;
  padding: 20px;
`;

const ViewPage = (): JSX.Element => {
  const viewerRef = useRef<Viewer>(null);
  const [value] = useState('<p>hello~</p>');
  useEffect(() => {
    if (viewerRef.current !== null) {
      const content = localStorage.getItem('content');
      if (content) {
        viewerRef.current.getInstance().setMarkdown(content);
      }
    }
  }, []);

  return (
    <StyledViewPage>
      <Viewer initialValue={value} ref={viewerRef} />
    </StyledViewPage>
  );
};

export default ViewPage;
