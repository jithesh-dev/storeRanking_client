import React from "react";
import "./AddStoreModal.style.scss";
import { AiOutlineClose } from "react-icons/ai";

const AddStoreModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="AddStoreModal">
      <div className="AddStoreModal__container">
        Hello
        <span className="AddStoreModal__closeBtn" onClick={onClose}>
          <AiOutlineClose />
        </span>
      </div>
    </div>
  );
};

export default AddStoreModal;
