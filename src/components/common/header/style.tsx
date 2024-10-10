import { styled } from 'styled-components';
import { theme } from '../../../styles/theme';

export const Wrapper = styled.div`
  margin: 0;
`;

export const Content = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  position: fixed;
  height: 70px;
  width: 100%;
  background: white;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const Menu = styled.div`
  flex-grow: 1;
  display: flex;

  img {
    width: 30px;
    height: auto;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  flex-grow: 1;
  display: flex;
  font-size: 30px;
  color: ${theme.colors.Blue4};
`;

export const Search = styled.input`
  flex-grow: 10;

  padding: 2px 10px;
  height: 30px;
  background: white;
  border: 1px solid ${theme.colors.Gray6};
  border-radius: 3px;
  outline: none;
  color: ${theme.colors.Gray8};
  font-size: 20px;
`;

export const BtnGroup = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: end;

  button {
    padding: 4px 12px;
    height: 36px;
    font-size: 20px;
    color: ${theme.colors.Blue4};
    border: 1px solid ${theme.colors.Blue4};
    border-radius: 2px;
    background-color: white;

    &:hover {
      background-color: ${theme.colors.Blue4};
      color: white;
    }

    &:active {
      background-color: ${theme.colors.Blue9};
      color: white;
    }
  }
`;

export const Login = styled.button`
  margin-right: 10px;
`;

export const SignUp = styled.button``;
