import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Favorites from './Favorites';
import AddMeme from './AddMeme';
import List from './List';
import MemeCard from './Card';
import styled from 'styled-components';

const Navigation = styled.nav`
  & > a {
    display: block;
    width: 250px;
    background-color: ${(props) => props.color ? props.color : 'rgb(95, 56, 204)'};
    color: white;
    border-radius: 10px;
    text-align: center;
    padding: 10px 0;
    text-decoration: none; 
  }
`;

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

  return (
    <div className="meme-app">
      <header className="app-header">
        <h1>🔥 Коллекция IT Мемов</h1>
      </header>

      <Navigation color="blue">
        <Link to="/">Главная</Link><br />
        <Link to="/add">Добавить мем</Link><br />
        <Link to="/favorites">Любимые мемы</Link><br />
      </Navigation>

      <div className="app-content">
        <Routes>
          <Route path="/" element={
            <List
              memes={memes}
            />
            } />
          <Route path="/meme/:id" element={<MemeCard memeList={memes} />} />  
          <Route path="/add" element={<AddMeme />} />
          <Route paht="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
