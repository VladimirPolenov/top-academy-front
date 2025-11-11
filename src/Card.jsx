import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CardContainer, CardHeader } from './CardStyles';

export default function MemeCard({ memeList }) {
  const params = useParams();
  const memeId = params.id;
  const navigate = useNavigate();

  const meme = memeList.find((item) => item.id === parseInt(memeId));

  if (!meme) return null;

  const onClose = () => {
    navigate('/');
  };

  return (
    <CardContainer>
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
      </div>
    </CardContainer>
  );
};