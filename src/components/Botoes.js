import styled from "styled-components";

export default function Botoes({
  pergAbertas,
  setPergAbertas,
  cardVirados,
  setCardVirados,
  cardQuestion,
  index,
  cardRespondido,
  setCardRespondido,
  contador,
  setContador,
}) {
  function finalizarPerg() {
    const pergAbertasCopia = [...pergAbertas];
    const cardViradosCopia = [...cardVirados];

    pergAbertasCopia.splice(
      pergAbertasCopia.indexOf(`Pergunta ${index + 1}`),
      1
    );
    setPergAbertas(pergAbertasCopia);

    cardViradosCopia.splice(cardViradosCopia.indexOf(cardQuestion), 1);
    setCardVirados(cardViradosCopia);
    setContador(contador + 1);
  }

  function botaoErrado() {
    const cardRespondidoCopia = [
      ...cardRespondido,
      `Pergunta ${index + 1} erro`,
    ];
    setCardRespondido(cardRespondidoCopia);
  }

  function botaoNeutro() {
    const cardRespondidoCopia = [
      ...cardRespondido,
      `Pergunta ${index + 1} neutro`,
    ];
    setCardRespondido(cardRespondidoCopia);
  }

  function botaoZap() {
    const cardRespondidoCopia = [
      ...cardRespondido,
      `Pergunta ${index + 1} zap`,
    ];
    setCardRespondido(cardRespondidoCopia);
  }

  return (
    <BotoesContainer>
      <BotaoErrado
        data-test="no-btn"
        onClick={() => {
          finalizarPerg();
          botaoErrado();
        }}
      >
        <span>Não lembrei</span>
      </BotaoErrado>
      <BotaoNeutro
        data-test="partial-btn"
        onClick={() => {
          finalizarPerg();
          botaoNeutro();
        }}
      >
        <span>Quase não lembrei</span>
      </BotaoNeutro>
      <BotaoZap
        data-test="zap-btn"
        onClick={() => {
          finalizarPerg();
          botaoZap();
        }}
      >
        <span>Zap!</span>
      </BotaoZap>
    </BotoesContainer>
  );
}

// --------------------------------------------------------------------------

const BotoesContainer = styled.div`
  width: 271px;
  display: flex;

  justify-content: space-between;
  margin-left: 17px;
  position: absolute;
  top: 83.83px;
`;

const BotaoErrado = styled.div`
  width: 85.17px;
  height: 37.17px;
  background: #ff3030;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  span {
    width: 50px;
  }
`;

const BotaoNeutro = styled.div`
  width: 85.17px;
  height: 37.17px;
  font-size: 12px;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #ff922e;
  color: #ffffff;
`;

const BotaoZap = styled.div`
  width: 85.17px;
  height: 37.17px;
  font-size: 12px;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #2fbe34;
  color: #ffffff;
`;
