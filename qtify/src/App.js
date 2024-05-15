import React from 'react';
import './style.css';
import NavBar from "./component/navbar/navbar"
import Hero from "./component/hero/hero"
import Grid from "./component/grid/grid"

function App() {
  return (<>
    <NavBar />
    <div className='body'>
    <Hero />
      <Grid />
    </div>
  </>
  );
}

export default App;
