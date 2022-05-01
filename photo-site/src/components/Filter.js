import { useContext, useState } from "react";
import { PhotoContext } from "../contexts/photo";
//import Dropdown from "../helpers/Dropdown";

const Filter = () =>  {
  const [photoState, dispatch] = useContext(PhotoContext);
  const [dopdownVal, setDropdownVal] = useState();

  const handleChange = (event) => {
    event.persist();
    setDropdownVal(event.target.value);
    dispatch({type: 'FILTER_PHOTO', payload: event.target.value});
  }

    return (
      <div>
        {/* <Dropdown
          options={photoState.filterById}
          value={dopdownVal}
          onChange={handleChange}
        /> */}
        <label>
          <select value={dopdownVal} onChange={handleChange}>
            {photoState.filterById.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
  
  export default Filter;