//Achievements section in form

import { useState,useEffect } from "react";

function AchievementsCard(props) {
  const [inputFields, setInputFields] = useState([{}]);                 //Keep Track of data entered by user
  
  useEffect(()=>{
    props.parentCallback(inputFields);
  },[inputFields])

  //To add a new Achievement dynamically
  const addFields = (event) => {
    event.preventDefault();
    let newfield = {};
    setInputFields([...inputFields, newfield]);
  };

  //To add a remove the last Achievement dynamically
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
    <div
      className="groupField" >
      {inputFields.map((input, index) => {
        return (
          <div className="field" key={index}>
            <input
              name="Type"
              type="text"
              placeholder="Field Of Achievement"
              value={input.Type}
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

      <div className="btn_grp">
        <button className="add_btn" onClick={addFields}>
          Add
        </button>
        <button className="remove_btn" onClick={removeFields}>
          Remove{" "}
        </button>
      </div>
    </div>
  );
}

export default AchievementsCard;
