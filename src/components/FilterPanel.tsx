import React, {FC} from 'react';

import Filter from './Filter';
import './FilterPanel.css';
import { itemProps } from './items';

export type OptionType = {
    value: string;
    label: string;
  };

const filterOptions: OptionType[]= [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


type FilterPanelProps = {
    items: itemProps[];
}


const FilterPanel: FC<FilterPanelProps> = ({items}) => {
    return (
        <div className='filterpanel'>
        {items.map((item) => {
            const { id, name, isDisabled, options } = item;
            return (
                <Filter id={id} key={id}  name={name} isDisabled={isDisabled} options={filterOptions} />
            );
          })}
        </div>
    )

}
export default FilterPanel;