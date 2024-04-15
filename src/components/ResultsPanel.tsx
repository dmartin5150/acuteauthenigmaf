import React, {FC} from "react";
import { itemProps } from "./items";
import Results from "./Result";
import './ResultsPanel.css';

type ResultsPanelProps = {
    items: itemProps[]
}


const ResultsPanel: FC<ResultsPanelProps> = ({items}) => {
    return (
        <div className='resultspanel'>
        {items.map((item) => {
            const { id, name, isDisabled, options } = item;
            if(item.showResults) {
                return (
                    <Results item={item}  />
                );
            }
          })}
        </div>

    )
}
export default ResultsPanel;