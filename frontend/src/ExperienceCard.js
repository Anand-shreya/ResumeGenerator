import { useState } from 'react';

function ExperienceCard(props) {
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

    
    <div >
      <div className="groupField" onChange={e=>{
            e.preventDefault();
            props.parentCallback(inputFields);
        }}> 
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name='CompanyName'
                type='text'
                placeholder='Company Name'
                value={input.CompanyName}                
                onChange={event => handleFormChange(index, event)}
                required
              />
              <input
                name='Year'
                placeholder='Duration of work'
                value={input.Year}
                onChange={event => handleFormChange(index, event)}
                required
              />
               <input
                name='Description'
                placeholder='Description'
                value={input.Description}
                onChange={event => handleFormChange(index, event)}
                required
              />
            </div>
          )
        })}
      </div>
      <button onClick={addFields}>Add More..</button>
      <button onClick={removeFields}>Remove </button>
    </div>
  );
}

export default ExperienceCard;