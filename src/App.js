import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Favorites from './Favorites';
import AddMeme from './AddMeme';
import List from './List';

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

      <nav>
        <Link to="/">Главная</Link><br />
        <Link to="/add">Добавить мем</Link><br />
        <Link to="/favorites">Любимые мемы</Link><br />
      </nav>

      <div className="app-content">
        <Routes>
          <Route path="/" element={
            <List
              selectedMemeId={selectedMemeId}
              memes={memes}
              handleCloseCard={handleCloseCard}
              handleMemeSelect={handleMemeSelect}
            />
            } />
          <Route path="/add" element={<AddMeme />} />
          <Route paht="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
