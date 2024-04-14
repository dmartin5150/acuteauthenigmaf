import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DndItemProps } from "./DndList";

export const SortableItem = (props: DndItemProps) => {
  const { id, children, disabled } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
    transition,
    transform,
    isDragging,
    active,
  } = useSortable({
    id,
    disabled,
  });
  const isActiveItem = isDragging && active?.id === id;
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    boxShadow: isDragging ? "5px 5px 10px 0px grey" : "none",
    backgroundColor: isActiveItem ? "lightgrey" : "initial",
    color: disabled ? "grey" : "initial",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};
