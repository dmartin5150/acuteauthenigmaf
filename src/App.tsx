import React, {useState} from 'react';
import AnalysisSelector from './components/AnalysisSelector';
import Select from 'react-select'
import './App.css';
import FilterList from './components/FilterList';





const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


function App() {








  return (
    <div className="App">
      <header className="App-header">
        <h1>Acute Auth Enigma</h1>
        <div className='App-header--Analysis'>
          <AnalysisSelector />
        </div>
      </header>
      <Select options={options} />
      <FilterList />
    </div>
  );
}

export default App;
