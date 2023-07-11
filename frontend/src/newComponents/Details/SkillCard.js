//Skill section in form
import {useState ,useEffect} from 'react';

function SkillsCard(props) {

    const [inputFields, setInputFields] = useState([{}]);                           //To keep Track of data entred by user

    useEffect(()=>{
      props.parentCallback(inputFields);
    },[inputFields])

    const addFields = (event) => {
        event.preventDefault();
        let newfield = {}
        setInputFields([...inputFields, newfield])
    }

    const removeFields = (event) => {  
        event.preventDefault();
        if(inputFields.length==1)return;  
        setInputFields(inputFields.slice(0,inputFields.length-1));
        
    }
 

    const handleFormChange = async( index,event) => {
        let data = [...inputFields];
        data[index] = event.target.value;
        setInputFields(data);
        console.log(inputFields);
     }

  return (
      <div className="groupField" > 
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