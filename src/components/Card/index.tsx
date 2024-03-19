import React, { useState } from "react";
import { Container,HeartIcon,HeartFillIcon,HeaderCard } from "./styles";

const HearterInteration = () => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div onClick={toggleLike}>
      {isLiked ? (
        <HeartFillIcon/> // Ícone de coração preenchido quando ativado
      ) : (
        <HeartIcon/> // Ícone de coração vazio quando desativado
      )}
    </div>
  );
}


interface UserData {
  data: string;
  title: string;
  text: string;
}

const Card:React.FC<UserData> = ({data,title,text }) => {
  return (
    <Container>
      <HeaderCard><p>{data}</p><HearterInteration/></HeaderCard>
      <h2>{title}</h2>
      <p>{text}</p>
    </Container>
  );
};

export default Card;