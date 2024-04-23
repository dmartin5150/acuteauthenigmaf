import  {FC} from "react";
import { itemProps } from "./items";
import Results from "./Result";
import './ResultsPanel.css';


type ResultsPanelProps = {
    items: itemProps[];
}


const ResultsPanel: FC<ResultsPanelProps> = ({items}) => {
    return (
        <div className='resultspanel'>
        {items && items.map((item) => {
            const { id} = item;
            if(item.showResults) {
                return (
                    <div id={id.toString()} key={id}>
                        <Results item={item}  />
                    </div>
                );
            }
            return (
                <div id={id.toString()} key={id}>
                </div>
            );
          })}
        </div>

    )
}
export default ResultsPanel;