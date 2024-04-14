import { FC, ReactNode } from "react";
import { DndContext, DndContextProps, UniqueIdentifier } from "@dnd-kit/core";
import { SortableContext, SortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";

export interface DndItemProps {
  /**
   * Unique identifier of the item
   */
  id: UniqueIdentifier;
  children?: ReactNode;
  name?: string | ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
}
interface DndProps extends DndContextProps {
  items: DndItemProps[];
  strategy?: SortingStrategy;
}

export const DndList: FC<DndProps> = (props) => {
  const {
    items,
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
          const { id, name, icon, onClick, selected, disabled } = item;
          return (
            <SortableItem key={id} id={id} disabled={disabled}>
              <h2 onClick={onClick}>{name}</h2>
            </SortableItem>
          );
        })}
      </SortableContext>
    </DndContext>
  );
};