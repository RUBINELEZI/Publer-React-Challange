import { useEffect, useRef, useState } from "react";
import { useOutsideAlerter } from "../hooks/useOutsideAlerter";

const DropDown = ({ children, triger, closeModal }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => {
    setOpen(false);
  });

  useEffect(() => {
    setOpen(false);
  }, [closeModal]);

  return (
    <div ref={wrapperRef} className="dropdown">
      <div onClick={() => setOpen(!open)}>{triger}</div>
      <div
        className={
          open
            ? "dropdown-content dropdownOpen"
            : "dropdown-content dropdownClose"
        }
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
