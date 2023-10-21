import { useState } from "react";
import useSpaceflight from "../../hooks/useSpaceflight";

const Checkbox = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const { onCheckboxChange } = useSpaceflight();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if (onCheckboxChange) {
      onCheckboxChange(!isChecked);
    }
  };

  return (
    <div className="mb-3 form-check text-end">
      <input
        type="checkbox"
        className="form-check-input float-none"
        id="upcomingCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="form-check-label ms-2" htmlFor="upcomingCheckbox">
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
