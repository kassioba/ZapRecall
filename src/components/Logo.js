import styled from "styled-components";

export default function Logo() {
  return (
    <LogoContainer>
      <img src="./assets/logo.png" alt="" />
      <span>ZapRecall</span>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: "Righteous", cursive;

  img {
    width: 52px;
    height: 60px;
  }
  span {
    width: 203.17px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    color: #ffffff;
  }
`;
