import React, {FC} from "react";
import { itemProps } from "./items";
import Results from "./Result";
import './ResultsPanel.css';
import { SelectedValue } from "../App";

type ResultsPanelProps = {
    items: itemProps[];
    results: SelectedValue[];
}


const ResultsPanel: FC<ResultsPanelProps> = ({items, results}) => {
    return (
        <div className='resultspanel'>
        {items.map((item) => {
            const { id, name, isDisabled, options } = item;
            if(item.showResults) {
                return (
                    <div id={id.toString()} key={id}>
                        <Results item={item}  />
                    </div>
                );
            }
          })}
        </div>

    )
}
export default ResultsPanel;