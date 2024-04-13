import React from 'react';
import AnalysisSelector from './components/AnalysisSelector';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Acute Auth Enigma</h1>
        <div className='App-header--Analysis'>
          <AnalysisSelector />
        </div>
      </header>

    </div>
  );
}

export default App;
