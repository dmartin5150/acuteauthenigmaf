import  {useState, useEffect} from 'react';
import './App.css';
import FilterList from './components/FilterList';
import { itemProps, items } from './components/items';
import AppPanel from './components/AppPanel';
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



function App() {
  const [listItems, setListItems] = useState<itemProps[]>(items);


 
  useEffect(() => {
    const getInitialItems = async (items:itemProps[]) =>
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
      getInitialItems(listItems);
  },[]);


  const getList = async(items:itemProps[]) => {
    const updatedItems = await getUpdatedItems(items);
    if (updatedItems && updatedItems.length > 0){
      const itemsWithOptions = updatedItems.map((item) => {
        if (item.dropDownValues) {
          const newOptions = getOptions(item.dropDownValues)
          return {...item, options:newOptions}
        }
        return item
      })
      return itemsWithOptions;
    }
  }
  
  const handleItemsChanged = async (items:itemProps[]) => {
    const itemsWithOptions = await getList(items)
    if (itemsWithOptions) {
      setListItems(itemsWithOptions);
    }
  }



  const handleFilteredStatusChanged = async (id:number, value: boolean) => {
    const newItems = listItems.map(item => {
        if (item.id === id) {
            return { ...item, isDisabled: !value };
        }
        return item;
    });
    const itemsWithOptions = await getList(newItems);
    if(itemsWithOptions) {
      setListItems(itemsWithOptions)
    }
    
  }
  

  const handleShowResultsChanged = async (id:number, value: boolean) => {
    const newItems = listItems.map(item => {
      if (item.id === id) {
          return { ...item, showResults: value };
      }
      return item;
    });
    const itemsWithOptions = await getList(newItems);
    if(itemsWithOptions) {
      setListItems(itemsWithOptions)
    }
  }

  const handleResultsChanged = async (id:number, value:string[]) => {
    const newItems = [...listItems];
    const curIndex = newItems.findIndex((item) => item.id === id);
    if (curIndex !== -1) {
        const curItem = newItems[curIndex];
        const updatedItem = {...curItem, selectedValues:value};
        newItems[curIndex] = updatedItem;
        const itemsWithOptions = await getList(newItems);
        if(itemsWithOptions) {
          setListItems(itemsWithOptions);
        }
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
            onItemsChanged={handleItemsChanged} 
            onFilterStatusChanged={handleFilteredStatusChanged}
            onShowResultsChanged={handleShowResultsChanged}
          />
          <AppPanel items={listItems}  onResultsChanged={handleResultsChanged}/>
        </div>
      </div>
    </div>
  );
}

export default App;
