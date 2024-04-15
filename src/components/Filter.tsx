import React, {FC} from 'react';
import Select from 'react-select';
import './Filter.css';


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
    return (
        <div className='filter'>
            <label>{name}</label>
            <div className='filter-select'>
                <Select options={options}   isDisabled={isDisabled}/>  
            </div>
        </div>

    )
}
export default Filter