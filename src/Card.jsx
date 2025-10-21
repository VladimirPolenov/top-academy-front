import React from 'react';

export default function MemeCard({ meme, onClose }) {
  if (!meme) return null;

  return (
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
  );
};