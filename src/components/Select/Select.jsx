const Select = ({ children }) => {
  return (
    <>
      <select className="form-select" aria-label="Default select example">
        <option defaultValue>{children}</option>
        <option value="1">One</option>
      </select>
    </>
  );
};

export default Select;
