import React, {FC} from 'react';
import { itemProps } from './items';
import { SelectedValueResult } from './items';
import './Result.css';


type ResultsProps = {
    item: itemProps;
}


const formatSelectedValues = (sItems: SelectedValueResult[]) => {
    let formattedValues = '';
    if (sItems && sItems.length >0) {
        const addCR = sItems.map((item) => item.name + ' (' + item.count + ')\n')
        formattedValues = addCR.join('')
    }
    return formattedValues
}


const Results: FC<ResultsProps> = ({item}) => {
    const {id, name, selectedValues} = item;
    let formattedValues:string = ''
    if (selectedValues){
        formattedValues = formatSelectedValues(selectedValues)
    }
    return (
        <div className='results'>
            <label id={id.toString()} key={id}>
                {name}
            </label>
            <textarea name="postContent" rows={4} cols={40} value={formattedValues} />
        </div>
    )
}
export default Results;