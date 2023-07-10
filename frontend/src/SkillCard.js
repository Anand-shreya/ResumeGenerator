import { useEffect, useState } from 'react';

function SkillsCard(props) {
 const [inputFields, setInputFields] = useState([{}])
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
 
    // useEffect(()=>{
    const handleFormChange = async( index,event) => {
        let data = [...inputFields];
        // data.push(event.target.value);
        // console.log(event.target.value)
        data[index] = event.target.value;
        // setInputFields(inputFields=>({...inputFields,index:event.target.value}));
        setInputFields(data);
     }
    // },[inputFields])
  return (

    
    <div className="App">
      <div onChange={e=>{
            console.log("1")
            e.preventDefault();
            props.parentCallback(inputFields);
        }}> 
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name='Type'
                type='text'
                placeholder='Skill'
                value={input.Type}                
                onChange={async event => { handleFormChange(index, event);}
                }
                required
              />
            </div>
          )
        })}
      </div>
      <button onClick={addFields}>Add Skill..</button>
      <button onClick={removeFields}>Remove Last </button>
    </div>
  );
}

export default SkillsCard;