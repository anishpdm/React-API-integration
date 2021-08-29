import React, { Component } from 'react'
import Axios from 'axios'
import { Button,CircularProgress } from '@material-ui/core'

export default class ApiTest extends Component {

    state={
        joke:"",
        isLoading: false,
    }

     getData=()=>{
         this.setState({isLoading:true})
         
         Axios.get("https://official-joke-api.appspot.com/random_joke").then(
             (response)=>{
                 console.log(response)

                 this.setState({

                     joke:response.data.setup +"..."+ response.data.punchline,
                     isLoading:false
                 })
             }
         )

    }

    render() {
        return (
            <div>
                <Button onClick={this.getData}>Get joke</Button>

                {!this.state.isLoading ? (
                    this.state.joke
                ) : <CircularProgress color="secondary" /> }
            
            </div>
        )
    }
}
