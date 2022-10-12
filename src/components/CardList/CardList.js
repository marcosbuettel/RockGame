import MusicCard from '../MusicCard/MusicCard';
import CardListStyled from './CardListStyled';
import { useState } from 'react';
import Songs from '../Songs/Songs';

const CardList = () => {
  const cardList = Songs.map((card) => {
    return (
      <MusicCard
        bandName={card.bandName}
        music={card.title}
        key={Math.random()}
      />
    );
  });

  return <CardListStyled>{cardList}</CardListStyled>;
};

export default CardList;
