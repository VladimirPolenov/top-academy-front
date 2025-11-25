import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AddMeme from './AddMeme';
import List from './List';
import MemeCard from './Card';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store';

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

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
