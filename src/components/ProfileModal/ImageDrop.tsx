import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

export interface ImageProps {
  src: string;
}

const Box = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 16px;
`;

const ImageBox = styled(Box)<ImageProps>`
  background-image: url(${(props) => props.src});
  background-size: cover;
`;

interface Props {
  defaultImage: string;
  setImage: React.Dispatch<React.SetStateAction<null | File>>;
}

const ImageDrop = ({ defaultImage, setImage }: Props) => {
  const [preview, setPreview] = useState('');
  const { getRootProps, getInputProps } = useDropzone({
    accept: ['.png', '.jpeg', '.jpg'],
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0]);
      setPreview(URL.createObjectURL(acceptedFiles[0]));
    },
  });
  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      {preview ? <ImageBox src={preview} /> : <ImageBox src={defaultImage} />}
    </div>
  );
};

export default ImageDrop;
