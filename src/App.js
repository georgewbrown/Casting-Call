import React, { useState, useCallback, Fragment } from 'react';
import NavBar from './navbar/NavBar';
import ActorButton from './ActorButton/ActorButton';
import Search from './Search/Search';
import './App.css';

function App() {
  const [ userActors, setUserActors ] = useState([]);

  const filteredActorsHandler = useCallback(filteredActors => {
    setUserActors(filteredActors);
  }, []);

  return (
    <Fragment>
      <NavBar />
      <div>
      <Search onLoadActors={filteredActorsHandler}/>
      <ActorButton />
      </div>
    </Fragment>
  );
 }
export default App;
