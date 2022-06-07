import { useState } from 'react';
import './App.css';
import data from './searchFilterData.json';

function App() {
  const [searchWord, setSearchWord] = useState('')

  const filterWord = (val) => {
    if (searchWord === '') {
      return val;
    } else if (val.first_name.toLowerCase().includes(searchWord.toLowerCase())) {
      return val;
    } 
    return 0;
  }

  return (
    <div className="App">
      <h1>Tommie's Search Filter</h1>
      <input type="text" placeholder="Search Name..." onChange={(e) => setSearchWord(e.target.value)}></input>
      <h2>List of Names</h2>
      {
        data.filter((val) => {
          return filterWord(val)
        }).map((person, key) => {
          return <p key={key}>{person.first_name}</p>
        })
      }
    </div>
  );
}

export default App;
