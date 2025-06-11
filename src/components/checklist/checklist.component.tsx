import React, { useState } from "react";
import {
  Wrapper,
  Title,
  ChecklistInput,
  ButtonContainer,
  FullScreenCard,
} from "./checklist.style";
import Button, { BUTTON_TYPE_CLASSES } from "../buttons/button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveChecklist } from "../../store/checklist/checklist.selector";
import { chooseChecklist } from "../../store/checklist/checklist.reducer";
import editicon from "../../assets/edit.png";
import ChecklistItems from "../checklist-items/checklist-items.component";

const Checklist: React.FC<{ id: string }> = ({ id }) => {
  const dispatch = useDispatch();
  const activeChecklist = useSelector(selectActiveChecklist);
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [title, setTitle] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenChecklist = (): void => {
    console.log("clicked");
    dispatch(
      chooseChecklist({
        id,
        items: [],
      }),
    );
    setIsOpen((prev) => !prev);
    console.log("isOpen", isOpen);
  };

  const handleSaveTitle = (): void => {
    setIsEditing(false);
    console.log("title saved:", title);
  };

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
          <span>{title}</span>
        )}
      </Title>
      {isEditing ? (
        <Button
          buttonType={BUTTON_TYPE_CLASSES.akcept}
          onClick={(e) => {
            e.stopPropagation();
            handleSaveTitle();
          }}
        ></Button>
      ) : (
        <ButtonContainer>
          <Button
            icon={editicon}
            buttonType={BUTTON_TYPE_CLASSES.edit}
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
          ></Button>
          <Button
            icon={editicon}
            buttonType={BUTTON_TYPE_CLASSES.arrow}
            onClick={(e) => {
              e.stopPropagation();
              handleOpenChecklist();
            }}
          ></Button>
        </ButtonContainer>
      )}
      {activeChecklist !== null && activeChecklist !== undefined && (
        <FullScreenCard>
          <Title>{title}</Title>
          <ChecklistItems />
        </FullScreenCard>
      )}
    </Wrapper>
  );
};
export default Checklist;
