import React, {FC, useState, useEffect} from 'react';
import './FilterList.css';
import FilterPanel from './FilterPanel';
import { itemProps } from './items';

import {
    closestCenter,
    DragEndEvent,
    KeyboardSensor,
    MouseSensor,
    PointerSensor,
    useSensor,
    useSensors,
  } from "@dnd-kit/core";
  
  import {
    restrictToParentElement,
    restrictToVerticalAxis,
  } from "@dnd-kit/modifiers";
  
  import {
    arrayMove,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
  } from "@dnd-kit/sortable";
  
  
  
  import { DndList } from './DndList';
import { on } from 'events';


type FilterListProps = {
    items: itemProps[];
    onItemsChanged: (items:itemProps[]) => void;
    onFilterStatusChanged: (id:number, status:boolean) => void;
}



const FilterList: FC<FilterListProps> = ({items, onItemsChanged,onFilterStatusChanged}) => {
    const [listItems, setListItems] = useState(items);
    const keyboardSensor = useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      });
      const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: {
          distance: 8, // Enable item onClick function
        },
      });
      const mouseSensor = useSensor(MouseSensor);
      const sensors = useSensors(keyboardSensor, pointerSensor, mouseSensor);
      const onDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        const orderedItems = (currItems: itemProps[]) => {
          const activeIndex = currItems.findIndex((item) => item.id === active.id);
          const overIndex = currItems.findIndex((item) => item.id === over?.id);
          return arrayMove(currItems, activeIndex, overIndex);
        };
        if (active.id !== over?.id) {
            setListItems(orderedItems);
        }
    };

    useEffect(() => {
        onItemsChanged(listItems)
    },[listItems])
      
    const updateItem = (itemId:number) => {
        console.log(itemId)
    }




    return (
        <div className='filterlist'>
                <h3 className='filterlist-header'>Filters</h3>
                <DndList
                sensors={sensors}
                onDragEnd={onDragEnd}
                onFilterStatusChanged={onFilterStatusChanged}
                items={listItems}
                strategy={verticalListSortingStrategy}
                modifiers={[restrictToParentElement, restrictToVerticalAxis]}
                collisionDetection={closestCenter}
            />
        </div>

    )

}
export default FilterList