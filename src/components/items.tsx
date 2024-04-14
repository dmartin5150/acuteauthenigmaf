
import { DndItemProps } from "./DndList";

export const items: DndItemProps[] = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 2,
    name: "Dragonfruit",
    onClick: () => alert("Eat Dragonfruit!"),
    selected: true,
  },
  {
    id: 3,
    name: "Lychee",
  },
  {
    id: 4,
    name: "Banana is disabled",
    disabled: true,
  },
];