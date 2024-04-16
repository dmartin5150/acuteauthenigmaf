import React, {FC, useState, useEffect} from 'react';
import Select, {SingleValue, MultiValue, ActionMeta}  from 'react-select';
import './Filter.css';
import { OptionType } from './FilterPanel';

export type SelectOptions = {
    label: string;
    value: string;
}


interface FilterProps {
    id: number;
    name:string;
    isDisabled:boolean;
    options: SelectOptions[];
    onResultsChanged: (id:number, value:string[]) => void;
}

const Filter: FC<FilterProps> = ({id, name, isDisabled, options,onResultsChanged}) => {

    const [selectedValue, setSelectedValue] = useState<MultiValue<SelectOptions>>([]);
    const [filterId, setFilterId] = useState<number>(0);



    useEffect(() => {
        setFilterId(id)
    },[])


    const handleChange = (newValue: MultiValue<SelectOptions>, actionMeta: ActionMeta<SelectOptions>) => {
        if(filterId !== 0) {
            setSelectedValue(newValue);
            const curResults = newValue.map((item) => {return item.value})
            onResultsChanged(filterId, curResults);
        }
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