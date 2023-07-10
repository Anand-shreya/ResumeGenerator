import { useState } from 'react';

function AchievementsCard(props) {
 const [inputFields, setInputFields] = useState([
    { }
  ])
    const addFields = (event) => {
        event.preventDefault();
        let newfield = {}
    
        setInputFields([...inputFields, newfield])
    }
    const removeFields = (event) => {  
        event.preventDefault();
        if(inputFields.length==1)return;  
        setInputFields(inputFields.slice(0,inputFields.length-1));
        props.parentCallback(inputFields);
    }
 
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
     }
  return (

    
    <div className="App">
      <div onChange={e=>{
            e.preventDefault();
            props.parentCallback(inputFields);
        }}> 
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name='Type'
                type='text'
                placeholder='Field'
                value={input.Type}                
                onChange={event => handleFormChange(index, event)}
                required
              />
              <input
                name='Description'
                placeholder='Description of award'
                value={input.Description}
                onChange={event => handleFormChange(index, event)}
                required
              />
            </div>
          )
        })}
      </div>
      <button onClick={addFields}>Add Achievement..</button>
      <button onClick={removeFields}>Remove Last </button>
    </div>
  );
}

export default AchievementsCard;