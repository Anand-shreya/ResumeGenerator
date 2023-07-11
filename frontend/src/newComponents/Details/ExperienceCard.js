//Experiance Section in form

import { useState } from "react";

function ExperienceCard(props) {

  const [inputFields, setInputFields] = useState([{}]);                   //To keep track of data entered by user

  // Add new Experence field Dynamically
  const addFields = (event) => {
    event.preventDefault();
    let newfield = {};
    setInputFields([...inputFields, newfield]);
  };


  // remove last Experence field Dynamically
  const removeFields = (event) => {
    event.preventDefault();
    if (inputFields.length == 1) return;
    setInputFields(inputFields.slice(0, inputFields.length - 1));
    props.parentCallback(inputFields);
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  return (
    <div>
      <div
        className="groupField"
        onChange={(e) => {
          e.preventDefault();
          props.parentCallback(inputFields);
        }}
      >
        {inputFields.map((input, index) => {
          return (
            <div className="field" key={index}>
              <input
                name="CompanyName"
                type="text"
                placeholder="Company Name"
                value={input.CompanyName}
                onChange={(event) => handleFormChange(index, event)}
                required
              />
              <input
                name="Year"
                type="text"
                placeholder="Duration of work"
                value={input.Year}
                onChange={(event) => handleFormChange(index, event)}
                required
              />
              <input
                name="Description"
                type="text"
                placeholder="Description"
                value={input.Description}
                onChange={(event) => handleFormChange(index, event)}
                required
              />
            </div>
          );
        })}
      </div>

      <div className="btn_grp">
        <button className="add_btn" onClick={addFields}>Add</button>
        <button className="remove_btn" onClick={removeFields}>Remove</button>
      </div>
    </div>
  );
}

export default ExperienceCard;
