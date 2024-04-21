
import { ReactNode } from "react";
import { OptionType } from "./FilterPanel";
import { Option } from "react-dropdown";
import { getOptions} from "../utilities/TAOoptions";

const options:string[] = ['Result 1', 'Result 2', 'Result 3']

export type itemProps = {
  id: number;
  name: string;
  alias:string;
  children?: ReactNode;
  isDisabled:boolean;
  showResults:boolean;
  options?:OptionType[],
  selectedValues?:string[]
}





export const items: itemProps[] = [
  {
    id: 1,
    name: "TAO",
    alias:"usedTAO",
    isDisabled:true,
    showResults:true,
    options:getOptions(options),
    selectedValues:[]
  },
  {
    id: 2,
    name: "Department",
    alias: "deptName",
    isDisabled:true,
    showResults:true,
    options:getOptions(options),
    selectedValues:[]
  },
  {
    id: 3,
    name: "Genus",
    alias:"orderGenus",
    isDisabled:true,
    showResults:true,
    options:getOptions(options),
    selectedValues:[]
  },
  {
    id: 4,
    name: "Order Name",
    alias:"orderName",
    isDisabled:true,
    showResults:true,
    options:getOptions(options),
    selectedValues:[]
  },
  {
    id: 5,
    name: "Bucket",
    alias:"taoBucket",
    isDisabled:true,
    showResults:true,
    options:getOptions(options),
    selectedValues:[]
  },
  {
    id: 6,
    name: "Provider",
    alias:"orderingProvider",
    isDisabled:true,
    showResults:true,
    options:getOptions(options),
    selectedValues:[]
  },
];