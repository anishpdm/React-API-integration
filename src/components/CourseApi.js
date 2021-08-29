import React, { Component } from 'react'
import Axios from 'axios'
import { Button,CircularProgress } from '@material-ui/core'

export default class CourseApi extends Component {

    state={
        course:[],
        loadStatus:false
    }

     getData=()=>{
         this.setState({loadStatus:true})
         Axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
             (response)=>{
                 console.log(response)

                 this.setState({
                     course:response.data,
                     loadStatus:false
                 })

                 console.log(this.course)
             }
         )

    }

    render() {
        return (
            <div>

<Button onClick={this.getData}>Get Courses</Button>


{!this.state.loadStatus ? (
                    <ul> {this.state.course.map( (value,index)=>{

                        return <div>
                            <li key={index}> {value.courseTitle}</li>
                      
                             </div> 
                
                    } )} </ul>


                ) : <CircularProgress color="secondary" /> }

    
</div>
         
        )
    }
}
