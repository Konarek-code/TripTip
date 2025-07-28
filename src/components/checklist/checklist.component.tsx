import React, { useState } from "react";
import {
  Wrapper,
  Title,
  ChecklistInput,
  ButtonContainer,
  FullScreenCard,
  Overlay,
} from "./checklist.style";
import Button, { BUTTON_TYPE_CLASSES } from "../buttons/button.component";
import { useDispatch, useSelector } from "react-redux";
import {
  chooseChecklist,
  renameChecklist,
} from "../../store/checklist/checklist.reducer";
import {
  selectActiveChecklistId,
  selectAllChecklists,
} from "../../store/checklist/checklist.selector";
import editicon from "../../assets/edit.png";
import ChecklistItems from "../checklist-items/checklist-items.component";

import { updateChecklistInFirestore } from "../../utils/checklist/updateChecklistInFirestore";

interface Props {
  id: string;
}

const Checklist: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const activeChecklistId = useSelector(selectActiveChecklistId);
  const allChecklists = useSelector(selectAllChecklists);
  const checklist = allChecklists.find((c) => c.id === id);

  const [isEditing, setIsEditing] = useState<boolean>(
    checklist?.title == null || checklist.title.trim() === "",
  );

  const [title, setTitle] = useState<string>(checklist?.title ?? "");
  const isOpen = activeChecklistId === id;

  const handleOpenChecklist = (): void => {
    dispatch(chooseChecklist(id));
  };

  const handleSaveTitle = async (): Promise<void> => {
    dispatch(renameChecklist({ id, newTitle: title }));
    await updateChecklistInFirestore(id, { title });
    setIsEditing(false);
  };

  if (checklist === null || checklist === undefined) return null;

  return (
    <Wrapper>
      <Title>
        {isEditing ? (
          <ChecklistInput
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Add a title"
          />
        ) : (
          <span>{checklist.title}</span>
        )}
      </Title>

      {isEditing ? (
        <Button
          buttonType={BUTTON_TYPE_CLASSES.akcept}
          onClick={(e) => {
            e.stopPropagation();
            void handleSaveTitle();
          }}
        />
      ) : (
        <ButtonContainer>
          <Button
            icon={editicon}
            buttonType={BUTTON_TYPE_CLASSES.edit}
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
          />
          <Button
            icon={editicon}
            buttonType={BUTTON_TYPE_CLASSES.arrow}
            onClick={(e) => {
              e.stopPropagation();
              handleOpenChecklist();
            }}
          />
        </ButtonContainer>
      )}

      {isOpen && (
        <>
          <Overlay onClick={() => dispatch(chooseChecklist(null))} />
          <FullScreenCard>
            <Title>{checklist.title}</Title>
            <ChecklistItems checklistId={id} />
          </FullScreenCard>
        </>
      )}
    </Wrapper>
  );
};

export default Checklist;
