import { cn } from "../../utils/cn.js";

function Dropdown({ children, className }) {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className={cn("btn m-1", className)}>
        {children[0]}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {children[1]}
      </ul>
    </div>
  );
}

export default Dropdown;
