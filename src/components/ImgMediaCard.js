import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  media: {
    height: "100px"
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  return (
    
    <Grid item sm={2.4} xs={2.4} md={2.4} lg={2.4} xl={2.4} >
      <Card className={classes.root} id="WhiteCard">
        <CardMedia
          className={classes.media}
          image={props.image}
          id="media"
        />
        <CardContent className="textcenter">
          <Typography gutterBottom variant="h5" component="h2"
            // className="textblack"
            className='title colorblack'
          >
            <span>{props.title}</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className='description cblack'>
            <span> {props.description}</span>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
