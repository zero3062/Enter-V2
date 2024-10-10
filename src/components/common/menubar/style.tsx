import { styled } from 'styled-components';
import { theme } from '../../../styles/theme';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${theme.colors.Gray4};
  opacity: 0.4;
`;

export const Content = styled.div`
  position: absolute;
  background: white;
  height: 100%;
  width: 25%;
`;
