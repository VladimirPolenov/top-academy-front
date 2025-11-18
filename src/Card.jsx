import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CardContainer, CardHeader } from './CardStyles';
import styled from 'styled-components';
import { MemesContext } from './MemesContext';

const FavButton = styled.button`
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

export default function MemeCard() {
  const params = useParams();
  const memeId = params.id;
  const navigate = useNavigate();

  const { memes, setMemes } = useContext(MemesContext);

  const meme = memes.find((item) => item.id === parseInt(memeId));

  const setFavorite = (meme) => {
    const newMemes = JSON.parse(JSON.stringify(memes));
    const index = memes.findIndex((item) => item.id === meme.id);
    newMemes[index].favorite = !newMemes[index].favorite;
    setMemes(newMemes);
  };

  if (!meme) return null;

  const onClose = () => {
    navigate('/');
  };

  return (
    <CardContainer fav={meme.favorite ? 'y' : 'n'}>
      <CardHeader>Выбран мем № {memeId}</CardHeader>
      <div className="meme-card">
        <div className="meme-card-header">
          <h3>{meme.title}</h3>
          <button onClick={onClose} className="close-btn">×</button>
        </div>
        <div className="meme-info">
          <p>Автор: {meme.author}</p>
          <p>Лайки: {meme.likes}</p>
        </div>
        <FavButton onClick={() => { setFavorite(meme); }}>Change Favorite</FavButton>
      </div>
    </CardContainer>
  );
};