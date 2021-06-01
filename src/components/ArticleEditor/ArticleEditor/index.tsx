import React from 'react';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import TitleInput from '#components/ArticleEditor/ArticleEditor/TitleInput';
import '@toast-ui/editor/dist/toastui-editor.css';
import TempSaveBtn from './TempSaveBtn';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editorRef: React.MutableRefObject<Editor | null>;
  onClick: () => void;
  initialValue: string;
}

const StyledArticleCard = styled.div`
  background-color: #fefefe;
  box-shadow: 0px 5px 20px rgba(205, 204, 198, 0.25);
  border-radius: 29px;
  padding: 56px 200px 64px 100px;
  margin: 0 0 100px 0;
  height: auto;
  width: 1128px;
  position: relative;
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

const ArticleEditor = ({ onChange, editorRef, onClick, initialValue }: Props) => {
  return (
    <StyledArticleCard>
      <TitleInput onChange={onChange} initialValue={initialValue} />
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
      <TempSaveBtn onClick={onClick} />
    </StyledArticleCard>
  );
};

export default ArticleEditor;
