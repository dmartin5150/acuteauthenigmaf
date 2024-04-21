
import { ReactNode } from "react";
import { OptionType } from "./FilterPanel";



export type ValueResult = {
  name: string;
  count: string;
}


export type itemProps = {
  id: number;
  name: string;
  alias:string;
  children?: ReactNode;
  isDisabled:boolean;
  showResults:boolean;
  options?:OptionType[],
  selectedValues?:string[],
  dropDownValues?:ValueResult[],
  results?:ValueResult[]
}





export const items: itemProps[] = [
  {
    id: 1,
    name: "TAO",
    alias:"usedTAO",
    isDisabled:true,
    showResults:true,
    options:[],
    selectedValues:[],
    dropDownValues:[],
    results:[]
  },
  {
    id: 2,
    name: "Department",
    alias: "deptName",
    isDisabled:true,
    showResults:true,
    options:[],
    selectedValues:[],
    dropDownValues:[],
    results:[]
  },
  {
    id: 3,
    name: "Genus",
    alias:"orderGenus",
    isDisabled:true,
    showResults:true,
    options:[],
    selectedValues:[],
    dropDownValues:[],
    results:[]
  },
  {
    id: 4,
    name: "Order Name",
    alias:"orderName",
    isDisabled:true,
    showResults:true,
    options:[],
    selectedValues:[],
    dropDownValues:[],
    results:[]
  },
  {
    id: 5,
    name: "Bucket",
    alias:"taoBucket",
    isDisabled:true,
    showResults:true,
    options:[],
    selectedValues:[],
    dropDownValues:[],
    results:[]
  },
  {
    id: 6,
    name: "Provider",
    alias:"orderingProvider",
    isDisabled:true,
    showResults:true,
    options:[],
    selectedValues:[],
    dropDownValues:[],
    results:[]
  },
];