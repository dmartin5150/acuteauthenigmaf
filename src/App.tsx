import  {useState, useEffect} from 'react';
import './App.css';
import FilterList from './components/FilterList';
import { itemProps, items } from './components/items';
import AppPanel from './components/AppPanel';
import { OptionType } from './components/FilterPanel';
import { SelectOptions } from './components/Filter';
import { getOptions } from './utilities/TAOoptions';
import getUpdatedItems from './utilities/fetchData/getUpdatedItems';




export type SelectedValue = {
  id: number;
  name: string;
  selectedValue:string[];
}

export type TAOOption = {
  id: number;
  value: string;
}



const defaultSelectedValues:SelectedValue[] = [

  {
    id: 1,
    name: 'usedTAO',
    selectedValue: []
  },
  {
    id: 2,
    name: 'deptName',
    selectedValue: []
  },
  {
    id: 3,
    name: 'orderGenus',
    selectedValue: []
  },
  {
    id: 4,
    name: 'orderName',
    selectedValue: []
  },
  {
    id: 5,
    name: 'taoBucket',
    selectedValue: []
  },
  {
    id: 6,
    name: 'orderingProvider',
    selectedValue: []
  }]



function App() {
  const [listItems, setListItems] = useState<itemProps[]>(items);
  const [selectedValues, setSelectedValues] = useState<SelectedValue[]>(defaultSelectedValues)
  const [filterDropDowns, setFilterDropDowns] = useState<OptionType[]>([])



  useEffect(() => {
    const getOptionDD = async (items:itemProps[]) =>
      {
        try {
          const updatedItems = await getUpdatedItems(items);
          if (updatedItems && updatedItems.length > 0){
            const itemsWithOptions = updatedItems.map((item) => {
              console.log('item', item)
              if (item.selectedValues) {
                const newOptions = getOptions(item.selectedValues)
                return {...item, options:newOptions}
              }
              return item
            })
            setListItems(itemsWithOptions)
            console.log('options =', itemsWithOptions)
          }


        } catch (err) {
          alert(err)
        }
      }
        getOptionDD(items);
  },[]);


  useEffect(() => {
    
    if (filterDropDowns && filterDropDowns.length > 0) {
      const updatedItems = listItems.map((item) => {
        return {...item, options: filterDropDowns}
      })
      setListItems(updatedItems)

    }

  },[filterDropDowns])


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
    const newResults = selectedValues.map(value => {
      if(value.id === id) {
        return {...value, selectedValue: value.selectedValue}
      }
      return value
    })

    setSelectedValues(newResults);
  }

  useEffect(() => {
    console.log(selectedValues)
  }, [selectedValues])



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
          <AppPanel items={listItems} results={selectedValues} onResultsChanged={handleResultsChanged}/>
        </div>
      </div>
    </div>
  );
}

export default App;
