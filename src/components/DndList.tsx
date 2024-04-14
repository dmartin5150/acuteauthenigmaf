import { FC, ReactNode } from "react";
import { DndContext, DndContextProps, UniqueIdentifier } from "@dnd-kit/core";
import { SortableContext, SortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import Filter from "./Filter";

export interface DndItemProps {
  id: UniqueIdentifier;
  children?: ReactNode;
  name?: string | ReactNode;
  icon?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
}
interface DndProps extends DndContextProps {
  items: DndItemProps[];
  strategy?: SortingStrategy;
  onClickElement: (id:number) => void;
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


const onClick = (event: React.MouseEvent<HTMLButtonElement> ) => {
    const target = event.target as HTMLButtonElement;
    console.log('id = ', target.id)
}


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
          const { id, name, icon, selected, disabled } = item;
          return (
              <SortableItem key={id} id={id} disabled={disabled}  >
                <div className={id as string}  >
                  <div>
                    {/* <h2>{name}</h2> */}
                    <Filter id={id} name={name} />
                  </div>

                </div>
              </SortableItem>
          );
        })}
      </SortableContext>
    </DndContext>
  );
};