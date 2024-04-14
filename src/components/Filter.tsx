import React, {FC} from "react";
import { DndItemProps } from "./DndList";
import './Filter.css'





const Filter: FC<DndItemProps> = (props) => {
    const {name, id} = props;
    return (
        <div id={id as string} className='filter'>
            <div className='filter-name'>
                <h3>{name}</h3>
            </div>
            <label>
                <input type="checkbox" />
                Enable Filter
            </label>
            <label>
                <input type="checkbox" />
                Show Results
            </label>
        </div>
    )
}
export default Filter;