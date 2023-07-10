import { useState } from 'react';

function EducationCard(props) {
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
                name='SchoolName'
                type='text'
                placeholder='Institute Name'
                value={input.SchoolName}                
                onChange={event => handleFormChange(index, event)}
                required
              />
              <input
                name='Year'
                placeholder='Duration of study'
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

export default EducationCard;