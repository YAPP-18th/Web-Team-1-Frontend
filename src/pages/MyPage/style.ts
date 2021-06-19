import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  height: 240px;
  margin-bottom: 16px;
  font-family: Apple SD Gothic Neo;
  font-style: normal;

  img {
    width: 165px;
    height: 165px;
    margin-right: 16px;
    border-radius: 50%;
    object-fit: cover;
  }

  .content {
    padding-top: 15px;
    margin-left: 40px;
    width: 45%;

    .header {
      display: flex;
      align-items: baseline;
      h1 {
        margin: 0 11px 9px 0;
      }
      .edit-btn {
        cursor: pointer;
        background-color: transparent;
        border: none;
      }
    }

    h2.job {
      margin: 9px 0 24px;
      font-weight: 600;
      font-size: 24px;
      line-height: 24px;
      letter-spacing: -0.04em;
      color: #acaba5;
    }
    p {
      color: #666666;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.04em;
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
