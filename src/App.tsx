import  {useState, useEffect} from 'react';
import './App.css';
import FilterList from './components/FilterList';
import { itemProps, items } from './components/items';
import AppPanel from './components/AppPanel';
import { OptionType } from './components/FilterPanel';
import { SelectOptions } from './components/Filter';




export type Result = {
  id: number;
  name: string;
  results:string[];
}




const selectedResults:Result[] = [

  {
    id: 1,
    name: 'usedTAO',
    results: []
  },
  {
    id: 2,
    name: 'deptName',
    results: []
  },
  {
    id: 3,
    name: 'orderGenus',
    results: []
  },
  {
    id: 4,
    name: 'orderName',
    results: []
  },
  {
    id: 5,
    name: 'taoBucket',
    results: []
  },
  {
    id: 6,
    name: 'orderingProvider',
    results: []
  }]



function App() {
  const [listItems, setListItems] = useState<itemProps[]>(items);
  const [results, setResults] = useState<Result[]>(selectedResults)


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

  const handleResultsChanged = (id:number, value:string[]) => {
    console.log('new values', id, ' ', value)
    const newResults = results.map(result => {
      if(result.id === id) {
        return {...result, results: value}
      }
      return result
    })

    setResults(newResults);
  }

  useEffect(() => {
    console.log(results)
  }, [results])






  return (
    <div className="App">
      <header className="App-header">
        <h1>Rad Auth Enigma</h1>
      </header>
      <div className='App-panel'>
        <div className='App-filters'>
          <FilterList 
            items={listItems} 
            onItemsChanged={onItemsChanged} 
            onFilterStatusChanged={handleFilteredStatusChanged}
            onShowResultsChanged={handleShowResultsChanged}
          />
          <AppPanel items={listItems} results={results} onResultsChanged={handleResultsChanged}/>
        </div>
      </div>
    </div>
  );
}

export default App;
