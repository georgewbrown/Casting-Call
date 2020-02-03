import React, { useState, useCallback, Fragment } from 'react';
import NavBar from '../components/UI/Navbar/rb-Navbar';
import ActorButton from '../components/Actor/ActorButton/ActorButton';
import Search from '../components/Actor/Search/Search';
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
