import React from "react";
import "../style/Modal.css";

const Modal = ({ setOpenModal, modalPhoto }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
            <img src={modalPhoto} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Modal;