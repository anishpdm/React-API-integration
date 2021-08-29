import { Divider } from '@material-ui/core'
import React, { Component } from 'react'

export default class Lists extends Component {
    state={
        data:[
            {
                "name":"Anish",
                "age":45,

            },
            {
                "name":"Anoop",
                "age":43,
                
            },
            {
                "name":"Rahul",
                "age":35,
                
            },

        ]
    }
    render() {
        return (
          
<div>
    <ul> {this.state.data.map( (value,index)=>{

        return <li key={index}> {value.name}</li>
    } )} </ul>
</div>
        )
    }
}
