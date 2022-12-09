import { useEffect } from "react";
import { useState } from "react";
import style from "./Form.module.css"

const Form = ()=>{

    const [input,setInput] = useState({
        name:"",
        email:"",
        phone:""
    })

    const [errors,setErrors] = useState({
        name:"",
        email:"",
        phone:""
    })

    useEffect(()=>{
        validate();
    },[input])

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setInput({
            ...input,
            [property]: value
        })      
                
        
    }

    const validate=()=>{        
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)){
            setErrors({
                ...errors,
                email:""
            })             
        }else{
            setErrors({
                ...errors,
                email:"invalid email"
            });
        }

       
        // if(/^\d{10}$/.test(input.phone)){
        //     setErrors({
        //         ...errors,
        //         phone:""
        //     })  
        // }else{
        //     setErrors({
        //         ...errors,
        //         phone:"invalid phone"
        //     });
        // }
    }

// change => handleChange => setInput => delay => cambia input => useEffect se da cuenta que cambió input

    const submit = (event)=>{
        event.preventDefault(); // SI!
    }

    return(
        <form onSubmit={submit}>
            <label htmlFor="name">Name: </label>
            <input type="text" 
                    name="name" 
                    value={input.name} 
                    onChange={handleChange}
                    className={errors.name && style.error}
            
            />

            <label htmlFor="email">Email: </label>
            <input type="text" 
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    className={errors.email && style.error} />
            <span>{errors.email && errors.email}</span>
            <br />
            <label htmlFor="phone">Phone: </label>
            <input type="text" 
                    name="phone" 
                    value={input.phone} 
                    onChange={handleChange}
                    className={errors.phone && style.error} />
        </form>
    )
}

export default Form;