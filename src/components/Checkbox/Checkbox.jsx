import useSpaceflight from "../../hooks/useSpaceflight";

const Checkbox = ({ children, alignClass }) => {
  const { handleCheckboxChange, isChecked } = useSpaceflight();
  console.log(alignClass);

  return (
    <div className={`mb-3 form-check ${alignClass}`}>
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
