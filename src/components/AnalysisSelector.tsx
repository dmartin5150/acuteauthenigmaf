import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './AnalysisSelector.css';

const options = [
    'TAO', 'Department', 'Provider', 'Bucket'
  ];
  
const defaultOption = options[0];


const  AnalysisSelector = () => {
    return (

        <div className='analysis-selctor'>
            {/* <div className='analysis-selector--label'>
                <h2 >Select item for analysis:</h2>
            </div> */}
            <div className='analysis-selector--dropdown'>
                <Dropdown options={options} onChange={()=>{}} value={defaultOption} placeholder="Select an option" />
            </div>

        </div>

    )
}

export default AnalysisSelector