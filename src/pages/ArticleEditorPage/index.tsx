import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import TitleInput from '#components/ArticleEditor/TitleInput';
import '@toast-ui/editor/dist/toastui-editor.css';

const StyledArticleCard = styled.div`
  background-color: #fefefe;
  box-shadow: 0px 5px 20px rgba(205, 204, 198, 0.25);
  border-radius: 29px;
  padding: 56px 200px 64px 100px;
  margin: 0 0 100px 0;
  height: auto;
  width: 1128px;
`;

const StyledViewer = styled.div`
  height: fit-content;

  & .tui-editor-contents {
    font-family: RIDIBatang;
    font-style: normal;
    font-weight: normal;
    line-height: 200%;
    letter-spacing: -0.04em;

    color: #666666;
  }

  & .tui-editor-contents *:not(table) {
    line-height: 200%;
    font-size: 18px;
  }

  & .tui-editor-defaultUI {
    border: none;
  }
`;

const ArticleEditorPage = () => {
  const editorRef = useRef<Editor | null>(null);
  const titleRef = useRef<string | null>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    titleRef.current = e.target.value;
  };

  useEffect(() => {
    if (editorRef.current !== null) {
      editorRef.current
        .getInstance()
        .setHtml(
          `<table class="custom"><thead><tr><th><br></th><th><br></th></tr></thead><tbody><tr><td><br><br><br><br><br><br><br></td><td><br><br><br><br><br><br><br></td></tr><tr><td><br><br><br><br><br><br><br></td><td><br><br><br><br><br><br><br></td></tr></tbody></table>`,
        );
    }
  }, []);

  return (
    <StyledArticleCard>
      <TitleInput onChange={onChange} />
      <StyledViewer>
        <Editor
          previewStyle="vertical"
          height="auto"
          initialEditType="wysiwyg"
          useCommandShortcut
          ref={editorRef}
          hideModeSwitch
        />
      </StyledViewer>
    </StyledArticleCard>
  );
};

export default ArticleEditorPage;
