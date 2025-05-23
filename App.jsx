import React, { useState } from 'react';
import TopContainer from './components/TopContainer';
import Cards from './components/Cards';

const App = () => {
  const [clicked, setClicked] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className='w-full min-h-screen bg-gradient-to-t from-rose-300 to-indigo-200'>
      <TopContainer setClicked={setClicked} setSearchQuery={setSearchQuery} />
      <Cards clicked={clicked} searchQuery={searchQuery} />
    </div>
  );
};

export default App;