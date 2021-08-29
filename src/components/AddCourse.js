import { Button, Grid,TextField } from '@material-ui/core'
import React, { Component } from 'react'
import Axios from 'axios'

export default class AddCourse extends Component {
  
    state={
        courseTitle:"",
        courseDescription:"",
        courseDate:"",
        courseDuration:"",
        courseVenue:""
    }

    onHandleChange= event=> {
        this.setState({
            [event.target.name]:event.target.value
   
        })
    }

    btnclickchange=()=>{

console.log(this.state)

this.addData(this.state)
    }

    addData=(x)=>{
        Axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",x).then(
            (response)=>{
                console.log(response)
            }
        )

   }

    render() {
        return (
       <Grid container>

           <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
           <Grid item xs={12} sm={8} md={8} lg={8}>

<TextField
required
 placeholder="Title"
  margin="normal" 
  fullWidth
   variant="outlined" 
   name="courseTitle"
   onChange={this.onHandleChange} />
<TextField 
onChange={this.onHandleChange}
placeholder="Description"
margin="normal"
fullWidth
variant="outlined" 
name="courseDescription"/>

<TextField 
type="date"
onChange={this.onHandleChange}
placeholder="course Date"
margin="normal"
fullWidth
variant="outlined" 
name="courseDate"/>


<TextField 
onChange={this.onHandleChange}
placeholder="course Duration"
margin="normal"
fullWidth
variant="outlined" 
name="courseDuration"/>

<TextField 
onChange={this.onHandleChange}
placeholder="course Venue"
margin="normal"
fullWidth
variant="outlined" 
name="courseVenue"/>

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
