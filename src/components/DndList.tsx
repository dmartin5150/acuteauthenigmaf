import { FC, ReactNode } from "react";
import { DndContext, DndContextProps, UniqueIdentifier } from "@dnd-kit/core";
import { SortableContext, SortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import FilterStatus from "./FilterStatus";
import { itemProps } from "./items";


interface DndProps extends DndContextProps {
  items: itemProps[];
  strategy?: SortingStrategy;
  onFilterStatusChanged: (id:number, status:boolean) => void;
  onShowResultsChanged: (id:number, status:boolean) => void;
}


export const DndList: FC<DndProps> = (props) => {
  const {
    items,
    onFilterStatusChanged,
    onShowResultsChanged,
    strategy,
    modifiers,
    collisionDetection,
    sensors,
    onDragEnd,
    ...rest
  } = props;




  return (
    <DndContext
      sensors={sensors}
      onDragEnd={onDragEnd}
      collisionDetection={collisionDetection}
      modifiers={modifiers}
      {...rest}
    >
      <SortableContext items={items} strategy={strategy}>
        {items.map((item) => {
          const { id, name,alias, showResults, isDisabled} = item;
          return (
              <SortableItem key={id} id={id} name={name} >
                <div>
                  <FilterStatus 
                    id={id} 
                    name={name} 
                    alias={alias}
                    isDisabled={isDisabled} 
                    showResults={showResults} 
                    onFilterStatusChanged={onFilterStatusChanged}
                    onShowResultsChanged={onShowResultsChanged}
                  />
                </div>
              </SortableItem>
          );
        })}
      </SortableContext>
    </DndContext>
  );
};