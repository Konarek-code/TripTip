import React, { FC, useState } from "react";
import { List } from "./checklist-items.style";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveChecklist } from "../../store/checklist/checklist.selector";
import { addItemToChecklist } from "../../store/checklist/checklist.reducer";

const ChecklistItems: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();
  const activeChecklist = useSelector(selectActiveChecklist);

  const handleAddItem = (item: string): void => {
    if (item.trim() !== "") {
      dispatch(addItemToChecklist(item));
      setInputValue("");
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      handleAddItem(inputValue);
    }
  };
  // const handleback = ( ):void =>{
  //   dispatch()
  // }
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          e.stopPropagation();
          handleKeyPress(e);
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
        }}
      />
      <List>
        {activeChecklist?.map((item, index) => <li key={index}>{item}</li>)}
      </List>
    </>
  );
};

export default ChecklistItems;
