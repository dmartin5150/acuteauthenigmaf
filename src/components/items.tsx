
import { DndItemProps } from "./DndList";

export type itemProps = {
  id: number;
  name: string;
  isDisabled:boolean;
  options?:string[]
}

export const items: itemProps[] = [
  {
    id: 1,
    name: "TAO",
    isDisabled:true
  },
  {
    id: 2,
    name: "Department",
    isDisabled:true
  },
  {
    id: 3,
    name: "Genus",
    isDisabled:true,
  },
  {
    id: 4,
    name: "Order Name",
    isDisabled:true
  },
  {
    id: 5,
    name: "Bucket",
    isDisabled:true
  },
  {
    id: 6,
    name: "Provider",
    isDisabled:true
  },
];