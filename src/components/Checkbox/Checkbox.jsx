const Checkbox = ({ children }) => {
  return (
    <div className="mb-3 form-check text-end">
      <input
        type="checkbox"
        className="form-check-input float-none"
        id="exampleCheck1"
      />
      <label className="form-check-label ms-2" htmlFor="exampleCheck1">
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
