import  {useState, useEffect} from 'react';
import './App.css';
import FilterList from './components/FilterList';
import { itemProps, items } from './components/items';
import AppPanel from './components/AppPanel';
import { OptionType } from './components/FilterPanel';
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
    const getNewItems = async (items:itemProps[]) =>
      {
        try {
          const updatedItems = await getUpdatedItems(items);
          if (updatedItems && updatedItems.length > 0){
            const itemsWithOptions = updatedItems.map((item) => {
              console.log('item', item)
              if (item.dropDownValues) {
                const newOptions = getOptions(item.dropDownValues)
                return {...item, options:newOptions}
              }
              return item
            })
            setListItems(itemsWithOptions)
          }
        } catch (err) {
          alert(err)
        }
      }
        getNewItems(items);
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
    const newItems = [...listItems];
    const curIndex = newItems.findIndex((item) => item.id === id);
    if (curIndex != -1) {
        const curItem = newItems[curIndex];
        const updatedItem = {...curItem, selectedValues:value};
        newItems[curIndex] = updatedItem;
        setListItems(newItems);
   }
  }



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
