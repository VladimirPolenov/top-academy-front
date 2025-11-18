import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AddMeme from './AddMeme';
import List from './List';
import MemeCard from './Card';
import styled from 'styled-components';
import { MemesContext } from './MemesContext';

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
      likes: 1542,
      favorite: false,
    },
    {
      id: 2,
      title: 'Когда код работает с первого раза',
      author: 'CodeWizard',
      likes: 2897,
      favorite: false,
    },
    {
      id: 3,
      title: 'Дедлайн близко',
      author: 'StressDeveloper',
      likes: 3421,
      favorite: false,
    },
    {
      id: 4,
      title: 'Найден баг в продакшене',
      author: 'BugHunter',
      likes: 1876,
      favorite: false,
    }
  ]);
  
  const contextValue = {
    memes,
    setMemes,
    favoriteMemes: memes.filter((item) => item.favorite)
  };

  return (
    <MemesContext.Provider value={contextValue}>
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
              <List />
              } />
            <Route path="/meme/:id" element={<MemeCard />} />  
            <Route path="/add" element={<AddMeme />} />
            <Route path="/favorites" element={<List fav />} />
          </Routes>
        </div>
      </div>
    </MemesContext.Provider>
  );
}

export default App;
