import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h4"> Link Ur Codes </Typography>

                        <Link color="inherit"  
 color="primary" to="/" >Add Course</Link>
 <Link color="inherit"  color="primary" to="/test" >Test form</Link>
                        <Link color="inherit" to="/viewcourse" >View Course</Link>
                        <Button href="/" color="inherit"> Add Course </Button>
                        <Button href="/viewcourse" color="inherit"> View Course </Button>
                    </Toolbar>
                </AppBar>

                <br />
                <br />
                <br />
                <br />
                <br />


            </div>
        )
    }
}
