import { useState } from "react";
import styled from "styled-components";
import Perguntas from "./Perguntas";

export default function Conteudo({
  pergAbertas,
  setPergAbertas,
  contador,
  setContador,
}) {
  return (
    <Overflow>
      <ConteudoContainer>
        <Perguntas
          pergAbertas={pergAbertas}
          setPergAbertas={setPergAbertas}
          contador={contador}
          setContador={setContador}
        />
      </ConteudoContainer>
    </Overflow>
  );
}

const ConteudoContainer = styled.div`
  width: 300px;
  align-items: center;
  height: 423px;
  box-sizing: border-box;
`;

const Overflow = styled.div`
  margin-top: 26px;
  overflow: scroll;
  overflow-x: hidden;
`;
