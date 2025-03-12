import React from "react";
import { cn } from "../../utils/cn.js";

function Modal({ children, className, id }) {
  return (
    <dialog id={id} className="modal">
      <div className={cn("modal-box", className)}>{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Modal;
