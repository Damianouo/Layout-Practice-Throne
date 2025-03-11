import React from "react";

function Modal({ children, id }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Modal;
