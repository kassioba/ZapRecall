import styled from "styled-components";

export default function Footer({ contador }) {
  return <FooterContainer>{contador}/4 CONCLUÍDOS</FooterContainer>;
}

const FooterContainer = styled.div`
  width: 375px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  font-family: "Recursive", sans-serif;
  font-size: 18px;
  color: #333333;
  position: absolute;
  bottom: 0;
`;
