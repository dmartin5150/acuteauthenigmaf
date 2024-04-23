import {FC, useState, useEffect} from "react";

import './FilterStatus.css'
import { itemProps } from "./items";


type FilterStatusProps = itemProps & {
    onFilterStatusChanged: (id:number, status:boolean) => void;
    onShowResultsChanged: (id:number, status:boolean) => void;
}


const FilterStatus: FC<FilterStatusProps> = (props) => {
    const {name, id, onFilterStatusChanged, onShowResultsChanged} = props;
    const [isEnabled,setIsEnabled] = useState<boolean>(false);
    const [showResults, setShowResults] = useState<boolean>(true);




    const changedEnabled = () => {
        setIsEnabled(!isEnabled)
    }

    const changeShowResults = () => {
        setShowResults(!showResults);
    }



    useEffect(() => {
        onFilterStatusChanged(id, isEnabled);
    },[isEnabled,id])

    useEffect(()=> {
        onShowResultsChanged(id, showResults);
    },[showResults,id])

    return (
        <div id={id.toString()} className='filterstatus'>
            <div className='filter-name'>
                <h3>{name}</h3>
            </div>
            <label>
                <input type="checkbox" onChange={changedEnabled} checked={isEnabled}  />
                Enable Filter
            </label>
            <label>
                <input type="checkbox" onChange={changeShowResults} checked={showResults} />
                Show Results
            </label>
        </div>
    )
}
export default FilterStatus;