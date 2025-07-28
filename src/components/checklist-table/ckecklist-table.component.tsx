import React, { useEffect } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import Checklist from "../checklist/checklist.component";
import SortableChecklistWrapper from "../sortable-checklist-wrapper/sortable-cheklist-wrapper";
import { Container } from "./checklist-table.style";
import Button, { BUTTON_TYPE_CLASSES } from "../buttons/button.component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addChecklist,
  reorderChecklists,
  setChecklists,
} from "../../store/checklist/checklist.reducer";
import { fetchUserChecklists } from "../../utils/checklist/fetchUserChecklists";
import { saveChecklistToFirestore } from "../../utils/checklist/saveChecklistToFirestore";
import { auth } from "../../utils/firebase/firebase.utils";

const ChecklistTable: React.FC = () => {
  const dispatch = useDispatch();
  const checklists = useSelector(
    (state: RootState) => state.checklist.allChecklists,
  );

  const handleAddChecklist = async (): Promise<void> => {
    const user = auth.currentUser;
    if (user === null || user === undefined) {
      alert("you must be logged in to add a checklist");
      return;
    }

    if (checklists.length >= 20) {
      alert("cannot add more checklists");
      return;
    }

    const id = `checklist_${Date.now()}`;
    const newChecklist = {
      id,
      title: "",
      userId: user.uid,
      items: [],
    };

    dispatch(addChecklist(newChecklist));
    await saveChecklistToFirestore(newChecklist);
  };

  useEffect(() => {
    const fetchChecklists = async (): Promise<void> => {
      const user = auth.currentUser;
      if (user !== null && user !== undefined) {
        const userChecklists = await fetchUserChecklists(user.uid);
        const mappedChecklists = userChecklists.map((doc: any) => ({
          id: doc.id,
          title: doc.title ?? "",
          items: doc.items ?? [],
          userId: doc.userId ?? "",
        }));
        dispatch(setChecklists(mappedChecklists));
      }
    };

    void fetchChecklists();
  }, []);

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
      const oldIndex = checklists.findIndex((c) => c.id === active.id);
      const newIndex = checklists.findIndex((c) => c.id === over.id);
      dispatch(reorderChecklists({ oldIndex, newIndex }));
    }
  };

  return (
    <>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.add}
        onClick={() => {
          void handleAddChecklist();
        }}
      >
        {" "}
        add new checklist
      </Button>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={checklists.map((c) => c.id)}
          strategy={rectSortingStrategy}
        >
          <Container>
            {checklists.map((checklist) => (
              <SortableChecklistWrapper key={checklist.id} id={checklist.id}>
                <Checklist id={checklist.id} />
              </SortableChecklistWrapper>
            ))}
          </Container>
        </SortableContext>
      </DndContext>
    </>
  );
};
export default ChecklistTable;
