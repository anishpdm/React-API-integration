import { Button, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useForm } from './useForm'

const Basicfn = () => {
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")

    const [value,handleChange]=useForm(
        {
            name:"",
            email:""
        }
    )

    useEffect( ()=>{
        console.log("Hello")
    },[])
    const changebtnName=()=>{
        
console.log(value)


    }
    return (
        <div>
             \<TextField name="name" value={value.name} onChange={handleChange}/>
            <TextField name="email" value={value.email} onChange={handleChange}/>
            {/* <TextField name="name" value={name} onChange={(event)=>{setName(event.target.value)}}/>
            <TextField name="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/> */}
            <Button onClick={changebtnName} > SUBMIT  </Button>
        </div>
    )
}

export default Basicfn
