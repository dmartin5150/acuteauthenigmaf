import {FC} from 'react';
import { itemProps } from './items';
import { ValueResult } from './items';
import './Result.css';


type ResultsProps = {
    item: itemProps;
}


const formatSelectedValues = (sItems: ValueResult[]) => {
    let formattedValues = '';
    if (sItems && sItems.length >0) {
        const addCR = sItems.map((item) => item.name + ' (' + item.count + ')\n')
        formattedValues = addCR.join('')
    }
    return formattedValues
}


const Results: FC<ResultsProps> = ({item}) => {
    const {id, name, results} = item;
    let formattedValues:string = ''
    if (results){
        formattedValues = formatSelectedValues(results)
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