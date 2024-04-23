import {FC} from 'react';
import './FilterList.css';
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



type FilterListProps = {
    items: itemProps[];
    onItemsChanged: (items:itemProps[]) => void;
    onFilterStatusChanged: (id:number, status:boolean) => void;
    onShowResultsChanged: (id:number, status:boolean) => void;
}



const FilterList: FC<FilterListProps> = ({items, onItemsChanged,onFilterStatusChanged,onShowResultsChanged}) => {

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
          return arrayMove([...currItems], activeIndex, overIndex);
        };
        if (active.id !== over?.id) {
            onItemsChanged(orderedItems(items));
        }
    };




    return (
        <div className='filterlist'>
                <h3 className='filterlist-header'>Filters</h3>
                <DndList
                sensors={sensors}
                onDragEnd={onDragEnd}
                onFilterStatusChanged={onFilterStatusChanged}
                onShowResultsChanged={onShowResultsChanged}
                items={items}
                strategy={verticalListSortingStrategy}
                modifiers={[restrictToParentElement, restrictToVerticalAxis]}
                collisionDetection={closestCenter}
            />
        </div>

    )

}
export default FilterList