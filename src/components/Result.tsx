import React, {FC} from 'react';
import { itemProps } from './items';
import './Result.css';


type ResultsProps = {
    item: itemProps;
}


const Results: FC<ResultsProps> = ({item}) => {
    const {id, name, results} = item;
    return (
        <div className='results'>
            <label id={id.toString()} key={id}>
                {name}
            </label>
            <textarea name="postContent" rows={4} cols={40} value={results} />
        </div>
    )
}
export default Results;