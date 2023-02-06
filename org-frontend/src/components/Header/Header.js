import styled from "styled-components";
import MenuIcon from "../../components/Icons/MenuIcon";
import PersonIcon from "../../components/Icons/PersonIcon";
import smallLogo from "../../assets/smallLogo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [showSideBar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  function handleSideBar() {
    setShowSidebar(!showSideBar);
  }

  return (
    <>
      <Wrapper>
        <Logo onClick={() => navigate("/home")}>
          <img src={smallLogo} alt={"MenuLogo"} />
        </Logo>
        <ProfilePic onClick={() => navigate("/profile")}>
          <PersonIcon
            iconProps={{
              color: "#FFFFFF",
              className: "global-class-name",
              size: "50px",
            }}
          />
        </ProfilePic>
        <Menu onClick={handleSideBar}>
          <MenuIcon
            iconProps={{
              color: "#FFFFFF",
              className: "global-class-name",
              size: "50px",
            }}
          />
        </Menu>
      </Wrapper>
      {showSideBar ? (
        <BlurScreen onClick={handleSideBar} visible={showSideBar}></BlurScreen>
      ) : (
        <></>
      )}
      <Sidebar visible={showSideBar}>
        <LogoContainer visible={showSideBar}>
          <img src={smallLogo} alt={"SidebarLogo"} />
          <h1>ORG.</h1>
        </LogoContainer>
        <div>asdas</div>
        <div>ssssss</div>
      </Sidebar>
    </>
  );
}

const Wrapper = styled.div`
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #040404;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${(props) => (props.visible === true ? "0.5" : "1")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > img {
    width: 100px;
    height: 100px;
  }
`;

const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 4rem 0 0 0;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100px;
  height: 100px;
  align-items: center;
  cursor: pointer;
`;

const Sidebar = styled.div`
  height: 100vh;
  width: ${(props) => (props.visible === true ? "80vw" : "0vw")};
  background-color: #040404;
  z-index: ${(props) => (props.visible === true ? "3" : "0")};
  position: fixed;
  top: 0;
  right: 0;
  transition: all 0.2s linear;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const BlurScreen = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 2;
  right: 0;
  bottom: 0;
  background-color: #00000077;
  left: 0;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    width: 6rem;
    height: 6rem;
  }
  h1 {
    font-family: "Lexend Deca";
    font-weight: 300;
    font-size: 2rem;
    line-height: 43px;
    color: #ffffff;
  }
`;
