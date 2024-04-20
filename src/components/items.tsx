
import { ReactNode } from "react";
import { OptionType } from "./FilterPanel";
import { Option } from "react-dropdown";
import { getOptions} from "../utilities/TAOoptions";

export type itemProps = {
  id: number;
  name: string;
  children?: ReactNode;
  isDisabled:boolean;
  showResults:boolean;
  options?:OptionType[],
  results?:string[]
}

const options:string[] = ['Result 1', 'Result 2', 'Result 3']



export const items: itemProps[] = [
  {
    id: 1,
    name: "TAO",
    isDisabled:true,
    showResults:true,
    options:getOptions(options),
    results:[]
  },
  {
    id: 2,
    name: "Department",
    isDisabled:true,
    showResults:true,
    options:getOptions(options),
    results:[]
  },
  {
    id: 3,
    name: "Genus",
    isDisabled:true,
    showResults:true,
    options:getOptions(options),
    results:[]
  },
  {
    id: 4,
    name: "Order Name",
    isDisabled:true,
    showResults:true,
    options:getOptions(options),
    results:[]
  },
  {
    id: 5,
    name: "Bucket",
    isDisabled:true,
    showResults:true,
    options:getOptions(options),
    results:[]
  },
  {
    id: 6,
    name: "Provider",
    isDisabled:true,
    showResults:true,
    options:getOptions(options),
    results:[]
  },
];