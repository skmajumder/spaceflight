import useSpaceflight from "../../hooks/useSpaceflight";

const Checkbox = ({ children }) => {
  const { handleCheckboxChange, isChecked } = useSpaceflight();

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
