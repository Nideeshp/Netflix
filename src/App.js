import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {Originals,Action,ComedyMovies,HorrorMovies,RomanceMovies} from './urls'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost  url={Originals} title='Netflix Originals' />
      <Rowpost  url={Action}    title='Actions' isSmall  />
      <Rowpost  url={ComedyMovies}    title='Comedy' isSmall  />
      <Rowpost  url={HorrorMovies}    title='Horror' isSmall  />
      <Rowpost  url={RomanceMovies}    title='Romance' isSmall  />
    </div>
  );
}

export default App;
