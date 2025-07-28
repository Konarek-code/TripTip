import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToChecklist } from "../../store/checklist/checklist.reducer";
import { RootState } from "../../store/store";
import {
  List,
  Input,
  AddButton,
  InputContainer,
} from "./checklist-items.style";
import { updateChecklistInFirestore } from "../../utils/checklist/updateChecklistInFirestore";

const ChecklistItems: FC<{ checklistId: string }> = ({ checklistId }) => {
  const checklist = useSelector((state: RootState) =>
    state.checklist.allChecklists.find((ch) => ch.id === checklistId),
  );

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const maxItems = 15;

  const handleAddItem = async (): Promise<void> => {
    if (
      inputValue.trim() !== "" &&
      checklist != null &&
      checklist.items.length < maxItems
    ) {
      const updatedItems = [...checklist.items, inputValue.trim()];
      dispatch(addItemToChecklist({ checklistId, item: inputValue.trim() }));

      await updateChecklistInFirestore(checklistId, { items: updatedItems });
      setInputValue("");
    }
  };

  return (
    <>
      <InputContainer>
        <Input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              void handleAddItem();
            }
          }}
          placeholder={
            checklist != null && checklist.items.length >= maxItems
              ? "Max 15 items reached"
              : "Add new item"
          }
          disabled={checklist != null && checklist.items.length >= maxItems}
        />
        <AddButton
          onClick={() => {
            void handleAddItem();
          }}
          disabled={
            checklist != null &&
            (checklist.items.length >= maxItems || inputValue.trim() === "")
          }
          title={
            checklist != null && checklist.items.length >= maxItems
              ? "Max 15 items reached"
              : "Add item"
          }
        >
          Add
        </AddButton>
      </InputContainer>

      <List>
        {checklist?.items.map((item, idx) => <li key={idx}>{item}</li>)}
      </List>
    </>
  );
};

export default ChecklistItems;
