import { Grid, TextField } from '@material-ui/core'
import React, { Component } from 'react'



export default class LeranGrid extends Component {


  
    gridContainerStyle= {
      paddingLeft: "100px",
      paddingRight: "40px"
    }


    bgstyle={background: 'linear-gradient(45deg, #FE6B8B , #FF8E53 )',}
   
    root= {
      // background: 'linear-gradient(45deg, #FE6B8B , #FF8E53 )',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      //  height: 1200,
      paddingLeft: "40px",
      paddingRight: "40px",
      padding:"30px"
    }
  


    render() {

        return (
            <div style={this.bgstyle}>
                <Grid container
                spacing={4}
                style={this.root}
                
                >
                    <Grid item xs={12} sm={6} md={4} >
<TextField label="Enter name"  color="primary" placeholder="name" fullWidth variant="outlined"/>
                    </Grid>
 
                


                <Grid item xs={12} sm={6} md={4}>
                <TextField label="Enter Roll no" placeholder="Roll no" fullWidth variant="outlined"/>
                </Grid>




                <Grid item xs={12} sm={6} md={4}>
                <TextField placeholder="name" fullWidth variant="outlined"/>
                </Grid>
 
                </Grid>

            </div>
        )
    }
}
