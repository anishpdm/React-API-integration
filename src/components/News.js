import React, { Component } from 'react'
import Axios from 'axios'
import { Avatar, Button,Card,CardActions,CardContent,CardHeader,CardMedia,CircularProgress, Collapse, Grid, IconButton, Typography } from '@material-ui/core'
// import MoreVertIcon from '@material-ui/icons/MoreVert';

export default class News extends Component {

    constructor(props){  
        super(props);  
       this.getData() 
      }  

    state={
        news:[],
        loadStatus:false
    }

     getData=()=>{
         this.setState({loadStatus:true})
         Axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
             (response)=>{
                 console.log(response.data.articles)

                 this.setState({
                     news:response.data.articles,
                     loadStatus:false
                 })

                 console.log(this.course)
             }
         )

    }

    root= {
        maxWidth: 345,
      }
      media={
        height: 0,
        paddingTop: '56.25%', // 16:9
      }
      
    //   avatar= {
    //     backgroundColor: red[500],
    //   }

    render() {
        return (
            <div>

                

<Button onClick={this.getData}>Get Courses</Button>

<Grid container>

    <Grid item xs={12} sm={6} md={4}>


   

    </Grid>


</Grid>


{!this.state.loadStatus ? (
                 <Grid container>    {this.state.news.map( (value,index)=>{

                        return <div>  <Grid item xs={12} sm={12} md={12}>


<Card style={this.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={this.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={value.title}
        subheader={value.publishedAt}
      />
      <CardMedia
        // className={classes.media}
        image={value.urlToImage}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {value.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
        </IconButton>
      
       
      </CardActions>
     
    </Card>
                      
                         </Grid>    </div> 
                
                    } )}  </Grid>


                ) : <CircularProgress color="secondary" /> }

    
</div>
         
        )
    }
}
