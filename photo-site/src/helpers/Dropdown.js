const Dropdown = ({ value, options, onChange }) => {
    return (
      <label>
        <select value={value} onChange={onChange(value)}>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </label>
    );
  };
  
  export default Dropdown;