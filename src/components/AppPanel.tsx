import {FC} from 'react';
import FilterPanel from "./FilterPanel";
import ResultsPanel from "./ResultsPanel";
import { itemProps } from "./items";

type AppPanelProps = {
    items: itemProps[]
}


const AppPanel: FC<AppPanelProps> = ({items}) => {
    return (
        <div className="'apppanel">
            <FilterPanel items={items}/>
            <ResultsPanel items={items} />
        </div>
    )
}
export default AppPanel;