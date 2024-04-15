import React, {FC, useState} from 'react';
import Select, {SingleValue, MultiValue, ActionMeta}  from 'react-select';
import './Filter.css';
import { OptionType } from './FilterPanel';

type SelectOptions = {
    label: string;
    value: string;
}


interface FilterProps {
    id: number;
    name:string;
    isDisabled:boolean;
    options: SelectOptions[]
}

const Filter: FC<FilterProps> = ({name, isDisabled, options}) => {

    const [selectedValue, setSelectedValue] = useState<MultiValue<SelectOptions>>([options[0]]);


    const handleChange = (newValue: MultiValue<SelectOptions>, actionMeta: ActionMeta<SelectOptions>) => {
        setSelectedValue(newValue)
    };
  

    return (
        <div className='filter'>
            <label>{name}</label>
            <div className='filter-select'>
                <Select  
                    options={options} 
                    isMulti={true}
                    onChange={handleChange}
                    isDisabled={isDisabled}
                    value={selectedValue}
                />  
            </div>
        </div>


    )
}
export default Filter