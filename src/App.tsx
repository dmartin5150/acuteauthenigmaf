import React, {useState, useEffect} from 'react';
import './App.css';
import FilterList from './components/FilterList';
import FilterPanel from './components/FilterPanel';
import { itemProps, items } from './components/items';
import ResultsPanel from './components/ResultsPanel';
import AppPanel from './components/AppPanel';
import Select from 'react-select';
import { OptionType } from './components/FilterPanel';


const filterOptions: OptionType[]= [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


function App() {
  const [listItems, setListItems] = useState<itemProps[]>(items);


  const onItemsChanged = (items:itemProps[]) => {
    setListItems(items);
  }

  const handleFilteredStatusChanged = (id:number, value: boolean) => {
    const newItems = listItems.map(item => {
        if (item.id === id) {
            return { ...item, isDisabled: !value };
        }
        return item;
    });
    setListItems(newItems)
  }

  const handleShowResultsChanged = (id:number, value: boolean) => {
    const newItems = listItems.map(item => {
      if (item.id === id) {
          return { ...item, showResults: value };
      }
      return item;
  });
  setListItems(newItems)
  }

  useEffect(()=> {
    console.log(listItems)
  }, [listItems])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Acute Auth Enigma</h1>
      </header>
      <div className='App-panel'>
        <div className='App-filters'>
          <FilterList 
            items={listItems} 
            onItemsChanged={onItemsChanged} 
            onFilterStatusChanged={handleFilteredStatusChanged}
            onShowResultsChanged={handleShowResultsChanged}
          />
          <AppPanel items={listItems} />
        </div>
      </div>


    </div>
  );
}

export default App;
