
import { ReactNode } from "react";
import { OptionType } from "./FilterPanel";
import { Option } from "react-dropdown";


export type itemProps = {
  id: number;
  name: string;
  children?: ReactNode;
  isDisabled:boolean;
  showResults:boolean;
  options?:OptionType[],
  results?:string[]
}

export const items: itemProps[] = [
  {
    id: 1,
    name: "TAO",
    isDisabled:true,
    showResults:true,
    options:[ {label: 'Result 1', value: 'Result 1'}, {label: 'Result 2', value: 'Result 2'}, {label: 'Result 3', value:'Result 3'}]
  },
  {
    id: 2,
    name: "Department",
    isDisabled:true,
    showResults:true,
    options:[ {label: 'Result 1', value: 'Result 1'}, {label: 'Result 2', value: 'Result 2'}, {label: 'Result 3', value:'Result 3'}]
  },
  {
    id: 3,
    name: "Genus",
    isDisabled:true,
    showResults:true,
    options:[ {label: 'Result 1', value: 'Result 1'}, {label: 'Result 2', value: 'Result 2'}, {label: 'Result 3', value:'Result 3'}]
  },
  {
    id: 4,
    name: "Order Name",
    isDisabled:true,
    showResults:true,
    options:[ {label: 'Result 1', value: 'Result 1'}, {label: 'Result 2', value: 'Result 2'}, {label: 'Result 3', value:'Result 3'}]
  },
  {
    id: 5,
    name: "Bucket",
    isDisabled:true,
    showResults:true,
    options:[ {label: 'Result 1', value: 'Result 1'}, {label: 'Result 2', value: 'Result 2'}, {label: 'Result 3', value:'Result 3'}]
  },
  {
    id: 6,
    name: "Provider",
    isDisabled:true,
    showResults:true,
    options:[ {label: 'Result 1', value: 'Result 1'}, {label: 'Result 2', value: 'Result 2'}, {label: 'Result 3', value:'Result 3'}]
  },
];