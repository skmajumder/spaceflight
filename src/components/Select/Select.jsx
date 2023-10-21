const Select = ({ options }) => {
  return (
    <select className="form-select" aria-label="Default select example">
      {options.map((option, index) => (
        <option key={index} value={index}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
