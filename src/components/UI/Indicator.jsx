import { cn } from "../../utils/cn.js";

function Indicator({ children, className, text = "" }) {
  return (
    <div className="indicator">
      <span className={cn("indicator-item badge badge-secondary size-6 rounded-full", className)}>
        {text}
      </span>
      {children}
    </div>
  );
}

export default Indicator;
