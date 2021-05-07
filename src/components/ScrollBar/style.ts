import styled from 'styled-components';

interface Props {
  percent: number;
}

export const ScrollBarBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 8px;
  top: 0px;
  left: 0px;
  background-color: #cdccc6;
`;

export const ScrollBarContent = styled(ScrollBarBackground).attrs<Props>(({ percent }) => ({
  style: {
    width: `${percent}%`,
  },
}))<Props>`
  background-color: #8f7cda;
`;
