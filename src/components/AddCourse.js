import { Button, Grid,TextField } from '@material-ui/core'
import React, { Component } from 'react'
import Axios from 'axios'
import CourseApi from './CourseApi'

export default class AddCourse extends Component {
  
    state={
        courseTitle:"",
        courseDescription:"",
        courseDate:"",
        courseDuration:"",
        courseVenue:"",
        data:[]
    }
    constructor(props){
        super(props);

       this.getData()
    }

    onHandleChange= event=> {
        this.setState({
            [event.target.name]:event.target.value
   
        })
    }


    getData=()=>{
        this.setState({loadStatus:true})
        Axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
            (response)=>{
                console.log(response)

                this.setState({
                    data:response.data,
                })

                console.log(this.course)
            }
        )

   }

    btnclickchange=()=>{

console.log(this.state)

this.addData(this.state)
    }

    addData=(x)=>{
        Axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",x).then(
            (response)=>{
                console.log(response.data.status)
                if(response.data.status=="success"){
                    alert("Succesfully added")
                    this.getData()

                }
                else{
                    alert("Error")

                }

            }
        )

   }

    render() {
        return (
       <Grid container style={{ padding:40 }}>


      <Grid item xs={12} sm={6} md={6} >


                

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
placeholder="enter Description"
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
      <Grid item xs={12} sm={6} md={6} > <CourseApi sendingData={this.state.data} /> </Grid> 
      

 

       </Grid>
        )
    }
}
