import {FC} from 'react';
import FilterPanel from "./FilterPanel";
import ResultsPanel from "./ResultsPanel";
import { itemProps } from "./items";
import { Result } from '../App';

type AppPanelProps = {
    items: itemProps[];
    results: Result[];
    onResultsChanged: (id:number, value:string[]) => void
}


const AppPanel: FC<AppPanelProps> = ({items,results, onResultsChanged}) => {
    return (
        <div className="'apppanel">
            <FilterPanel items={items} onResultsChanged={onResultsChanged}/>
            <ResultsPanel items={items} results={results} />
        </div>
    )
}
export default AppPanel;