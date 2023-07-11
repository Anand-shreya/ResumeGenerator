//Skill section in form
import {useState } from 'react';

function SkillsCard(props) {

    const [inputFields, setInputFields] = useState([{}]);                           //To keep Track of data entred by user

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
 

    const handleFormChange = async( index,event) => {
        let data = [...inputFields];
        data[index] = event.target.value;
        setInputFields(data);
        console.log(inputFields);
     }

  return (
      <div className="groupField"onChange={e=>{
            console.log("1")
            e.preventDefault();
            props.parentCallback(inputFields);
        }}> 
        {inputFields.map((input, index) => {
          return (
            <div className='field' key={index}>
              <input
                name='Type'
                type='text'
                placeholder='Skill Description'
                value={input.Type}                
                onChange={async event => { handleFormChange(index, event);}
                }
                required
              />
            </div>
          )
        })}

      <div className="btn_grp">
      <button className='add_btn' onClick={addFields}>Add</button>
      <button className='remove_btn' onClick={removeFields}>Remove </button>
    </div></div>
  );
}

export default SkillsCard;