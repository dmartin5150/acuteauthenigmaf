import React, {FC} from 'react';

import Filter from './Filter';
import './FilterPanel.css';
import { itemProps } from './items';
import { start } from 'repl';

export type OptionType = {
    value: string;
    label: string;
  };




type FilterPanelProps = {
    items: itemProps[];
    onResultsChanged: (id:number, value:string[]) => void;
}


const FilterPanel: FC<FilterPanelProps> = ({items, onResultsChanged}) => {
    return (
        <div className='filterpanel'>
        {items.map((item) => {
            const { id, name, isDisabled, options } = item;
            return (
                <Filter 
                  id={id} 
                  key={id}  
                  name={name} 
                  isDisabled={isDisabled}
                   options={options ? options : [{label:'',value:''}]}
                   onResultsChanged={onResultsChanged} />
            );
          })}
        </div>
    )

}
export default FilterPanel;