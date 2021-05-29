import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  height: 240px;
  margin-bottom: 16px;

  img {
    width: 200px;
    height: 200px;
    margin-right: 16px;
    border-radius: 50%;
  }

  .content {
    width: 50%;
    h2 {
      margin-bottom: 16px;
    }
    p {
      color: #666666;
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  padding: 32px 8px;
  margin-bottom: 24px;
  span {
    margin-right: 24px;
    font-size: 20px;
    &.bold {
      font-weight: bold;
    }
  }
`;
