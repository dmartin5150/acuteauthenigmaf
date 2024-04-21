import {FC} from 'react';
import FilterPanel from "./FilterPanel";
import ResultsPanel from "./ResultsPanel";
import { itemProps } from "./items";
import { SelectedValue } from '../App';

type AppPanelProps = {
    items: itemProps[];
    results: SelectedValue[];
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