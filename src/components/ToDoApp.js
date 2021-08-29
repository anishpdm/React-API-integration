import { Button, Grid,TextField } from '@material-ui/core'
import React, { Component } from 'react'

export default class ToDoApp extends Component {
  
    state={
        title:"",
        description:"",
    }

    onHandleChange= event=> {
        this.setState({
            [event.target.name]:event.target.value
   
        })
    }

    btnclickchange=()=>{

console.log(this.state)
    }

    render() {
        return (
       <Grid container>

           <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
           <Grid item xs={12} sm={8} md={8} lg={8}>

<TextField
 placeholder="Title"
  margin="normal" 
  fullWidth
   variant="outlined" 
   name="title"
   onChange={this.onHandleChange} />
<TextField 
onChange={this.onHandleChange}
placeholder="Description"
margin="normal"
fullWidth
variant="outlined" 
name="description"/>

<Button
 onClick={this.btnclickchange} 
 fullWidth 
 color="primary" 
 type="submit"
 variant="contained" > SUBMIT</Button>

           </Grid>
           <Grid item xs={12} sm={2} md={2} lg={2}></Grid>




       </Grid>
        )
    }
}
