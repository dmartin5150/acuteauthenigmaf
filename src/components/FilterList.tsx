import React, {FC, useState} from 'react';
import './FilterList.css';

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
  
  
  
  import { items } from './items';
  import { DndList, DndItemProps } from './DndList';





const FilterList = () => {
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
        const orderedItems = (currItems: DndItemProps[]) => {
          const activeIndex = currItems.findIndex((item) => item.id === active.id);
          const overIndex = currItems.findIndex((item) => item.id === over?.id);
          return arrayMove(currItems, activeIndex, overIndex);
        };
        if (active.id !== over?.id) {
            setListItems(orderedItems);
        }
    };
      
    const updateItem = (itemId:number) => {
        console.log(itemId)
    }

    return (
        <div className='filterlist'>
            <h3 className='filterlist-header'>Filters</h3>
            <DndList
            sensors={sensors}
            onDragEnd={onDragEnd}
            items={listItems}
            onClickElement={updateItem}
            strategy={verticalListSortingStrategy}
            modifiers={[restrictToParentElement, restrictToVerticalAxis]}
            collisionDetection={closestCenter}
        />
        </div>

    )

}
export default FilterList