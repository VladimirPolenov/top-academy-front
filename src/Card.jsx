import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CardContainer, CardHeader } from './CardStyles';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { likeMeme } from './features/memes/memeSlice';

const FavButton = styled.button`
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

export default function MemeCard() {
  const params = useParams();
  const memeId = params.id;
  const navigate = useNavigate();

  const memes = useSelector(state => state.memes.items);

  const meme = memes.find((item) => item.id === parseInt(memeId));
  const dispatch = useDispatch();

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
        <FavButton onClick={() => { dispatch(likeMeme(meme.id)); }}>Change Favorite</FavButton>
      </div>
    </CardContainer>
  );
};