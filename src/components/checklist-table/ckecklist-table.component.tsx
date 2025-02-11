import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  UniqueIdentifier,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Checklist from "../checklist/checklist.component"; // Import Checklist
import SortableChecklistWrapper from "../sortable-checklist-wrapper/sortable-cheklist-wrapper"; // Wrap Checklist with sortable
import { Container } from "./checklist-table.style";
import Button, { BUTTON_TYPE_CLASSES } from "../buttons/button.component";

const ChecklistTable: React.FC = () => {
  const [checklist, setchecklist] = useState<string[]>([]);

  const handleaddchecklist = (): void => {
    const id = checklist.length + 1;
    if (id > 20) {
      alert("cannot add more checklists");
      return;
    }
    setchecklist([...checklist, `checklist${id}`]);
  };
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { delay: 100, tolerance: 5 },
    }),
  );

  const handleDragEnd = (event: {
    active: { id: UniqueIdentifier };
    over: { id: UniqueIdentifier } | null;
  }): void => {
    const { active, over } = event;

    if (over !== null && active.id !== over.id) {
      setchecklist((checklist) => {
        const oldIndex = checklist.indexOf(active.id as string);
        const newIndex = checklist.indexOf(over.id as string);

        return arrayMove(checklist, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      <Button buttonType={BUTTON_TYPE_CLASSES.add} onClick={handleaddchecklist}>
        {" "}
        add new checklist
      </Button>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={checklist} strategy={rectSortingStrategy}>
          <Container>
            {checklist.map((id) => (
              <SortableChecklistWrapper key={id} id={id}>
                <Checklist id={id} />
              </SortableChecklistWrapper>
            ))}
          </Container>
        </SortableContext>
      </DndContext>
    </>
  );
};

export default ChecklistTable;
