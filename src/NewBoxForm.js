import React, {useState} from "react";

const NewBoxForm = ({addBox}) =>{
    const INITIAL_STATE ={
        width:'',
        height:'',
        backgroundColor:''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    
    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit = e =>{
        e.preventDefault();
        addBox({...formData})
        setFormData(INITIAL_STATE)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">width</label>
            <input 
            type="text"
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
            />
            <label htmlFor="height">height</label>
            <input 
            type="text"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            />

            <label htmlFor="color">color</label>
            <input 
            type="text"
            id="color"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
            />

            <button>Add a box!</button>
        </form>
    )
}

export default NewBoxForm;