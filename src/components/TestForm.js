import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

export default class TestForm extends Component {
    state = {
       
            email: '',
            password: '',
            name:'',
       
        submitted: false,
    }

    handleChange = (event) => {

        
        this.setState({ 

            [event.target.name] : event.target.value
        });
    }

    handleSubmit = () => {
        this.setState({
            submitted:true,
            email: '',
            password: '',
            name:'',
        })
        console.log(this.state)

    }





    render() {
        return (
            <div>

<ValidatorForm 
                onSubmit={this.handleSubmit}>


<h2>Simple form</h2>


<TextValidator
                variant="outlined"
                    label="Name"
                    onChange={this.handleChange}
                    name="name"
                    value={this.state.name}
                    validators={['required', 'matchRegexp:^[0-9]$']}
                    errorMessages={['this field is required', 'name is not valid']}
                fullWidth
                />
                <TextValidator
                variant="outlined"
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                    fullWidth
                />
                <br />
                <TextValidator
                fullWidth
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    value={this.state.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <Button
                fullWidth
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={this.state.submitted}
                >

                     
                    {
                        (this.state.submitted)?'Your form is submitted!':'Submit'

                      
                    }
                </Button>
    
    </ValidatorForm>                
            </div>
        )
    }
}
