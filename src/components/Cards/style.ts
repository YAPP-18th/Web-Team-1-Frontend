import styled from 'styled-components';
import color from '#styles/color';

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 296px);
  gap: 16px 16px;
  list-style: none;
`;

export const CardItem = styled.li`
  font-family: Apple SD Gothic Neo;
  font-weight: 400;
  padding: 24px 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 5px 20px 0px #cdccc640;
`;

export const CardLink = styled.a`
  text-decoration: none;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  color: #333333;
  line-height: 20px;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Category = styled.span<{ category: string }>`
  display: block;
  font-size: 12px;
  color: #666666;
  line-height: 14.4px;
  padding: 10px 0 16px 0;
  &::before {
    content: '';
    display: inline-block;
    margin-right: 4px;
    margin-bottom: 0.5px;
    height: 8px;
    width: 8px;
    background-color: ${(props) => {
      const categories: { [key: string]: string } = {
        marketing: 'red',
        design: 'blue',
        plan: 'purple',
        develop: 'yellow',
      };
      return color[categories[props.category]];
    }};
    border-radius: 50%;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Helvetica Neue;
  font-size: 12px;
  letter-spacing: -0.04em;
  color: #666666;
  padding-bottom: 16px;
  border-bottom: 1px solid #eeeeee;
  & .comment-and-scrap,
  div {
    display: flex;
    align-items: center;
    &:first-of-type {
      margin-right: 7.5px;
    }
  }
`;

export const Content = styled.section`
  font-size: 15px;
  color: #666666;
  line-height: 24px;
  margin-bottom: 22px;
  letter-spacing: -0.04em;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;

  height: 120px;
  text-align: left;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const User = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.04em;
  display: flex;
  align-items: center;
  padding-top: 19px;
`;

export const UserPhoto = styled.figure<{ userPhoto: string }>`
  background-image: ${(props) => `url(${props.userPhoto})`};
  background-color: #dddddd;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 150%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 4px;
`;

export const CreatedAt = styled.div`
  margin-left: auto;
  font-family: Helvetica Neue;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.01em;
  color: #999999;
`;
