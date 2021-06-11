import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

export interface ImageProps {
  src: string;
}

interface ProfileImageFile {
  file: File | null;
  url: string;
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

const InputBox = styled(Box)`
  background-color: #dddddd;
`;

const ImageDrop = () => {
  const [image, setImage] = useState<ProfileImageFile>({
    file: null,
    url: '',
  });
  const { getRootProps, getInputProps } = useDropzone({
    accept: ['.png', '.jpeg', '.jpg'],
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setImage({
        file: acceptedFiles[0],
        url: URL.createObjectURL(acceptedFiles[0]),
      });
      /* eslint-disable no-console */
      // console.log(acceptedFiles);
    },
  });
  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      {image.file ? <ImageBox src={image.url} /> : <InputBox />}
    </div>
  );
};

export default ImageDrop;
