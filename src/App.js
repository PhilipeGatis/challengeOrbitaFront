import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import Content from './components/Content';

function App() {
  return (
    <div className="container bg-gray-300 mx-auto">
      <Header />
      <Content>
        <CardList />
      </Content>
    </div>
  );
}

export default App;
