import styled from "styled-components";
import { useState } from "react";
import Logo from "./components/Logo";
import Conteudo from "./components/Conteudo";
import Footer from "./components/Footer";

function App() {
  const [pergAbertas, setPergAbertas] = useState([]);
  const [contador, setContador] = useState(0);

  return (
    <ContainerApp>
      <Logo />
      <Conteudo
        pergAbertas={pergAbertas}
        setPergAbertas={setPergAbertas}
        contador={contador}
        setContador={setContador}
      />
      <Footer contador={contador} />
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.div`
  width: 375px;
  height: 667px;
  background-color: #fb6b6b;
  padding-top: 42px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
