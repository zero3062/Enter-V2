import { useState } from 'react';
import useBreakPoint from '../../../hooks/useBreakPoint';
import Menubar from '../menubar';
import {
  Wrapper,
  Content,
  Logo,
  Menu,
  Title,
  Search,
  BtnGroup,
  Login,
  SignUp,
} from './style';

const Header = () => {
  const { isMobile } = useBreakPoint();
  const [isMenu, setIsMenu] = useState(false);

  return (
    <Wrapper>
      <Content>
        <Logo>
          <Menu>
            <img
              src="./images/menu.png"
              alt="Menu"
              onClick={() => setIsMenu(true)}
            />
          </Menu>
          <Title>Enter</Title>
        </Logo>
        <Search placeholder="Search" />
        {!isMobile && (
          <BtnGroup>
            <Login>Login</Login>
            <SignUp>Sign Up</SignUp>
          </BtnGroup>
        )}
      </Content>
      {isMenu && <Menubar handleClose={() => setIsMenu(false)} />}
    </Wrapper>
  );
};

export default Header;
