import { useState } from "react";
import styled from "styled-components";
import Botoes from "./Botoes";

export default function Perguntas({
  pergAbertas,
  setPergAbertas,
  contador,
  setContador,
}) {
  const cards = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão da linguagem JavaScript",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
  ];

  const [cardVirados, setCardVirados] = useState([]);
  const [cardRespondido, setCardRespondido] = useState([]);

  function onclick(i) {
    if (
      !cardRespondido.includes(`Pergunta ${i + 1} erro`) &&
      !cardRespondido.includes(`Pergunta ${i + 1} neutro`) &&
      !cardRespondido.includes(`Pergunta ${i + 1} zap`)
    ) {
      setPergAbertas([...pergAbertas, `Pergunta ${i + 1}`]);
      console.log(cardRespondido);
    }
  }

  function trocarImg(i) {
    if (cardRespondido.includes(`Pergunta ${i + 1} erro`)) {
      return "icone_erro.png";
    } else if (cardRespondido.includes(`Pergunta ${i + 1} neutro`)) {
      return "icone_quase.png";
    } else if (cardRespondido.includes(`Pergunta ${i + 1} zap`)) {
      return "icone_certo.png";
    }

    return "seta_play.png";
  }

  function testeImg(i) {
    if (cardRespondido.includes(`Pergunta ${i + 1} erro`)) {
      return "no-icon";
    } else if (cardRespondido.includes(`Pergunta ${i + 1} neutro`)) {
      return "partial-icon";
    } else if (cardRespondido.includes(`Pergunta ${i + 1} zap`)) {
      return "zap-icon";
    }

    return "play-btn";
  }

  return (
    <>
      {cards.map((card, index) => (
        <>
          <PerguntasContainer
            data-test="flashcard"
            index={index}
            pergAbertas={pergAbertas}
            cardRespondido={cardRespondido}
          >
            <p data-test="flashcard-text">Pergunta {index + 1}</p>
            <img
              data-test={testeImg(index)}
              src={`./assets/${trocarImg(index)}`}
              alt=""
              onClick={() => onclick(index)}
            />
          </PerguntasContainer>
          <FlashcardFrente
            data-test="flashcard"
            index={index}
            pergAbertas={pergAbertas}
            cardQuestion={card.question}
            cardVirados={cardVirados}
          >
            <p data-test="flashcard-text">{card.question}</p>
            <img
              data-test="turn-btn"
              src="./assets/seta_virar.png"
              alt=""
              onClick={() => setCardVirados([...cardVirados, card.question])}
            />
          </FlashcardFrente>
          <FlashcardVerso
            data-test="flashcard"
            cardVirados={cardVirados}
            cardQuestion={card.question}
          >
            <p data-test="flashcard-text">{card.answer}</p>
            <Botoes
              pergAbertas={pergAbertas}
              setPergAbertas={setPergAbertas}
              cardVirados={cardVirados}
              setCardVirados={setCardVirados}
              cardQuestion={card.question}
              index={index}
              cardRespondido={cardRespondido}
              setCardRespondido={setCardRespondido}
              contador={contador}
              setContador={setContador}
            />
          </FlashcardVerso>
        </>
      ))}
    </>
  );
}

const PerguntasContainer = styled.div`
  width: 100%;
  height: 65px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  justify-content: space-between;
  padding-right: 22px;
  padding-left: 15px;
  margin-top: 25px;
  box-sizing: border-box;
  font-weight: 700;
  font-family: "Recursive", sans-serif;
  display: ${(props) =>
    props.pergAbertas.includes(`Pergunta ${props.index + 1}`)
      ? "none"
      : "flex"};

  p {
    text-decoration: ${(props) =>
      props.cardRespondido.includes(`Pergunta ${props.index + 1} erro`) ||
      props.cardRespondido.includes(`Pergunta ${props.index + 1} neutro`) ||
      props.cardRespondido.includes(`Pergunta ${props.index + 1} zap`)
        ? "line-through"
        : "none"};

    color: ${(props) =>
      props.cardRespondido.includes(`Pergunta ${props.index + 1} erro`)
        ? "#FF3030"
        : props.cardRespondido.includes(`Pergunta ${props.index + 1} neutro`)
        ? "#FF922E"
        : props.cardRespondido.includes(`Pergunta ${props.index + 1} zap`)
        ? "#2FBE34"
        : "#333333"};
  }
`;

const FlashcardFrente = styled.div`
  width: 299px;
  height: 131px;
  background: #ffffd4;
  position: relative;
  font-family: "Recursive", sans-serif;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  display: ${(props) =>
    props.pergAbertas.includes(`Pergunta ${props.index + 1}`) &&
    !props.cardVirados.includes(props.cardQuestion)
      ? "flex"
      : "none"};

  img {
    width: 30px;
    height: 20px;
    position: absolute;
    bottom: 6px;
    right: 15px;
  }
`;

const FlashcardVerso = styled.div`
  width: 300px;
  height: 131px;
  background: #ffffd4;
  position: relative;
  font-family: "Recursive", sans-serif;
  font-size: 18px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-top: 24px;
  display: ${(props) =>
    props.cardVirados.includes(props.cardQuestion) ? "flex" : "none"};

  p {
    margin-left: 15.05px;
  }
`;
