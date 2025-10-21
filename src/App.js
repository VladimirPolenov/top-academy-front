import React, { useState } from 'react';
import MemeCard from './Card';
import './App.css';

function App() {
  const [memes, setMemes] = useState([
    {
      id: 1,
      title: 'Программист за работой',
      author: 'DevMaster',
      likes: 1542
    },
    {
      id: 2,
      title: 'Когда код работает с первого раза',
      author: 'CodeWizard',
      likes: 2897
    },
    {
      id: 3,
      title: 'Дедлайн близко',
      author: 'StressDeveloper',
      likes: 3421
    },
    {
      id: 4,
      title: 'Найден баг в продакшене',
      author: 'BugHunter',
      likes: 1876
    }
  ]);

  const [selectedMemeId, setSelectedMemeId] = useState(null);

  const selectedMeme = memes.find(meme => meme.id === selectedMemeId);

  const handleMemeSelect = (memeId) => {
    setSelectedMemeId(memeId);
  };

  const handleCloseCard = () => {
    setSelectedMemeId(null);
  };

  return (
    <div className="meme-app">
      <header className="app-header">
        <h1>🔥 Коллекция IT Мемов</h1>
        <p>{!selectedMemeId ? "Выберите мем для просмотра подробностей" : `Выбран мем № ${selectedMemeId}`}</p>
      </header>

      <div className="app-content">
        {!selectedMemeId ? (
          <section className="memes-list">
            <h2>Список мемов</h2>
            <div className="memes-grid">
              {memes.map(meme => (
                <div 
                  key={meme.id}
                  className={`meme-item ${selectedMemeId === meme.id ? 'selected' : ''}`}
                  onClick={() => handleMemeSelect(meme.id)}
                >
                  <img src={meme.url} alt={meme.title} className="meme-thumbnail" />
                  <h4>{meme.title}</h4>
                  <span className="likes">❤️ {meme.likes}</span>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="meme-details">
            {selectedMeme ? (
              <MemeCard meme={selectedMeme} onClose={handleCloseCard} />
            ) : (
              <div className="no-selection">
                <p>Выберите мем из списка для просмотра</p>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
