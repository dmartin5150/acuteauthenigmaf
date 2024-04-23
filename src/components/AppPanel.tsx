import {FC} from 'react';
import FilterPanel from "./FilterPanel";
import ResultsPanel from "./ResultsPanel";
import { itemProps } from "./items";


type AppPanelProps = {
    items: itemProps[];
    onResultsChanged: (id:number, value:string[]) => void
}


const AppPanel: FC<AppPanelProps> = ({items, onResultsChanged}) => {
    return (
        <div className="'app-panel">
            <FilterPanel items={items} onResultsChanged={onResultsChanged}/>
            <ResultsPanel items={items}  />
        </div>
    )
}
export default AppPanel;