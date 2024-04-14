import React, {useState} from 'react';
import AnalysisSelector from './components/AnalysisSelector';
import Select from 'react-select'
import './App.css';

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



import { items } from './components/items';
import { DndList, DndItemProps } from './components/DndList';



const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


function App() {

  const [listItems, setListItems] = useState(items);
  const mouseSensor = useSensor(MouseSensor);
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 8, // Enable item onClick function
    },
  });
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





  return (
    <div className="App">
      <header className="App-header">
        <h1>Acute Auth Enigma</h1>
        <div className='App-header--Analysis'>
          <AnalysisSelector />
        </div>
      </header>
      <Select options={options} />
      <DndList
        sensors={sensors}
        onDragEnd={onDragEnd}
        items={listItems}
        strategy={verticalListSortingStrategy}
        modifiers={[restrictToParentElement, restrictToVerticalAxis]}
        collisionDetection={closestCenter}
      />
    </div>
  );
}

export default App;
