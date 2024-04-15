
import { ReactNode } from "react";

export type itemProps = {
  id: number;
  name: string;
  children?: ReactNode;
  isDisabled:boolean;
  showResults:boolean;
  options?:string[],
  results?:string[]
}

export const items: itemProps[] = [
  {
    id: 1,
    name: "TAO",
    isDisabled:true,
    showResults:true
  },
  {
    id: 2,
    name: "Department",
    isDisabled:true,
    showResults:true
  },
  {
    id: 3,
    name: "Genus",
    isDisabled:true,
    showResults:true
  },
  {
    id: 4,
    name: "Order Name",
    isDisabled:true,
    showResults:true
  },
  {
    id: 5,
    name: "Bucket",
    isDisabled:true,
    showResults:true
  },
  {
    id: 6,
    name: "Provider",
    isDisabled:true,
    showResults:true
  },
];