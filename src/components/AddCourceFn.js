import React from 'react'

export default function AddCourceFn() {

    const [title, setTitle] = React.useState("")
    const [date, setDate] = React.useState("")
    const [courseDuration, setcourseDuration] = React.useState("")
    const [courseVenue, setcourseVenue] = React.useState("")

const   onHandleChange= event=> {
    this.setState({
        [event.target.name]:event.target.value

    })
}


    const btnclickchange=()=>{

    }

    return (
        <div>
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
onChange={onHandleChange} />
<TextField 
onChange={onHandleChange}
placeholder="enter Description"
margin="normal"
fullWidth
variant="outlined" 
name="courseDescription"/>

<TextField 
type="date"
onChange={onHandleChange}
placeholder="course Date"
margin="normal"
fullWidth
variant="outlined" 
name="courseDate"/>


<TextField 
onChange={onHandleChange}
placeholder="course Duration"
margin="normal"
fullWidth
variant="outlined" 
name="courseDuration"/>

<TextField 
onChange={onHandleChange}
placeholder="course Venue"
margin="normal"
fullWidth
variant="outlined" 
name="courseVenue"/>

<Button
onClick={btnclickchange} 
fullWidth 
color="primary" 
type="submit"
variant="contained" > SUBMIT</Button>

</Grid>
<Grid item xs={12} sm={2} md={2} lg={2}></Grid>




</Grid> 
        </div>
    )
}
