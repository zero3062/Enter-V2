import { Background, Content, Wrapper } from './style';

interface MenubarINF {
  handleClose: () => void;
}

const Menubar = ({ handleClose }: MenubarINF) => {
  return (
    <Wrapper>
      <Background onClick={() => handleClose()} />
      <Content>
        <div>asdf</div>
      </Content>
    </Wrapper>
  );
};

export default Menubar;
