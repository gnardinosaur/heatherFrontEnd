import React, { useState } from 'react';
import './App.global.scss';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  const [addSearchBar, setAddSearchBar] = useState(false)

  function handleAddSearch() {
    setAddSearchBar(!addSearchBar)
  };

  return (
    <div>
    <Header handleAddSearch={handleAddSearch} />
    {addSearchBar ? <SearchBar /> : <div></div>}
    </div>
  );
}

export default App;